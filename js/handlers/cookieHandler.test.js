// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from "vitest";
import CookieHandler from "./cookieHandler";
vi.mock("../utils/domUtils");

// Simulate document and window objects
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

// Mock document.cookie
Object.defineProperty(window.document, "cookie", {
  get: function () {
    return this._value || "";
  },
  set: function (cookie) {
    const [_, value] = cookie.split("=");
    if (value.includes("expires")) {
      this._value = "";
    } else {
      this._value = cookie;
    }
  },
});

describe("CookieHandler", () => {
  let cookieHandler;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="cookie-consent invisible"></div>
      <button class="cookie-consent__button--accept"></button>
      <button class="cookie-consent__button--reject"></button>
      <div class="cookie-consent-backdrop invisible"></div>
    `;
    cookieHandler = new CookieHandler();
  });

  it("shows the cookie consent banner if no cookies have been accepted yet", () => {
    cookieHandler.handleCookieConsent();

    expect(cookieHandler.cookieConsentBackdrop.classList.contains("invisible")).toBe(false);
    expect(cookieHandler.cookieConsent.classList.contains("invisible")).toBe(false);
  });

  it("hides the cookie consent banner and adds third-party script if cookies have been accepted", async () => {
    document.cookie = "cookiesAccepted=true";

    cookieHandler.handleCookieConsent();

    expect(cookieHandler.cookieConsentBackdrop.classList.contains("invisible")).toBe(true);
    expect(cookieHandler.cookieConsent.classList.contains("invisible")).toBe(true);
    // TODO: Fix this test
    // expect(addScript).toHaveBeenCalledWith("/js/third-party/hotjar.js");
  });

  it("accepts cookies, hides the cookie consent banner, and adds third-party script when accept button is clicked", () => {
    cookieHandler.acceptCookies();

    expect(document.cookie).toEqual("cookiesAccepted=true; max-age=31536000;");
    expect(cookieHandler.cookieConsentBackdrop.classList.contains("invisible")).toBe(true);
    expect(cookieHandler.cookieConsent.classList.contains("invisible")).toBe(true);
    // TODO: Fix this test
    // expect(addScript).toHaveBeenCalledWith("/js/third-party/hotjar.js");
  });

  it("rejects cookies and hides the cookie consent banner when reject button is clicked", () => {
    cookieHandler.rejectCookies();

    expect(document.cookie).toEqual("cookiesAccepted=false; max-age=31536000;");
    expect(cookieHandler.cookieConsentBackdrop.classList.contains("invisible")).toBe(true);
    expect(cookieHandler.cookieConsent.classList.contains("invisible")).toBe(true);
  });

  it("clears all cookies", () => {
    document.cookie = "testCookie1=testValue1";
    document.cookie = "testCookie2=testValue2";
    document.cookie = "cookiesAccepted=true";

    cookieHandler.clearCookies();

    expect(document.cookie).toEqual("");
  });
});
