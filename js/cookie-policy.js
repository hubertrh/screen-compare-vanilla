import { handleDarkModeSwitch, handleEscapeFocusOut, updateYear } from "./utils/domUtils";
import { KofiHandler } from "./handlers/kofiHandler";
import { CookieHandler } from "./handlers/cookieHandler";

// DEV
const c = console.log.bind(document);

// Unfocus header elements on escape
const headerElements = document.querySelectorAll("header *");

headerElements.forEach((el) => {
  handleEscapeFocusOut(el);
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
});
