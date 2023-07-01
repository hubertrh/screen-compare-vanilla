const c = console.log.bind(document); // DEV

const handleEscapeFocusOut = (element) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.target.blur();
    }
  });
};

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
