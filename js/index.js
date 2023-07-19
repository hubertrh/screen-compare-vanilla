import { getTopScreens } from "./database/firestore";
import ComparisonHandler from "./handlers/comparisonHandler";
import CookieHandler from "./handlers/cookieHandler";
import KofiHandler from "./handlers/kofiHandler";
import {
  handleDarkModeSwitch,
  handleEscapeFocusOut,
  setCheckingInternetConnection,
  updateYear,
} from "./utils/domUtils";

const c = console.log.bind(document); // DEV

// Unfocuses header elements on escape
const headerElements = document.querySelectorAll("header *");

headerElements.forEach((el) => {
  handleEscapeFocusOut(el);
});

/**
 * Handles the change of tabindex for the form elements in the third screen.
 * If the third screen is inactive, all form elements inside it will have a tabindex of -1.
 * If the third screen is active, all form elements inside it will have no tabindex attribute.
 */
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

// Screen name edit button
const editNameButtons = document.querySelectorAll(".name-edit");

/**
 * Handles the click event on the edit button.
 * If the input element is readonly, removes the readonly attribute and selects the input.
 * If the input element is not readonly, adds the readonly attribute.
 * @param {Event} e - The event object.
 */
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

// Screen name input (resize, blur, focusout)
const nameInputs = document.querySelectorAll(".name");

const handleInputResize = (e) => {
  if (e.target.value.length <= 20 && e.target.value.length >= 1) {
    e.target.size = e.target.value.length;
  }
};

const refButtons = document.querySelectorAll(".ref-screen");

/**
 * Updates the text content of a button element
 * based on the value of the corresponding input element.
 * If the input value is empty, the button text will be "Display [index + 1]".
 * If the input value is not empty, the button text will be the first 7 characters of the input value.
 * If the input value is longer than 7 characters, the button text will be truncated and appended with "...".
 * @param {Element} button - The button element to update.
 * @param {number} index - The index of the corresponding input element.
 */
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

/**
 * Handles the blur event on the input element.
 * If the input is readonly and the user presses a key
 * that is not a number, letter or enter, the readonly
 * attribute is removed. If the user presses enter,
 * the readonly attribute is added and the input is blurred.
 * @param {Event} e - The event object.
 */
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

// Unit switch label
const unitSwitches = document.querySelectorAll(".units-switch");

/**
 * Handles the change event on the unit switch input element.
 * Updates the text content of the corresponding label element
 * based on the value of the input element.
 * If the input is checked, the label text will be "cm".
 * If the input is not checked, the label text will be "in".
 * @param {Event} e - The event object.
 */
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

// Handles form data
const numberInputs = document.querySelectorAll("input[type=number]");

numberInputs.forEach((input) => {
  /**
   * Handles the input event for number input elements by validating the input value
   * using regex and removing the typed character if it does not match.
   * @param {InputEvent} e - The input event.
   */
  input.addEventListener("input", (e) => {
    let regexTest;
    if (e.target.classList.contains("res-input")) {
      // Regular expression to match a number with up to 5 digits before the decimal point
      // and up to 2 digits after the decimal point, or a number with up to 5 digits
      // without a decimal point.
      regexTest = /^\d{1,5}\.\d{0,2}$|^\d{1,5}$/g.test(e.target.value);
    } else {
      // Regular expression to match a number with up to 3 digits before the decimal point
      // and up to 2 digits after the decimal point, or a number with up to 3 digits
      // without a decimal point.
      regexTest = /^\d{1,3}\.\d{0,2}$|^\d{1,3}$/g.test(e.target.value);
    }
    if (!regexTest) {
      e.target.value = e.target.value.slice(0, -1);
    }
  });
});

/**
 * Handles the layout of the results screen by removing the "invisible" class
 * and adding the "transparent" class to the screen-results element.
 * Also removes the "screen-forms--double" class from the screen-forms element,
 * sets the translate style of the btn-wrapper element to "0",
 * and removes the "screen--last" class from the third screen element.
 * Uses a MutationObserver to detect when the "invisible" class is removed
 * from the screen-results element and removes the "transparent" class
 * from the screen-results element.
 */
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

/**
 * Handles the display of the third screen's details column.
 * If the third screen is inactive, the details column is hidden
 * and the reference bar width is set to 50%.
 * If the third screen is active, the details column is shown
 * and the reference bar width is set to 33.33%.
 * Also adjusts the grid template columns of the value rows accordingly.
 */
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

const comparisonHandler = new ComparisonHandler();

const compare = () => {
  /**
   * Validates the form data by checking if all required fields are filled in.
   * If a required field is empty, its placeholder text is used as its value.
   * Also checks if the resolution fields are filled in correctly
   * and adds an error class if not.
   */
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
  comparisonHandler.handleComparison();
  handleResultsLayout();
  handleThirdDetailsColumn();
};

/**
 * Handles the reference bar by setting the active reference screen index
 * as a CSS variable and updating the font weight of the reference buttons.
 * @param {Event} e - The click event object.
 * @param {number} refIndex - The index of the active reference screen.
 */
const handleReferenceBar = (e, refIndex) => {
  const refBar = document.querySelector(".top__ref-screen-bar");

  refBar.style.setProperty("--screen-index", refIndex.toString());

  [...e.target.parentElement.children].forEach((button) => {
    button.style.fontWeight = "400";
  });
  e.target.style.fontWeight = "600";
};

/**
 * Handles the display of the reference values for each screen.
 * Calculates the percentage difference between each value and the value of the
 * screen selected as the reference screen, and displays it in parentheses next to the value.
 * @param {Event} e - The click event object.
 * @param {number} refIndex - The index of the active reference screen.
 */
const handleReferenceValues = (_, refIndex) => {
  const detailsRows = document.querySelectorAll(".values__row");

  detailsRows.forEach((row) => {
    [...row.children].forEach((refValue, index) => {
      const referenceValue = parseFloat(refValue.textContent);
      const referenceIndexValue = parseFloat(row.children[refIndex].textContent);
      let refPercentage = referenceValue / referenceIndexValue;
      refPercentage = Math.round(refPercentage * 100);

      const refValueVar = isNaN(refPercentage) ? `"\u2014"` : `"(${refPercentage}%)"`; // \u2014 - em dash
      refValue.style.setProperty("--value-reference", refValueVar);
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

// Common screens
const commonScreensBtn = document.querySelector(".common-screens-btn");
const commonScreensBtnClose = document.querySelector(".btn-remove--common-screens");
const commonScreensDialog = document.querySelector(".common-screens-dialog");

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

resetButton.addEventListener("click", () => {
  handleReset();
});

compareButton.addEventListener("click", () => {
  compare();
  refButtons[0].click();
  getTopScreens();

  const resultsSection = document.getElementById("screen-results");
  resultsSection.scrollIntoView({ behavior: "smooth" });
});

formInputs.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (!input.classList.contains("name") && e.key === "Enter") {
      e.target.blur();
      compareButton.click();
    }
  });

  input.addEventListener("focus", (e) => {
    e.target.select();
  });

  handleEscapeFocusOut(input);
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
  handleDarkModeSwitch();
});

window.addEventListener("load", () => {
  const cookieHandler = new CookieHandler();
  cookieHandler.handleCookieConsent();
  updateYear();
  const kofiHandler = new KofiHandler();
  kofiHandler.appendKofi();
  setCheckingInternetConnection();
  compareButton.click(); // DEV
});
