"use strict";

// Firebase config
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  increment,
  query,
  collection,
  orderBy,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPFHnutWJg_oDDKR9DyDPzEm-DXWdhmxo",
  authDomain: "screencompare.firebaseapp.com",
  databaseURL: "https://screencompare-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "screencompare",
  storageBucket: "screencompare.appspot.com",
  messagingSenderId: "1080235317181",
  appId: "1:1080235317181:web:1a2d8a776d69b3787064d4",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();
// END Firebase config

// Authenticate anonymously
const auth = getAuth();

signInAnonymously(auth)
  .then(() => {
    c("Signed in anonymously");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error code: ${errorCode}, message: ${errorMessage}`);
  });
// END Authenticate anonymously

// DEV
const c = console.log.bind(document);
// END DEV

const handleEscapeFocusOut = (element) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.target.blur();
    }
  });
};

const headerElements = document.querySelectorAll("header *");

headerElements.forEach((el) => {
  handleEscapeFocusOut(el);
});

// Third screen tab index change
const handleTabIndexChange = () => {
  const thirdScreen = document.querySelectorAll(".screen")[2];
  const thirdScreenFormElements = thirdScreen.getElementsByTagName("*");

  if (thirdScreen.classList.contains("screen--inactive")) {
    [...thirdScreenFormElements].forEach((el) => {
      el.tabIndex = -1;
    });
  } else {
    [...thirdScreenFormElements].forEach((el) => {
      el.removeAttribute("tabindex");
    });
  }
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    handleTabIndexChange();
  }
});
// END Third screen tab index change

// Screen edit button
const editNameButtons = document.querySelectorAll(".name-edit");

const clickEditButton = (e) => {
  const target = e.target.closest(".screen-name").querySelector(".name");

  if (target.hasAttribute("readonly")) {
    target.removeAttribute("readonly");
    target.select();
  } else {
    target.setAttribute("readonly", "");
  }
};

editNameButtons.forEach((button) => {
  button.addEventListener("click", (e) => clickEditButton(e));
});
// END Screen edit button

// Screen name input (resize, blur, focusout)
const nameInputs = document.querySelectorAll(".name");

const handleInputResize = (e) => {
  if (e.target.value.length <= 20 && e.target.value.length >= 1) {
    e.target.size = e.target.value.length;
  }
};

const refButtons = document.querySelectorAll(".ref-screen");

const handleTableScreenName = (button, index) => {
  if (nameInputs[index].value === "") {
    button.textContent = `Display\xa0${index + 1}`; // \xa0 - non-breaking space
  } else {
    button.textContent = nameInputs[index].value.slice(0, 7);

    if (nameInputs[index].value.length > 7) {
      button.textContent = `${button.textContent}...`;
    }
  }
};

const handleInputBlur = (e) => {
  if (
    e.target.hasAttribute("readonly") &&
    (e.key === "Enter" ||
      (e.keyCode > 47 && e.keyCode < 58) ||
      (e.keyCode > 64 && e.keyCode < 91) ||
      (e.keyCode > 96 && e.keyCode < 123))
  ) {
    e.target.removeAttribute("readonly");
  } else {
    if (e.key === "Enter") {
      e.target.setAttribute("readonly", "");
      e.target.blur();
    }
  }

  refButtons.forEach((button, index) => {
    handleTableScreenName(button, index);
  });
};

const handleInputFocusOut = (e) => {
  if (!(e.relatedTarget && e.relatedTarget.id === "edit-name-button")) {
    e.target.setAttribute("readonly", "");
    e.target.blur();
  }
};

nameInputs.forEach((input) => {
  input.addEventListener("input", (e) => handleInputResize(e));
  input.addEventListener("keydown", (e) => handleInputBlur(e));
  input.addEventListener("focusout", (e) => handleInputFocusOut(e));
});
// END Screen name input (resize, blur, focusout)

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
// END Unit switch label

// 3rd form add/remove
const addButton = document.querySelector(".btn-add");
const removeButton = document.querySelector(".btn-remove--last-form");

const handleAddForm = () => {
  document.querySelectorAll(".screen").item(2).classList.remove("screen--inactive");
  document.querySelector(".screen-forms").classList.remove("screen-forms--double");
  document.querySelector(".btn-add").classList.add("color-transparent");

  document.getElementById("size-3").setAttribute("required", "");
  document.getElementById("units-3").setAttribute("required", "");
  document.getElementById("ratio-w-3").setAttribute("required", "");
  document.getElementById("ratio-h-3").setAttribute("required", "");

  setTimeout(() => {
    document.querySelector(".btn-add").classList.add("invisible");
  }, 150);
};

const handleRemoveForm = () => {
  document.querySelectorAll(".screen").item(2).classList.add("screen--inactive");
  document.querySelector(".screen-forms").classList.add("screen-forms--double");
  document.querySelector(".btn-add").classList.remove("invisible");
  document.querySelector(".btn-add").classList.remove("color-transparent");

  document.getElementById("screen-form-3").reset();

  document.getElementById("size-3").removeAttribute("required");
  document.getElementById("units-3").removeAttribute("required");
  document.getElementById("ratio-w-3").removeAttribute("required");
  document.getElementById("ratio-h-3").removeAttribute("required");
};

addButton.addEventListener("click", () => handleAddForm());
removeButton.addEventListener("click", () => handleRemoveForm());
// END 3rd form add/remove

// Handling form data
const numberInputs = document.querySelectorAll("input[type=number]");
numberInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let regexTest;
    if (e.target.classList.contains("res-input")) {
      regexTest = /^\d{1,5}\.\d{0,2}$|^\d{1,5}$/g.test(e.target.value);
    } else {
      regexTest = /^\d{1,3}\.\d{0,2}$|^\d{1,3}$/g.test(e.target.value);
    }
    if (!regexTest) {
      e.target.value = e.target.value.slice(0, -1);
    }
  });
});

const handleComparison = () => {
  const detailsUnitSwitch = document.querySelector(".text-units-switch");
  let unitsDivider = 2.54;
  let switchUnits = "in";
  let fractionDigits = 2;

  const handleUnitsValues = () => {
    if (!detailsUnitSwitch.checked) {
      unitsDivider = 2.54;
      switchUnits = "in";
      fractionDigits = 2;
    } else {
      unitsDivider = 1;
      switchUnits = "cm";
      fractionDigits = 1;
    }
  };

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
  let ppis = [];

  let sides = [];

  // c(`diagonals --> ${diagonals}`);
  // c(`units --> ${units}`);
  // c(`ratios --> ${ratios}`);
  // c(`resolutions --> ${resolutions}`);

  units.forEach((unit, index) => {
    if (unit === "in" && diagonals[index] > 0) {
      diagonals[index] = diagonals[index] * 2.54;
    }
  });
  // c(`diagonals (cm) --> ${diagonals}`);

  const media1000 = window.matchMedia("(max-width: 1000px)");

  const calculate = () => {
    const calculatePpis = () => {
      for (let index = 0; index <= 2; index++) {
        if (resolutions[index * 2] !== 0 && resolutions[index * 2 + 1] !== 0) {
          const resDiagonal = Math.round(
            Number(Math.sqrt(resolutions[index * 2] ** 2 + resolutions[index * 2 + 1] ** 2))
          );
          ppis = [...ppis, Number(Math.round(resDiagonal / (diagonals[index] / unitsDivider)))];
        } else {
          ppis = [...ppis, ""];
        }
      }
    };

    const calculateSides = () => {
      sides = [];

      // Calculate screens' sides from diagonal and aspect ratio values
      diagonals.forEach((diagonal, index) => {
        const ratioW = ratios[index * 2];
        const ratioH = ratios[index * 2 + 1];
        const sideH = (diagonal * ratioH) / Math.sqrt(ratioW ** 2 + ratioH ** 2);
        // c(`sideH --> ${sideH}`);

        const sideW = (ratioW / ratioH) * sideH;
        // c(`sideW --> ${sideW}`);

        sides.push(sideW);
        sides.push(sideH);
      });

      // c(`sides --> ${sides}`);
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
        // c(`side --> ${side}`);
        // c(`scale --> ${scale}`);
      });

      // c(`sides --> ${sides}`);

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

    handleUnitsValues();

    const handleGuides = () => {
      const diagonalGuides = document.querySelectorAll(".diagonal");

      diagonals.forEach((diagonal, index) => {
        diagonalGuides[index].textContent = `${Number(
          (diagonal / unitsDivider).toFixed(fractionDigits)
        )} ${switchUnits}`;

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
        screen.style.zIndex = (index + 1).toString();

        let factor = 2;

        if (screen.classList.contains("hidden")) {
          sortedScreens.splice(index, 1);
          factor = 1;
        }

        let tempStyle = screen.children[0].style.transform;

        screen.children[0].style.transform = `${tempStyle} translate(${-index * 2.5 + factor}em)`;
        tempStyle = screen.children[0].style.transform;

        if (Number(screen.style.width.slice(0, -2)) <= 150) {
          screen.children[0].style.transform = tempStyle.slice(0, -15);
        }
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
          (sides[screenNumber * 2 + (index % 2)] / unitsDivider).toFixed(fractionDigits)
        )} ${switchUnits}`;

        newGuide.textContent = textContent.toString();

        if (guideSide === "bottom") {
          guidesWrapperBottom.appendChild(newGuide);
        }
        if (guideSide === "left") {
          guidesWrapperLeft.appendChild(newGuide);
        }
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

      guidesWrapperBottom.style.width = `${maxWidth}px`;
      guidesWrapperLeft.style.height = `${maxHeight}px`;
    };

    const screenBox = document.querySelector(".visualization-box");

    const centerVisualisations = () => {
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

      screenBox.setAttribute(
        "style",
        `
        width: ${maxWidth}px;
        height: ${maxHeight}px;
        `
      );
    };

    const resizeBox = () => {
      const box = document.querySelector(".screen-results__visualizations");
      const screenBoxComputedHeight = getComputedStyle(screenBox).height;

      box.style.height = `calc(${screenBoxComputedHeight} + 6em`;
    };

    async function handleVisualisations() {
      calculatePpis();
      await calculateSides();
      await calculateProportions();
      await handleGuides();
      await centerVisualisations();

      if (media1000.matches) {
        resizeBox();
      }
    }

    void handleVisualisations();
  };

  const thirdScreenElement = document.querySelector(".visualization--3");

  if (diagonals.length === 2) {
    thirdScreenElement.classList.add("hidden");
  } else {
    thirdScreenElement.classList.remove("hidden");
  }

  const handleResultsTable = () => {
    const valueRows = document.querySelectorAll(".values__row");

    // Width
    [...valueRows[0].children].forEach((child, index) => {
      child.textContent = `${Number((sides[index * 2] / unitsDivider).toFixed(2))} ${switchUnits}`;
    });

    // Height
    [...valueRows[1].children].forEach((child, index) => {
      child.textContent = `${Number(
        (sides[index * 2 + 1] / unitsDivider).toFixed(2)
      )} ${switchUnits}`;
    });

    // Diagonal
    [...valueRows[2].children].forEach((child, index) => {
      child.textContent = `${Number((diagonals[index] / unitsDivider).toFixed(2))} ${switchUnits}`;
    });

    // Area
    [...valueRows[3].children].forEach((child, index) => {
      child.textContent = `${Number(
        ((sides[index * 2] / unitsDivider) * (sides[index * 2 + 1] / unitsDivider)).toFixed(2)
      )} ${switchUnits}²`;
    });

    // PPI
    const handlePpiRow = () => {
      const ppiGuide = document.querySelector(".ppi-guide");

      [...valueRows[4].children].forEach((child, index) => {
        if (resolutions[index * 2] === 0 && resolutions[index * 2 + 1] === 0) {
          child.style.opacity = "0";
          child.textContent = "";
        } else {
          child.style.opacity = "1";
          child.textContent = ppis[index].toString();
        }
      });
      if ([...valueRows[4].children].every((child) => child.style.opacity === "0")) {
        valueRows[4].style.display = "none";
        ppiGuide.style.display = "none";
        ppiGuide.style.opacity = "0";
      } else {
        valueRows[4].style.display = "grid";
        ppiGuide.style.display = "block";
        ppiGuide.style.opacity = "1";
      }
    };

    handlePpiRow();
  };

  const handlePpiValidationColors = () => {
    const sizeTresholds = {
      mobile: 6.9 * 2.54,
      tablet: 11.1 * 2.54,
    };

    diagonals.forEach((diagonal, index) => {
      const ppiThresholds = {
        mobile: { green: 400, darkgoldenrod: 300, brown: 0 },
        tablet: { green: 200, darkgoldenrod: 150, brown: 0 },
        desktop: { green: 150, darkgoldenrod: 100, brown: 0 },
      };

      function getDeviceType(diagonal) {
        if (diagonal <= sizeTresholds.mobile) {
          return "mobile";
        } else if (diagonal <= sizeTresholds.tablet) {
          return "tablet";
        } else {
          return "desktop";
        }
      }

      function getColor(ppi, deviceType) {
        const thresholds = ppiThresholds[deviceType];
        for (let color in thresholds) {
          if (ppi >= thresholds[color]) {
            return color;
          }
        }
      }

      const deviceType = getDeviceType(diagonal);
      const color = getColor(ppis[index], deviceType);
      const curPpiElement = document.querySelectorAll(".row__value.ppi")[index];
      curPpiElement.style.setProperty("--validation-color", color);
    });
  };

  detailsUnitSwitch.addEventListener("change", async (e) => {
    await handleUnitsValues();
    calculate();
    handleResultsTable();
  });

  const addToDatabase = async (screenSize, xAspectRatio, yAspectRatio) => {
    // Generate a unique ID based on the form response
    const formResponseId = `${screenSize}_${xAspectRatio}_${yAspectRatio}`;
    const formResponseRef = doc(db, "formResponses", formResponseId);

    // Get the current document
    const formResponseDoc = await getDoc(formResponseRef);

    if (formResponseDoc.exists()) {
      // If the document exists, increment the count
      await updateDoc(formResponseRef, {
        count: increment(1),
      });
    } else {
      // If the document does not exist, create it with a count of 1
      await setDoc(formResponseRef, {
        screenSize,
        xAspectRatio,
        yAspectRatio,
        count: 1,
      });
    }
  };

  const saveFormData = () => {
    const isThirdScreenActive = !document.querySelector(".screen--inactive");
    const screens = isThirdScreenActive ? 3 : 2;

    for (let index = 0; index < screens; index++) {
      const diagonalInInches = diagonals[index] / 2.54;
      const xAspectRatio = ratios[index * 2];
      const yAspectRatio = ratios[index * 2 + 1];

      addToDatabase(diagonalInInches, xAspectRatio, yAspectRatio);
    }
  };

  calculate();
  handleResultsTable();
  handlePpiValidationColors();
  // saveFormData();
};

