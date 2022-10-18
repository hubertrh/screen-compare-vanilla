"use strict";

// Year change in copyright text on window load
window.addEventListener("load", () => {
  const copyright = document.querySelector(".copyright");
  const year = new Date().getFullYear();

  if (copyright) {
    copyright.textContent.replace("2022", year.toString());
  }
});

// Screen edit button
const editNameButtons = document.querySelectorAll(".name-edit");

const handleEditButton = (e) => {
  const target = e.path[2].querySelector(".name");

  if (target.hasAttribute("readonly")) {
    target.removeAttribute("readonly");
    target.select();
  } else {
    target.setAttribute("readonly", true);
  }
};

editNameButtons.forEach((button) => {
  button.addEventListener("click", (e) => handleEditButton(e));
});

// Screen name input (resize, blur, focusout)
const nameInputs = document.querySelectorAll(".name");

const handleInputResize = (e) => {
  if (e.target.value.length <= 20 && e.target.value.length >= 1) {
    e.target.size = e.target.value.length;
  }
};

const handleInputBlur = (e) => {
  if (e.key === "Enter") {
    e.target.setAttribute("readonly", true);
    e.target.blur();
  }
};

const handleInputFocusOut = (e) => {
  const target = e.path[0];

  if (
    (e.relatedTarget &&
      e.target.id.substring(e.target.id.length - 1) ===
        e.relatedTarget.firstChild.id.substring(e.relatedTarget.firstChild.id.length - 1)) ||
    !(e.relatedTarget && e.relatedTarget.id === "edit-name-button")
  ) {
    target.setAttribute("readonly", true);
    target.blur();
  }
};

nameInputs.forEach((input) => {
  input.addEventListener("input", (e) => handleInputResize(e));
  input.addEventListener("keydown", (e) => handleInputBlur(e));
  input.addEventListener("focusout", (e) => handleInputFocusOut(e));
});

// Unit switch label
const unitSwitches = document.querySelectorAll(".units-switch");
const handleUnitSwitch = (e) => {
  const label = document.querySelector(`label[for=${e.target.id}].units-label`);

  if (label) {
    label.textContent = e.target.checked ? "cm" : "in";
  }
};

unitSwitches.forEach((unitSwitch) => {
  unitSwitch.addEventListener("change", (e) => handleUnitSwitch(e));
});

// 3rd form add/remove
const addButton = document.querySelector(".btn-add");
const removeButton = document.querySelector(".btn-remove");

const toggleRequiredAttributes = () => {
  document.getElementById("size-3").toggleAttribute("required");
  document.getElementById("units-3").toggleAttribute("required");
  document.getElementById("ratio-w-3").toggleAttribute("required");
  document.getElementById("ratio-h-3").toggleAttribute("required");
};

const handleAddForm = () => {
  document.querySelectorAll(".screen").item(2).classList.remove("screen--inactive");
  document.querySelector(".screen-forms").classList.remove("screen-forms--double");
  document.querySelector(".btn-add").classList.add("transparent");

  toggleRequiredAttributes();

  setTimeout(() => {
    document.querySelector(".btn-add").classList.add("invisible");
  }, 150);
};

const handleRemoveForm = () => {
  document.querySelectorAll(".screen").item(2).classList.add("screen--inactive");
  document.querySelector(".screen-forms").classList.add("screen-forms--double");
  document.querySelector(".btn-add").classList.remove("invisible");
  document.querySelector(".btn-add").classList.remove("transparent");

  document.getElementById("screen-form-3").reset();

  toggleRequiredAttributes();
};

addButton.addEventListener("click", (e) => handleAddForm());
removeButton.addEventListener("click", (e) => handleRemoveForm());

////////////////////////////////////////////////

// Handling form data
const numberInputs = document.querySelectorAll("input[type=number]");
numberInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let regexTest;
    if (e.target.classList.contains("res-input")) {
      regexTest = /^\d{0,5}$|(?=^.{0,8}$)^\d+\.\d{0,2}$/g.test(e.target.value);
    } else {
      regexTest = /^\d{0,3}$|(?=^.{0,6}$)^\d+\.\d{0,2}$/g.test(e.target.value);
    }
    if (!regexTest) {
      e.target.value = e.target.value.slice(0, -1);
    }
  });
});

