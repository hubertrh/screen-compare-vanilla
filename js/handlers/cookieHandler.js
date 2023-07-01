export class CookieHandler {
  constructor() {
    this.cookieConsent = document.querySelector(".cookie-consent");
    this.cookieConsentButtonAccept = document.querySelector(".cookie-consent__button--accept");
    this.cookieConsentButtonReject = document.querySelector(".cookie-consent__button--reject");
    this.cookieConsentBackdrop = document.querySelector(".cookie-consent-backdrop");
  }

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