const handleResultsLayout = () => {
  const results = document.querySelector(".screen-results");

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (!mutation.target.classList.contains("invisible")) {
        document.querySelector(".screen-results").classList.remove("transparent");
        observer.disconnect();
      }
    });
  });

  observer.observe(results, { attributes: true, attributeFilter: ["class"] });

  results.classList.remove("invisible");
  document.querySelector(".screen-forms").classList.remove("screen-forms--double");
  document.querySelector(".btn-wrapper").style.translate = "0";
  document.querySelectorAll(".screen").item(2).classList.remove("screen--last");
};

const handleThirdDetailsColumn = () => {
  const thirdScreen = document.querySelectorAll(".screen")[2];
  const refBar = document.querySelector(".top__ref-screen-bar");
  const valueRows = document.querySelectorAll(".values__row");

  if (thirdScreen.classList.contains("screen--inactive")) {
    refBar.style.setProperty("--tab-width", "50%");
    refBar.children[2].style.display = "none";

    valueRows.forEach((row) => {
      row.children[2].style.display = "none";
      row.style.gridTemplateColumns = "repeat(2, 1fr)";
    });
  } else {
    refBar.style.setProperty("--tab-width", "33.33%");
    refBar.children[2].style.display = "block";

    valueRows.forEach((row) => {
      row.children[2].style.display = "block";
      row.style.gridTemplateColumns = "repeat(3, 1fr)";
    });
  }
};

