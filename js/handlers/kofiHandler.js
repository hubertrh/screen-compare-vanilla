export default class KofiHandler {
  constructor() {
    this.kofi = document.createElement("iframe");
    this.kofiBackdrop = document.querySelector(".kofi-backdrop");
    this.kofiWrapper = document.querySelector(".kofi-wrapper");
    this.kofiButton = document.querySelector(".ko-fi");
  }

  /**
   * Adds event listeners to the Ko-fi button and backdrop to handle clicks.
   * If the backdrop is hidden, clicking the button will open it and vice versa.
   * Clicking the backdrop will close it.
   */
  handleKofiClicks() {
    this.kofiButton.addEventListener("click", () => {
      if (getComputedStyle(this.kofiBackdrop).opacity === "0") {
        this.openKofi();
      }
      if (getComputedStyle(this.kofiBackdrop).opacity === "1") {
        this.closeKofi();
      }
    });

    this.kofiBackdrop.addEventListener("click", () => {
      this.closeKofi();
    });
  }

  openKofi() {
    this.kofiBackdrop.classList.remove("invisible");
    this.kofiBackdrop.style.opacity = "1";
    this.kofiWrapper.style.translate = "0";
  }

  closeKofi() {
    this.kofiWrapper.style.translate = "120% 0";
    this.kofiBackdrop.style.opacity = "0";

    setTimeout(() => {
      this.kofiBackdrop.classList.add("invisible");
    }, 200);
  }

  /**
   * Appends the Ko-fi iframe to the kofiWrapper element and sets its attributes.
   * Also adds event listeners to the Ko-fi button and backdrop to handle clicks.
   * @returns {void}
   */
  appendKofi() {
    this.kofi.setAttribute("height", "712");
    this.kofi.setAttribute("id", "kofiframe");
    this.kofi.setAttribute(
      "src",
      "https://ko-fi.com/rogalaharacz/?hidefeed=true&widget=true&embed=true&preview=true"
    );
    this.kofi.setAttribute("style", "border: none; width: 100%; padding: 0; background: #f9f9f9");
    this.kofi.setAttribute("title", "Hubert Ko-fi");

    console.log("////////////////////////////////");
    console.log("Console may display KO-FI ERRORS");
    console.log("////////////////////////////////");
    this.kofiWrapper?.appendChild(this.kofi);

    this.handleKofiClicks();
  }
}
