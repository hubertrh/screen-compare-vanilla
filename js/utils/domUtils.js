const c = console.log.bind(document); // DEV

/**
 * Adds an event listener to the specified element
 * that listens for the "Escape" keydown event.
 * When the "Escape" key is pressed, the element loses focus.
 *
 * @param {HTMLElement} element - The element to add the event listener to.
 */
const handleEscapeFocusOut = (element) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.target.blur();
    }
  });
};

/**
 * Toggles between light and dark mode for the website
 * and updates the cookie to remember the user's preference.
 */
const handleDarkModeSwitch = () => {
  if (!document.body.classList.contains("light-mode")) {
    darkModeSwitch.src = "assets/icons/Icons/dark-mode.svg";
    document.cookie = "lightMode=true; max-age=31536000;";
  } else {
    darkModeSwitch.src = "assets/icons/Icons/light-mode.svg";
    document.cookie = "lightMode=false; max-age=31536000;";
  }
  document.body.classList.toggle("light-mode");
};

/**
 * Updates the year in the copyright notice to the current year.
 */
const updateYear = () => {
  const copyright = document.querySelector(".copyright");
  const year = new Date().getFullYear().toString();

  copyright.textContent = `ScreenCompare \u00A9 ${year}`;
};

const setCheckingInternetConnection = () => {
  setInterval(() => {
    if (!navigator.onLine) {
      c("No Internet Connection");
    }
  }, 5000);
};

export { handleEscapeFocusOut, handleDarkModeSwitch, updateYear, setCheckingInternetConnection };