const compare = () => {
  const validate = () => {
    const requiredInputs = document.querySelectorAll("input[required]");

    requiredInputs.forEach((input) => {
      if (input.value === "") {
        input.value = input.placeholder;
      }
    });

    const resolutionFields = document.querySelectorAll(".res-input");

    resolutionFields.forEach((field, index) => {
      if (field.value !== "") {
        field.classList.remove("field-error");

        if (index % 2) {
          // even
          if (resolutionFields[index - 1].value === "") {
            resolutionFields[index - 1].classList.add("field-error");
          }
        } else {
          // odd
          if (resolutionFields[index + 1].value === "") {
            resolutionFields[index + 1].classList.add("field-error");
          }
        }
      }
    });
  };

  validate();
  handleComparison();
  handleResultsLayout();
  handleThirdDetailsColumn();
};

// Reference details
const handleReferenceBar = (e, refIndex) => {
  const refBar = document.querySelector(".top__ref-screen-bar");

  refBar.style.setProperty("--screen-index", refIndex.toString());

  [...e.target.parentElement.children].forEach((button) => {
    button.style.fontWeight = "400";
  });
  e.target.style.fontWeight = "600";
};

const handleReferenceValues = (e, refIndex) => {
  const detailsRows = document.querySelectorAll(".values__row");

  detailsRows.forEach((row) => {
    [...row.children].forEach((refValue, index) => {
      const referenceValue = parseFloat(refValue.textContent);
      const referenceIndexValue = parseFloat(row.children[refIndex].textContent);
      let refPercentage = referenceValue / referenceIndexValue;
      refPercentage = Math.round(refPercentage * 100);

      if (refValue.textContent === "") {
        refValue.style.setProperty("--value-reference", `""`);
        refValue.style.setProperty("--questionmark", `""`);
        refValue.style.setProperty("--validation-color", `transparent`);
      } else if (isNaN(refPercentage)) {
        refValue.style.setProperty("--value-reference", `"\u2014"`);
        refValue.style.setProperty("--questionmark", `"?"`);
      } else {
        refPercentage = `"(${refPercentage}%)"`;
        refValue.style.setProperty("--value-reference", refPercentage);
        refValue.style.setProperty("--questionmark", `"?"`);
      }
    });
  });
};