const handleComparison = () => {
  const diagonals = Array.from(document.querySelectorAll(".size-input[required]")).map((field) =>
    Number(field.value.replace(/,/g, "."))
  );
  const units = Array.from(document.querySelectorAll(".units-label")).map(
    (field) => field.textContent
  );
  const ratios = Array.from(document.querySelectorAll(".ratio-input[required]")).map((field) =>
    Number(field.value.replace(/,/g, "."))
  );
  const resolutions = Array.from(document.querySelectorAll(".res-input")).map((field) =>
    Number(field.value.replace(/,/g, "."))
  );
  // console.log(`diagonals --> ${diagonals}`);
  // console.log(`units --> ${units}`);
  // console.log(`ratios --> ${ratios}`);
  // console.log(`resolutions --> ${resolutions}`);

  units.forEach((unit, index) => {
    if (unit === "in" && diagonals[index] > 0) {
      diagonals[index] = diagonals[index] * 2.54;
    }
  });

  // console.log(`diagonals (cm) --> ${diagonals}`);

  const calculate = () => {
    let sides = [];

    const calculateSides = () => {
      // Calculate screens' sides from diagonal and aspect ratio values
      diagonals.forEach((diagonal, index) => {
        const ratioW = ratios[index * 2];
        const ratioH = ratios[index * 2 + 1];
        const sideH = (diagonal * ratioH) / Math.sqrt(ratioW ** 2 + ratioH ** 2);
        // console.log(`sideH --> ${sideH}`);

        const sideW = (ratioW / ratioH) * sideH;
        // console.log(`sideW --> ${sideW}`);

        sides.push(sideW);
        sides.push(sideH);
      });

      // console.log(`sides --> ${sides}`);
    };

    const calculateProportions = () => {
      const screens = document.querySelectorAll(".visualization");

      let containerWidth = getComputedStyle(document.querySelector(".visualization-box")).width;
      containerWidth = Number(containerWidth.slice(0, containerWidth.length - 2));

      let containerHeight = getComputedStyle(document.querySelector(".visualization-box")).height;
      containerHeight = Number(containerHeight.slice(0, containerHeight.length - 2));

      let scale = 0;

      sides.forEach((side, index) => {
        if ((index + 1) % 2 === 1) {
          if (scale < side / containerWidth) {
            scale = side / containerWidth;
          }
        }
        if ((index + 1) % 2 === 0) {
          if (scale < side / containerHeight) {
            scale = side / containerHeight;
          }
        }
        // console.log(`side --> ${side}`);
      });

      // console.log(`sides --> ${sides}`);

      screens.forEach((screen, index) => {
        screen.setAttribute(
          "style",
          `
          width: ${sides[index * 2] / scale}px; 
          height: ${sides[index * 2 + 1] / scale}px;
        `
        );
      });
    };

    const handleGuides = () => {
      const diagonalGuides = document.querySelectorAll(".diagonal");

      diagonals.forEach((diagonal, index) => {
        diagonalGuides[index].textContent = `${Number((diagonal / 2.54).toFixed(2))} in`;

        const angle = Math.atan(ratios[index * 2 + 1] / ratios[index * 2]) * (180 / Math.PI);

        diagonalGuides[index].setAttribute("style", `transform: rotate(-${angle}deg)`);
        diagonalGuides[index].style.setProperty(
          "--after-width",
          `${diagonalGuides[index].textContent.length - 1}em`
        );
      });

      const sortedScreens = [...document.querySelectorAll(".visualization")].sort((a, b) => {
        const aDiagonal = Number(
          a.children[0].textContent.slice(0, a.children[0].textContent.length - 3)
        );
        const bDiagonal = Number(
          b.children[0].textContent.slice(0, b.children[0].textContent.length - 3)
        );
        return bDiagonal - aDiagonal;
      });

      // remove screen with class "hidden" from sortedScreens array
      sortedScreens.forEach((screen, index) => {
        if (screen.classList.contains("hidden")) {
          sortedScreens.splice(index, 1);
        }
      });

      sortedScreens.forEach((screen, index) => {
        screen.style.zIndex = (index + 1).toString();
      });

      const guidesWrapperBottom = document.querySelector(".guides-wrapper--bottom");
      const guidesWrapperLeft = document.querySelector(".guides-wrapper--left");

      // remove all guides
      while (guidesWrapperBottom.firstChild) {
        guidesWrapperBottom.removeChild(guidesWrapperBottom.firstChild);
      }
      while (guidesWrapperLeft.firstChild) {
        guidesWrapperLeft.removeChild(guidesWrapperLeft.firstChild);
      }

      sides.forEach((side, index) => {
        let guideSide;

        (index + 1) % 2 === 1 ? (guideSide = "bottom") : (guideSide = "left");

        const curScreen = sortedScreens[Math.floor(index / 2)];

        const screenNumber =
          curScreen.className.slice(curScreen.className.length - 1, curScreen.className.length) - 1;

        const newGuide = document.createElement("p");
        newGuide.className = `guides guides--${guideSide} guides--${guideSide}--${
          screenNumber + 1
        }`;

        const textContent = `${Number(
          (sides[screenNumber * 2 + (index % 2)] / 2.54).toFixed(2)
        )} in`;

        newGuide.textContent = textContent.toString();

        // TODO - refactor
        if (guideSide === "bottom") {
          guidesWrapperBottom.appendChild(newGuide);
        }
        if (guideSide === "left") {
          guidesWrapperLeft.appendChild(newGuide);
        }

        guideSide[0].toUpperCase();
      });

      const diagonalGuidesSorted = [...diagonalGuides].sort((a, b) => {
        return (
          Number(b.textContent.slice(0, b.textContent.length - 3)) -
          Number(a.textContent.slice(0, a.textContent.length - 3))
        );
      });

      diagonalGuides.forEach((guide) => {
        guide.classList.remove("dashed", "dotted");
      });

      let matrixAngles = [];

      diagonalGuidesSorted.forEach((guide, index) => {
        const matrixAngle = Number(
          getComputedStyle(diagonalGuidesSorted[index])
            .transform.slice(7, getComputedStyle(diagonalGuidesSorted[index]).transform.length - 1)
            .split(", ")[0]
        );

        matrixAngles = [...matrixAngles, matrixAngle];

        if (index !== 0) {
          if (
            matrixAngles[index] === matrixAngles[index - 1] ||
            matrixAngles[index] === matrixAngles[index - 2]
          ) {
            if (diagonalGuidesSorted[index - 1].classList.contains("dashed")) {
              guide.classList.add("dotted");
            } else {
              guide.classList.add("dashed");
            }
          }
        }
      });

      const screens = document.querySelectorAll(".visualization");
      let maxHeight = 0;
      let maxWidth = 0;

      screens.forEach((screen) => {
        if (screen.offsetHeight > maxHeight) {
          maxHeight = screen.offsetHeight;
        }

        if (screen.offsetWidth > maxWidth) {
          maxWidth = screen.offsetWidth;
        }
      });

      maxHeight = `${maxHeight}px`;
      maxWidth = `${maxWidth}px`;

      guidesWrapperBottom.style.width = maxWidth;
      guidesWrapperLeft.style.height = maxHeight;
    };

    calculateSides();
    calculateProportions();
    handleGuides();
  };

  const thirdScreenElements = document.querySelectorAll('[class*="--3"]');

  if (diagonals.length === 2) {
    thirdScreenElements.forEach((el) => {
      el.classList.add("hidden");
    });
  } else {
    thirdScreenElements.forEach((el) => {
      el.classList.remove("hidden");
    });
  }
  calculate();
};

const handleResultsLayout = () => {
  document.querySelector(".screen-forms").classList.remove("screen-forms--double");
  document.querySelector(".screen-results").classList.remove("invisible");

  const addBtn = document.querySelector(".btn-add");
  addBtn.style.translate = "calc((27.5vw / 2) - 50%) -50%";

  document.querySelectorAll(".screen").item(2).classList.remove("screen--last");
};

const compare = () => {
  const requiredFields = document.querySelectorAll("input[required]");
  let isValid = false;

  requiredFields.forEach((field) => {
    // TODO - detailed form validation
    isValid = false;

    if (field.validity.valid) {
      field.classList.remove("invalid");
      isValid = true;
    } else {
      field.classList.add("invalid");
    }
  });

  if (isValid) {
    handleComparison();
    handleResultsLayout();
  }
};

const compareButton = document.querySelector(".btn-compare");
const formInputs = document.querySelectorAll(".screen-forms input:not([type='checkbox'])");

compareButton.addEventListener("click", () => {
  compare();
});

formInputs.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.which === 13) {
      // Enter key
      e.preventDefault();
      compare();
    }
  });

  input.addEventListener("focus", (e) => {
    e.target.select();
  });
});
