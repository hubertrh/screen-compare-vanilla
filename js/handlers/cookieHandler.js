export default class CookieHandler {
  constructor() {
    this.cookieConsent = document.querySelector(".cookie-consent");
    this.cookieConsentButtonAccept = document.querySelector(".cookie-consent__button--accept");
    this.cookieConsentButtonReject = document.querySelector(".cookie-consent__button--reject");
    this.cookieConsentBackdrop = document.querySelector(".cookie-consent-backdrop");
  }

  /**
   * Shows the cookie consent banner if the user has not accepted cookies yet.
   * Listens for click events on the accept and reject buttons and sets the corresponding cookie.
   */
  handleCookieConsent() {
    if (!document.cookie.includes("cookiesAccepted=true")) {
      this.cookieConsentBackdrop.classList.remove("invisible");
      this.cookieConsent.classList.remove("invisible");

      this.cookieConsentButtonAccept.addEventListener("click", () => {
        this.acceptCookies();
      });

      this.cookieConsentButtonReject.addEventListener("click", () => {
        this.rejectCookies();
      });
    }
  }

  acceptCookies() {
    document.cookie = "cookiesAccepted=true; max-age=31536000;";
    this.cookieConsentBackdrop.classList.add("invisible");
    this.cookieConsent.classList.add("invisible");
  }

  rejectCookies() {
    document.cookie = "cookiesAccepted=false; max-age=31536000;";
    this.cookieConsentBackdrop.classList.add("invisible");
    this.cookieConsent.classList.add("invisible");
  }
}