refButtons.forEach((button, index) => {
  handleTableScreenName(button, index);

  button.addEventListener("click", (e) => {
    const refIndex = Number(e.target.id.slice(11) - 1);

    handleReferenceBar(e, refIndex);
    handleReferenceValues(e, refIndex);
  });
});
// END Reference details

// Common screens
const commonScreensBtn = document.querySelector(".common-screens-btn");
const commonScreensBtnClose = document.querySelector(".btn-remove--common-screens");
const commonScreensDialogWrapper = document.querySelector(".common-screens-dialog-wrapper");
const commonScreensDialog = document.querySelector(".common-screens-dialog");
// const commonScreensDialogBackdrop = document.querySelector(".common-screens-dialog::backdrop");

commonScreensBtn.addEventListener("click", () => {
  if (!commonScreensDialog.hasAttribute("open")) {
    commonScreensDialog.showModal();
  } else {
    commonScreensDialog.close();
  }
});

commonScreensBtnClose.addEventListener("click", () => {
  commonScreensDialog.close();
});

commonScreensDialog.addEventListener("click", (e) => {
  const rect = commonScreensDialog.getBoundingClientRect();

  const isInDialog =
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width;

  if (!isInDialog) {
    commonScreensDialog.close();
  }
});

// END Common screens

const compareButton = document.querySelector(".btn-main--compare");
const resetButton = document.querySelector(".btn-reset");
const forms = document.querySelectorAll(".screen-form");
const formInputs = document.querySelectorAll(".screen-forms input:not([type='checkbox'])");
const formCheckboxes = document.querySelectorAll(".screen-forms input[type='checkbox']");

