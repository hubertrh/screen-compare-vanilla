import tippy, { roundArrow } from "tippy.js";
import "tippy.js/animations/perspective-subtle.css";
import "tippy.js/dist/svg-arrow.css";
import "tippy.js/dist/tippy.css"; // optional for styling
import { addScreenToDatabase } from "../database/firestore";
import { getRndInteger } from "../utils/domUtils";

export default class ComparisonHandler {
  static data = null;

  static async fetchPpiResponses() {
    if (this.data === null) {
      const response = await fetch("/data/ppiResponses.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    }
    return this.data;
  }

  constructor() {
    this.detailsUnitSwitch = document.querySelector(".text-units-switch");
    this.unitsDivider = 0;
    this.switchUnits = "";
    this.fractionDigits = 0;
    this.diagonals = [];
    this.units = [];
    this.ratios = [];
    this.resolutions = [];
    this.ppis = [];
    this.sides = [];
    this.screenBox = document.querySelector(".visualization-box");
    this.media1000 = window.matchMedia("(max-width: 1000px)");

    this.detailsUnitSwitch.addEventListener("change", this.onTableUnitsChange.bind(this));
  }

  handleUnitsValues() {
    if (!this.detailsUnitSwitch.checked) {
      this.unitsDivider = 2.54;
      this.switchUnits = "in";
      this.fractionDigits = 2;
    } else {
      this.unitsDivider = 1;
      this.switchUnits = "cm";
      this.fractionDigits = 1;
    }
  }

  handleDiagonalsAndUnits() {
    this.diagonals = Array.from(document.querySelectorAll(".size-input[required]")).map((field) =>
      Number(field.value.replace(/,/g, "."))
    );
    this.units = Array.from(document.querySelectorAll(".units-label")).map(
      (field) => field.textContent
    );
    this.units.forEach((unit, index) => {
      if (unit === "in" && this.diagonals[index] > 0) {
        this.diagonals[index] = this.diagonals[index] * 2.54;
      }
    });
  }

  handleRatios() {
    this.ratios = Array.from(document.querySelectorAll(".ratio-input[required]")).map((field) =>
      Number(field.value.replace(/,/g, "."))
    );
  }

  handleResolutions() {
    this.resolutions = Array.from(document.querySelectorAll(".res-input")).map((field) =>
      Number(field.value.replace(/,/g, "."))
    );
  }

  calculatePpis() {
    this.ppis = [];

    for (let index = 0; index <= 2; index++) {
      if (this.resolutions[index * 2] !== 0 && this.resolutions[index * 2 + 1] !== 0) {
        const resDiagonal = Math.round(
          Number(Math.sqrt(this.resolutions[index * 2] ** 2 + this.resolutions[index * 2 + 1] ** 2))
        );
        this.ppis = [
          ...this.ppis,
          Number(Math.round(resDiagonal / (this.diagonals[index] / this.unitsDivider))),
        ];
      } else {
        this.ppis = [...this.ppis, ""];
      }
    }
  }

  calculateSides() {
    this.sides = [];

    this.diagonals.forEach((diagonal, index) => {
      const ratioW = this.ratios[index * 2];
      const ratioH = this.ratios[index * 2 + 1];
      const sideH = (diagonal * ratioH) / Math.sqrt(ratioW ** 2 + ratioH ** 2);
      const sideW = (ratioW / ratioH) * sideH;

      this.sides.push(sideW);
      this.sides.push(sideH);
    });
  }

  calculateProportions() {
    const screens = document.querySelectorAll(".visualization");

    let containerWidth = getComputedStyle(document.querySelector(".visualization-box")).width;
    containerWidth = Number(containerWidth.slice(0, containerWidth.length - 2));

    let containerHeight = getComputedStyle(document.querySelector(".visualization-box")).height;
    containerHeight = Number(containerHeight.slice(0, containerHeight.length - 2));

    let scale = 0;

    this.sides.forEach((side, index) => {
      if ((index + 1) % 2 === 1) {
        if (scale < side / containerWidth) {
          scale = side / containerWidth;
        }
      }
      if ((index + 1) % 2 === 0) {
        if (scale < side / containerHeight) {
          scale = side / containerHeight;
        }
      }
    });

    screens.forEach((screen, index) => {
      screen.setAttribute(
        "style",
        `
          width: ${this.sides[index * 2] / scale}px; 
          height: ${this.sides[index * 2 + 1] / scale}px;
        `
      );
    });
  }

  handleGuides() {
    const diagonalGuides = document.querySelectorAll(".diagonal");

    this.diagonals.forEach((diagonal, index) => {
      diagonalGuides[index].textContent = `${Number(
        (diagonal / this.unitsDivider).toFixed(this.fractionDigits)
      )} ${this.switchUnits}`;

      const angle =
        Math.atan(this.ratios[index * 2 + 1] / this.ratios[index * 2]) * (180 / Math.PI);

      diagonalGuides[index].setAttribute("style", `transform: rotate(-${angle}deg)`);
      diagonalGuides[index].style.setProperty(
        "--after-width",
        `${diagonalGuides[index].textContent.length - 1}em`
      );
    });

    const sortedScreens = [...document.querySelectorAll(".visualization")].sort((a, b) => {
      const aDiagonal = Number(
        a.children[0].textContent.slice(0, a.children[0].textContent.length - 3)
      );
      const bDiagonal = Number(
        b.children[0].textContent.slice(0, b.children[0].textContent.length - 3)
      );
      return bDiagonal - aDiagonal;
    });

    // removes screen with class "hidden" from sortedScreens array
    sortedScreens.forEach((screen, index) => {
      screen.style.zIndex = (index + 1).toString();

      let factor = 2;

      if (screen.classList.contains("hidden")) {
        sortedScreens.splice(index, 1);
        factor = 1;
      }

      let tempStyle = screen.children[0].style.transform;

      screen.children[0].style.transform = `${tempStyle} translate(${-index * 2.5 + factor}em)`;
      tempStyle = screen.children[0].style.transform;

      if (Number(screen.style.width.slice(0, -2)) <= 150) {
        screen.children[0].style.transform = tempStyle.slice(0, -15);
      }
    });

    const guidesWrapperBottom = document.querySelector(".guides-wrapper--bottom");
    const guidesWrapperLeft = document.querySelector(".guides-wrapper--left");

    // removes all guides
    while (guidesWrapperBottom.firstChild) {
      guidesWrapperBottom.removeChild(guidesWrapperBottom.firstChild);
    }
    while (guidesWrapperLeft.firstChild) {
      guidesWrapperLeft.removeChild(guidesWrapperLeft.firstChild);
    }

    this.sides.forEach((_, index) => {
      let guideSide;

      (index + 1) % 2 === 1 ? (guideSide = "bottom") : (guideSide = "left");

      const curScreen = sortedScreens[Math.floor(index / 2)];

      const screenNumber =
        curScreen.className.slice(curScreen.className.length - 1, curScreen.className.length) - 1;

      const newGuide = document.createElement("p");
      newGuide.className = `guides guides--${guideSide} guides--${guideSide}--${screenNumber + 1}`;

      const textContent = `${Number(
        (this.sides[screenNumber * 2 + (index % 2)] / this.unitsDivider).toFixed(
          this.fractionDigits
        )
      )} ${this.switchUnits}`;

      newGuide.textContent = textContent.toString();

      if (guideSide === "bottom") {
        guidesWrapperBottom.appendChild(newGuide);
      }
      if (guideSide === "left") {
        guidesWrapperLeft.appendChild(newGuide);
      }
    });

    const diagonalGuidesSorted = [...diagonalGuides].sort((a, b) => {
      return (
        Number(b.textContent.slice(0, b.textContent.length - 3)) -
        Number(a.textContent.slice(0, a.textContent.length - 3))
      );
    });

    diagonalGuides.forEach((guide) => {
      guide.classList.remove("dashed", "dotted");
    });

    let matrixAngles = [];

    diagonalGuidesSorted.forEach((guide, index) => {
      const matrixAngle = Number(
        getComputedStyle(diagonalGuidesSorted[index])
          .transform.slice(7, getComputedStyle(diagonalGuidesSorted[index]).transform.length - 1)
          .split(", ")[0]
      );

      matrixAngles = [...matrixAngles, matrixAngle];

      if (index !== 0) {
        if (
          matrixAngles[index] === matrixAngles[index - 1] ||
          matrixAngles[index] === matrixAngles[index - 2]
        ) {
          if (diagonalGuidesSorted[index - 1].classList.contains("dashed")) {
            guide.classList.add("dotted");
          } else {
            guide.classList.add("dashed");
          }
        }
      }
    });

    const screens = document.querySelectorAll(".visualization");
    let maxHeight = 0;
    let maxWidth = 0;

    screens.forEach((screen) => {
      if (screen.offsetHeight > maxHeight) {
        maxHeight = screen.offsetHeight;
      }

      if (screen.offsetWidth > maxWidth) {
        maxWidth = screen.offsetWidth;
      }
    });

    guidesWrapperBottom.style.width = `${maxWidth}px`;
    guidesWrapperLeft.style.height = `${maxHeight}px`;
  }

  centerVisualisations() {
    const screens = document.querySelectorAll(".visualization");
    let maxHeight = 0;
    let maxWidth = 0;

    screens.forEach((screen) => {
      if (screen.offsetHeight > maxHeight) {
        maxHeight = screen.offsetHeight;
      }

      if (screen.offsetWidth > maxWidth) {
        maxWidth = screen.offsetWidth;
      }
    });

    this.screenBox.setAttribute(
      "style",
      `
      width: ${maxWidth}px;
      height: ${maxHeight}px;
      `
    );
  }

  resizeBox() {
    const box = document.querySelector(".screen-results__visualizations");
    const screenBoxComputedHeight = getComputedStyle(this.screenBox).height;
    box.style.height = `calc(${screenBoxComputedHeight} + 6em`;
  }

  handleThirdScreenElement() {
    const thirdScreenElement = document.querySelector(".visualization--3");

    if (this.diagonals.length === 2) {
      thirdScreenElement.classList.add("hidden");
    } else {
      thirdScreenElement.classList.remove("hidden");
    }
  }

  handleResultsTable() {
    const valueRows = document.querySelectorAll(".values__row");

    // Width
    [...valueRows[0].children].forEach((child, index) => {
      child.textContent = `${Number((this.sides[index * 2] / this.unitsDivider).toFixed(2))} ${
        this.switchUnits
      }`;
    });

    // Height
    [...valueRows[1].children].forEach((child, index) => {
      child.textContent = `${Number((this.sides[index * 2 + 1] / this.unitsDivider).toFixed(2))} ${
        this.switchUnits
      }`;
    });

    // Diagonal
    [...valueRows[2].children].forEach((child, index) => {
      child.textContent = `${Number((this.diagonals[index] / this.unitsDivider).toFixed(2))} ${
        this.switchUnits
      }`;
    });

    // Area
    [...valueRows[3].children].forEach((child, index) => {
      child.textContent = `${Number(
        (
          (this.sides[index * 2] / this.unitsDivider) *
          (this.sides[index * 2 + 1] / this.unitsDivider)
        ).toFixed(2)
      )} ${this.switchUnits}²`;
    });

    /**
     * Handles the PPI row by updating the values of the PPI
     * of the screens and hiding/showing the PPI guide.
     */
    const handlePpiRow = () => {
      const ppiGuide = document.querySelector(".ppi-guide");

      [...valueRows[4].children].forEach((child, index) => {
        if (this.resolutions[index * 2] === 0 || this.resolutions[index * 2 + 1] === 0) {
          child.style.opacity = "0";
          child.textContent = "";
        } else {
          child.style.opacity = "1";
          child.textContent = this.ppis[index].toString();
        }
      });
      if ([...valueRows[4].children].every((child) => child.style.opacity === "0")) {
        valueRows[4].style.display = "none";
        ppiGuide.style.display = "none";
        ppiGuide.style.opacity = "0";
      } else {
        valueRows[4].style.display = "grid";
        ppiGuide.style.display = "block";
        ppiGuide.style.opacity = "1";
      }
    };

    handlePpiRow();
  }

  handlePpiValidationColors() {
    const sizeThresholds = {
      mobile: 6.9 * 2.54,
      tablet: 11.1 * 2.54,
    };

    this.diagonals.forEach((diagonal, index) => {
      const ppiThresholds = {
        mobile: { green: 400, darkgoldenrod: 300, brown: 0 },
        tablet: { green: 200, darkgoldenrod: 150, brown: 0 },
        desktop: { green: 150, darkgoldenrod: 100, brown: 0 },
      };

      function getDeviceType(diagonal) {
        if (diagonal <= sizeThresholds.mobile) {
          return "mobile";
        } else if (diagonal <= sizeThresholds.tablet) {
          return "tablet";
        } else {
          return "desktop";
        }
      }

      function getColor(ppi, deviceType) {
        const thresholds = ppiThresholds[deviceType];
        for (let color in thresholds) {
          if (ppi >= thresholds[color]) {
            return color;
          }
        }
      }

      const deviceType = getDeviceType(diagonal);
      const color = getColor(this.ppis[index], deviceType);
      const curPpiElement = document.querySelectorAll(".row__value.ppi")[index];
      curPpiElement.style.setProperty("--validation-color", color);

      // Add Tippy.js tooltip
      const colorToDataKey = {
        green: "high",
        darkgoldenrod: "medium",
        brown: "low",
      };

      tippy(curPpiElement, {
        content: () => {
          const dataKey = colorToDataKey[color];

          if (!dataKey) {
            return "PPI, or Pixels Per Inch, is a measure of screen resolution. Higher PPI generally implies a clearer, sharper display.";
          }

          const data = ComparisonHandler.data[dataKey];
          const length = data.length;

          return data[getRndInteger(0, length - 1)];
        },
        placement: "top",
        arrow: roundArrow,
        animation: "perspective-subtle",
      });
    });
  }

  /**
   * Handles the display of the reference values for each screen.
   * Calculates the percentage difference between each value and the value of the
   * screen selected as the reference screen, and displays it in parentheses next to the value.
   * @param {Event} e - The click event object.
   * @param {number} refIndex - The index of the active reference screen.
   */
  handleReferenceValues(_, refIndex) {
    const detailsRows = document.querySelectorAll(".values__row");

    detailsRows.forEach((row) => {
      [...row.children].forEach((refValue) => {
        const referenceValue = parseFloat(refValue.textContent);
        const referenceIndexValue = parseFloat(row.children[refIndex].textContent);
        let refPercentage = referenceValue / referenceIndexValue;
        refPercentage = Math.round(refPercentage * 100);

        const refValueVar = isNaN(refPercentage) ? `"\u2014"` : `"(${refPercentage}%)"`; // \u2014 - em dash
        refValue.style.setProperty("--value-reference", refValueVar);
      });
    });
  }

  saveFormData() {
    const isThirdScreenActive = !document.querySelector(".screen--inactive");
    const screens = isThirdScreenActive ? 3 : 2;

    for (let index = 0; index < screens; index++) {
      const diagonalInInches = this.diagonals[index] / 2.54;
      const xAspectRatio = this.ratios[index * 2];
      const yAspectRatio = this.ratios[index * 2 + 1];

      addScreenToDatabase(diagonalInInches, xAspectRatio, yAspectRatio);
    }
  }

  async onTableUnitsChange() {
    await Promise.resolve(this.handleUnitsValues());
    this.calculate();
    this.handleResultsTable();
    this.handlePpiValidationColors();
  }

  ////////////////////////////////

  async calculate() {
    this.calculatePpis();
    await Promise.resolve(this.calculateSides());
    await Promise.resolve(this.calculateProportions());
    await Promise.resolve(this.handleGuides());
    await Promise.resolve(this.centerVisualisations());

    if (this.media1000.matches) {
      this.resizeBox();
    }
  }

  resetState() {
    this.unitsDivider = 0;
    this.switchUnits = "";
    this.fractionDigits = 0;
    this.diagonals = [];
    this.units = [];
    this.ratios = [];
    this.resolutions = [];
    this.ppis = [];
    this.sides = [];
  }

  async handleComparison() {
    this.resetState();
    await Promise.resolve(this.handleUnitsValues());
    this.handleDiagonalsAndUnits();
    this.handleRatios();
    this.handleResolutions();
    this.calculate();
    this.handleThirdScreenElement();
    this.handleResultsTable();
    this.handlePpiValidationColors();
    this.handleReferenceValues(null, 0);
    this.saveFormData();
  }
}
