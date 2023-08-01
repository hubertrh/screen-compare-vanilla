export default class CommonScreensHandler {
  static data = null;
  static activeHandler = null;

  static async fetchData() {
    if (this.data === null) {
      const response = await fetch("/data/deviceData.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    }
    return this.data;
  }

  constructor(index) {
    this.formFields = {
      name: `name-${index}`,
      size: `size-${index}`,
      xAspectRatio: `ratio-w-${index}`,
      yAspectRatio: `ratio-h-${index}`,
      xResolution: `res-w-${index}`,
      yResolution: `res-h-${index}`,
    };
    this.commonScreensDialog = document.querySelector(".common-screens-dialog");
    this.nameInput = document.querySelectorAll(".name")[index - 1];
  }

  fillForm(deviceData) {
    for (const field in deviceData) {
      if (this.formFields[field]) {
        const element = document.getElementById(this.formFields[field]);
        if (element) {
          element.value = deviceData[field];
        } else {
          console.error(`Element not found for id: ${this.formFields[field]}`);
        }
      }
    }
  }

  attachEventHandlers() {
    const firstColumnSelector = ".common-screens-dialog__column:nth-child(1) li";
    const otherColumnsSelector = ".common-screens-dialog__column:not(:nth-child(1)) li";

    // Set the active handler to this instance
    CommonScreensHandler.activeHandler = this;

    // Remove previous event listeners
    document.querySelectorAll(firstColumnSelector).forEach((li) => {
      li.removeEventListener("click", this.handleFirstColumnClick);
    });
    document.querySelectorAll(otherColumnsSelector).forEach((li) => {
      li.removeEventListener("click", this.handleOtherColumnsClick);
    });

    // Attach new event listeners
    document.querySelectorAll(firstColumnSelector).forEach((li) => {
      li.addEventListener("click", this.handleFirstColumnClick);
    });
    document.querySelectorAll(otherColumnsSelector).forEach((li) => {
      li.addEventListener("click", this.handleOtherColumnsClick);
    });
  }

  handleFirstColumnClick = (event) => {
    if (CommonScreensHandler.activeHandler !== this) return;

    const li = event.target.closest("li");
    const span = li.querySelector("span");
    const size = span.childNodes[0].textContent.replace(/["'″]/g, "").trim();
    const aspectRatio = span.childNodes[2].textContent.trim();
    const [xAspectRatio, yAspectRatio] = aspectRatio.split(":");

    this.fillForm({ size, xAspectRatio, yAspectRatio });

    this.commonScreensDialog.close();
  };

  handleOtherColumnsClick = (event) => {
    if (CommonScreensHandler.activeHandler !== this) return;

    const li = event.target;
    const deviceName = li.textContent.trim();
    const deviceData = this.data[deviceName];
    if (deviceData) {
      deviceData.name = deviceName;
      this.fillForm(deviceData);
      this.nameInput.dispatchEvent(new Event("input"));
    } else {
      console.error(`No data for device: ${deviceName}`);
    }

    this.commonScreensDialog.close();
  };
}