const handleReset = () => {
  forms.forEach((form) => {
    form.reset();
  });
};

compareButton.addEventListener("click", () => {
  compare();
  refButtons[0].click();

  const resultsSection = document.getElementById("screen-results");
  resultsSection.scrollIntoView({ behavior: "smooth" });
});

resetButton.addEventListener("click", () => {
  handleReset();
});

formInputs.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (!input.classList.contains("name") && e.key === "Enter") {
      e.target.blur();
      compareButton.click();
    }
  });

  handleEscapeFocusOut(input);

  input.addEventListener("focus", (e) => {
    e.target.select();
  });
});

formCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    e.target.parentNode.childNodes.forEach((node) => {
      if (e.clientX !== 0 && node.nodeName === "INPUT") {
        node.blur();
      }
    });
  });

  checkbox.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.target.parentNode.childNodes.forEach((node) => {
        if (node.nodeName === "INPUT") {
          node.blur();
        }
      });
    }

    if (e.key === "Enter") {
      [...e.target.parentNode.children].forEach((node) => {
        if (node.hasAttribute("type") && node.getAttribute("type") === "checkbox") {
          node.checked = !node.checked;
          handleUnitSwitch(e);
        }
      });
    }
  });
});

// Dark mode switch
const darkModeSwitch = document.querySelector(".switch-mode");

