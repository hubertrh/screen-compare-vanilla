import { addFeedbackToDatabase } from "./database/firestore";
import CookieHandler from "./handlers/cookieHandler";
import KofiHandler from "./handlers/kofiHandler";
import { handleDarkModeSwitch, handleEscapeFocusOut, updateYear } from "./utils/domUtils";

// DEV
const c = console.log.bind(document);

// Unfocuses header elements on escape
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

const feedbackInputs = document.querySelectorAll(".feedback textarea");
const btnSubmitFeedback = document.querySelector(".btn-main--feedback");

const submitFeedback = async () => {
  const feedbackFeatures = document.getElementById("feedback-features").value;
  const feedbackBugs = document.getElementById("feedback-bugs").value;
  const feedbackDevice = document.getElementById("feedback-device").value;
  const feedbackThoughts = document.getElementById("feedback-thoughts").value;

  try {
    btnSubmitFeedback.textContent = "Submitting...";
    btnSubmitFeedback.disabled = true;
    btnSubmitFeedback.blur();
    await addFeedbackToDatabase(feedbackFeatures, feedbackBugs, feedbackDevice, feedbackThoughts);
    feedbackInputs.forEach((input) => (input.value = ""));

    let countdown = 3;
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        btnSubmitFeedback.textContent = `Submitted! Redirect in ${countdown} seconds`;
        countdown--;
      } else {
        btnSubmitFeedback.textContent = "Redirecting now...";
        clearInterval(intervalId);
        window.location.href = "/";
      }
    }, 1000);
  } catch (error) {
    console.error("Error adding feedback: ", error);
    btnSubmitFeedback.textContent = "Error! Please try again.";
    btnSubmitFeedback.classList.add("btn-main--error");

    setTimeout(() => {
      btnSubmitFeedback.textContent = "Submit feedback!";
      btnSubmitFeedback.disabled = false;
      btnSubmitFeedback.classList.remove("btn-main--error");
    }, 3000);
  }
};

feedbackInputs.forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
});

btnSubmitFeedback.addEventListener("click", (e) => {
  e.preventDefault();
  submitFeedback();
});
