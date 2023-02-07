"use strict";

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

// Dark mode switch
const darkModeSwitch = document.querySelector(".switch-mode");

darkModeSwitch.addEventListener("click", () => {
  if (!document.body.classList.contains("light-mode")) {
    darkModeSwitch.src = "assets/icons/Icons/dark-mode.svg";
    document.cookie = "lightMode=true; max-age=31536000;";
  } else {
    darkModeSwitch.src = "assets/icons/Icons/light-mode.svg";
    document.cookie = "lightMode=false; max-age=31536000;";
  }
  document.body.classList.toggle("light-mode");
});
// END Dark mode switch

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
  kofiWrapper.appendChild(kofi);
};
// END Ko-fi

const updateYear = () => {
  const copyright = document.querySelector(".copyright");
  const year = new Date().getFullYear().toString();

  copyright.textContent = `ScreenCompare \u00A9 ${year}`;
};

window.addEventListener("load", () => {
  updateYear();
  appendKofi();
});
// END ON WINDOW LOAD

// FIXME: Visualisation shifting after adding and then removing third screen
// FIXME: styling with large user viewport
// TODO: banner to save cookie preferences
// TODO: form hints
// FIXME: resizing
// FIXME: Ko-fi @media styling
// FIXME: addBtn position