darkModeSwitch.addEventListener("click", () => {
  if (!document.body.classList.contains("light-mode")) {
    darkModeSwitch.src = "/dark-mode.svg";
    document.cookie = "lightMode=true; max-age=31536000;";
  } else {
    darkModeSwitch.src = "/light-mode.svg";
    document.cookie = "lightMode=false; max-age=31536000;";
  }
  document.body.classList.toggle("light-mode");
});
// END Dark mode switch

// Cookie consent
const cookieConsent = document.querySelector(".cookie-consent");
const cookieConsentButtonAccept = document.querySelector(".cookie-consent__button--accept");
const cookieConsentButtonReject = document.querySelector(".cookie-consent__button--reject");
const cookieConsentBackdrop = document.querySelector(".cookie-consent-backdrop");

const acceptCookies = () => {
  document.cookie = "cookiesAccepted=true; max-age=31536000;";
  cookieConsentBackdrop.classList.add("invisible");
  cookieConsent.classList.add("invisible");
};
const rejectCookies = () => {
  document.cookie = "cookiesAccepted=false; max-age=31536000;";
  cookieConsentBackdrop.classList.add("invisible");
  cookieConsent.classList.add("invisible");
};
const handleCookieConsent = () => {
  if (!document.cookie.includes("cookiesAccepted=true")) {
    cookieConsentBackdrop.classList.remove("invisible");
    cookieConsent.classList.remove("invisible");

    cookieConsentButtonAccept.addEventListener("click", () => {
      acceptCookies();
    });

    cookieConsentButtonReject.addEventListener("click", () => {
      rejectCookies();
    });
  }
};
// END Cookie consent

const getTop5Screens = async () => {
  // Query for the top 5 form responses
  const formResponsesQuery = query(
    collection(db, "formResponses"),
    orderBy("count", "desc"),
    limit(5)
  );

  const querySnapshot = await getDocs(formResponsesQuery);

  querySnapshot.forEach((doc) => {
    c(doc.id, " => ", doc.data());
  });
};

// ON WINDOW LOAD
// Ko-fi
const kofiButton = document.querySelector(".ko-fi");
const kofiBackdrop = document.querySelector(".kofi-backdrop");
const kofiWrapper = document.querySelector(".kofi-wrapper");
const kofi = document.createElement("iframe");

const openKofi = () => {
  kofiBackdrop.classList.remove("invisible");
  kofiBackdrop.style.opacity = "1";
  kofiWrapper.style.translate = "0";
};
const closeKofi = () => {
  kofiWrapper.style.translate = "120% 0";
  kofiBackdrop.style.opacity = "0";

  setTimeout(() => {
    kofiBackdrop.classList.add("invisible");
  }, 200);
};

kofiButton.addEventListener("click", () => {
  if (getComputedStyle(kofiBackdrop).opacity === "0") {
    openKofi();
  }
  if (getComputedStyle(kofiBackdrop).opacity === "1") {
    closeKofi();
  }
});

kofiBackdrop.addEventListener("click", () => {
  closeKofi();
});

const appendKofi = () => {
  kofi.setAttribute("height", "712");
  kofi.setAttribute("id", "kofiframe");
  kofi.setAttribute(
    "src",
    "https://ko-fi.com/rogalaharacz/?hidefeed=true&widget=true&embed=true&preview=true"
  );
  kofi.setAttribute("style", "border: none; width: 100%; padding: 0; background: #f9f9f9");
  kofi.setAttribute("title", "Hubert Ko-fi");

  console.warn("Console might display KO-FI ERRORS");
  kofiWrapper?.appendChild(kofi);
};
// END Ko-fi

// Update year in footer
const updateYear = () => {
  const copyright = document.querySelector(".copyright");
  const year = new Date().getFullYear().toString();

  copyright.textContent = `ScreenCompare \u00A9 ${year}`;
};
// END Update year in footer

window.addEventListener("load", () => {
  handleCookieConsent();
  updateYear();
  getTop5Screens();
  compareButton.click(); // DEV
  appendKofi();
});
// END ON WINDOW LOAD

// FIXME: Visualisation shifting after adding and then removing third screen
// FIXME: styling with large user viewport
// TODO: form hints
// FIXME: resizing
// FIXME: Ko-fi @media styling
// FIXME: addBtn position
