/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index/classes/supporters section/supporterCard.ts":
/*!*********************************************************************!*\
  !*** ./public/js/index/classes/supporters section/supporterCard.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const stringTools_1 = __importDefault(__webpack_require__(/*! ../../tools/stringTools */ "./public/js/index/tools/stringTools.ts"));
/** Creates a supporter card.
 *
 * @author Alter
 *
 */
class SupporterCard {
    /**
     *
     * @param name The name of the supporter.
     * @param imageLink The path or link to the supporter's image.
     * @param donationAmountUSD The donation amount of the supporter.
     */
    constructor(name, imageLink, donationAmountUSD) {
        /** The link/path to the supporter's image. Can serve as a profile pic.*/
        this.imageLink = "./default_pfp.png"; // Default.
        // If the name is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error(`name cannot be blank.`);
        }
        // If the donation amount is less than 1, throw an error.
        else if (donationAmountUSD <= 0) {
            throw new Error(`Invalid donationAmountUSD: ${donationAmountUSD}`);
        }
        this.name = name;
        this.imageLink = imageLink;
        this.donationAmountUSD = donationAmountUSD;
    }
    /** Returns a div that contains the entire card.
     *
     */
    build() {
        // Build the name element.
        const nameElement = document.createElement("h3");
        nameElement.innerText = this.name;
        nameElement.classList.add(SupporterCard.NAME_ELEMENT_CLASSNAME);
        // Build the image element.
        const imageElement = document.createElement("img");
        imageElement.src = this.imageLink;
        imageElement.alt = "image";
        imageElement.classList.add(SupporterCard.IMAGE_ELEMENT_CLASSNAME);
        // Build the html main div element.
        const div = document.createElement("div");
        div.classList.add(SupporterCard.MAIN_DIV_CLASSNAME);
        div.appendChild(imageElement);
        div.appendChild(nameElement);
        // Return the main div.
        return div;
    }
}
/** The class name of the main div. */
SupporterCard.MAIN_DIV_CLASSNAME = "supporterCardMainDiv";
/** The class name of the name element. */
SupporterCard.NAME_ELEMENT_CLASSNAME = "supporterCardName";
/** The class name of the image element. */
SupporterCard.IMAGE_ELEMENT_CLASSNAME = "supporterCardImage";
exports["default"] = SupporterCard;


/***/ }),

/***/ "./public/js/index/classes/supporters section/supportersGroup.ts":
/*!***********************************************************************!*\
  !*** ./public/js/index/classes/supporters section/supportersGroup.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const stringTools_1 = __importDefault(__webpack_require__(/*! ../../tools/stringTools */ "./public/js/index/tools/stringTools.ts"));
/** Holds supporter cards.
 *
 * @author Alter
 *
 */
class SupportersGroup {
    /**
     *
     * @param name The name of the section.
     * @param description The description of the section.
     * @param parentDiv The div to append this section to.
     */
    constructor(name, description, parentDiv) {
        // If the name is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error("name cannot be blank.");
        }
        // If the description is blank, throw an error.
        else if (stringTools_1.default.isBlank(description)) {
            throw new Error("description cannot be blank.");
        }
        this.cards = [];
        this.name = name;
        this.description = description;
        this.parentDiv = parentDiv;
        ;
    }
    /** Adds a supporter card to the supporters section.
     *
     * @param card
     */
    add(card) {
        this.cards.push(card);
    }
    /** Builds the section.
     *
     */
    build() {
        // Build the name.
        const nameElement = document.createElement("h2");
        nameElement.innerText = this.name;
        nameElement.classList.add(SupportersGroup.NAME_ELEMENT_CLASSNAME);
        // Build the description.
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = this.description;
        descriptionElement.classList.add(SupportersGroup.DESCRIPTION_ELEMENT_CLASSNAME);
        // Build the div that holds supporter cards.
        const supporterCardHolderDiv = document.createElement("div");
        supporterCardHolderDiv.classList.add(SupportersGroup.SUPPORTER_CARD_HOLDER_CLASSNAME);
        // Loop through the supporters cards.
        // Add each card to the groupDiv.
        for (const i in this.cards) {
            supporterCardHolderDiv.appendChild(this.cards[i].build());
        }
        // Build the mainDiv.
        const groupDiv = document.createElement("div");
        groupDiv.classList.add(SupportersGroup.MAIN_DIV_CLASSNAME);
        groupDiv.appendChild(nameElement);
        groupDiv.appendChild(descriptionElement);
        groupDiv.appendChild(supporterCardHolderDiv);
        // Append the groupDiv to the parent div.
        this.parentDiv.appendChild(groupDiv);
    }
}
/** The class name of the main div. */
SupportersGroup.MAIN_DIV_CLASSNAME = "supportersGroupMainDiv";
/** The class name of the div that holds the supporter cards. */
SupportersGroup.SUPPORTER_CARD_HOLDER_CLASSNAME = "supportersGroupCardHolderDiv";
/** The class name of the section's name html element. */
SupportersGroup.NAME_ELEMENT_CLASSNAME = "supportersGroupName";
/** The class name of the section's description html element.S */
SupportersGroup.DESCRIPTION_ELEMENT_CLASSNAME = "supportersGroupDescription";
exports["default"] = SupportersGroup;


/***/ }),

/***/ "./public/js/index/index.ts":
/*!**********************************!*\
  !*** ./public/js/index/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const supporterCard_1 = __importDefault(__webpack_require__(/*! ./classes/supporters section/supporterCard */ "./public/js/index/classes/supporters section/supporterCard.ts"));
const supportersGroup_1 = __importDefault(__webpack_require__(/*! ./classes/supporters section/supportersGroup */ "./public/js/index/classes/supporters section/supportersGroup.ts"));
/** Builds the index pages's supporters section.
 *
 */
function buildSupportersSection() {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the supporters section
        const supportersSectionDiv = document.getElementById("supportersSection");
        if (supportersSectionDiv === null) {
            throw new Error("supporters section is null.");
        }
        // Create the groups.
        const group1 = new supportersGroup_1.default("Platinum", "Nothing would be possible without our greatest donators.", supportersSectionDiv);
        group1.add(new supporterCard_1.default("Yipman", "image", 10000));
        const group2 = new supportersGroup_1.default("Bronze", "Bronze supporters.", supportersSectionDiv);
        group2.add(new supporterCard_1.default("Alter", "", 1));
        group2.add(new supporterCard_1.default("Alter", "", 1));
        group2.add(new supporterCard_1.default("Alter", "", 1));
        group2.add(new supporterCard_1.default("Alter", "", 1));
        group2.add(new supporterCard_1.default("Alter", "", 1));
        group2.add(new supporterCard_1.default("Alter", "", 1));
        // Build the groups.
        group1.build();
        group2.build();
    });
}
// Build the supporters section.
buildSupportersSection();
console.log("index running");


/***/ }),

/***/ "./public/js/index/tools/stringTools.ts":
/*!**********************************************!*\
  !*** ./public/js/index/tools/stringTools.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/** Contains useful string tool functions.
 *
 * @author Alter
 *
 */
class StringTools {
    /** Returns true if the string contains ONLY one or more spaces.
     * Returns false otherwise.
     *
     * @param string
     * @returns boolean
     */
    static isOnlySpaces(string) {
        return new RegExp(/^ +$/).test(string);
    }
    /** Returns true if the string is of length 0 or contains ONLY one or more spaces.
     * Returns false otherwise.
     *
     * @param string
     * @returns boolean
     */
    static isBlank(string) {
        return (string.length === 0 || this.isOnlySpaces(string));
    }
}
exports["default"] = StringTools;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/index/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNDQUFzQyxtQkFBTyxDQUFDLHVFQUF5QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrQkFBa0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDN0RGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0NBQXNDLG1CQUFPLENBQUMsdUVBQXlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzlFRjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3Q0FBd0MsbUJBQU8sQ0FBQyxpSEFBNEM7QUFDNUYsMENBQTBDLG1CQUFPLENBQUMscUhBQThDO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0NhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7VUMzQmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvc3VwcG9ydGVycyBzZWN0aW9uL3N1cHBvcnRlckNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9zdXBwb3J0ZXJzIHNlY3Rpb24vc3VwcG9ydGVyc0dyb3VwLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L3Rvb2xzL3N0cmluZ1Rvb2xzLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmluZ1Rvb2xzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3N0cmluZ1Rvb2xzXCIpKTtcbi8qKiBDcmVhdGVzIGEgc3VwcG9ydGVyIGNhcmQuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgU3VwcG9ydGVyQ2FyZCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3VwcG9ydGVyLlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIHBhdGggb3IgbGluayB0byB0aGUgc3VwcG9ydGVyJ3MgaW1hZ2UuXG4gICAgICogQHBhcmFtIGRvbmF0aW9uQW1vdW50VVNEIFRoZSBkb25hdGlvbiBhbW91bnQgb2YgdGhlIHN1cHBvcnRlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZUxpbmssIGRvbmF0aW9uQW1vdW50VVNEKSB7XG4gICAgICAgIC8qKiBUaGUgbGluay9wYXRoIHRvIHRoZSBzdXBwb3J0ZXIncyBpbWFnZS4gQ2FuIHNlcnZlIGFzIGEgcHJvZmlsZSBwaWMuKi9cbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBcIi4vZGVmYXVsdF9wZnAucG5nXCI7IC8vIERlZmF1bHQuXG4gICAgICAgIC8vIElmIHRoZSBuYW1lIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG5hbWUgY2Fubm90IGJlIGJsYW5rLmApO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBkb25hdGlvbiBhbW91bnQgaXMgbGVzcyB0aGFuIDEsIHRocm93IGFuIGVycm9yLlxuICAgICAgICBlbHNlIGlmIChkb25hdGlvbkFtb3VudFVTRCA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZG9uYXRpb25BbW91bnRVU0Q6ICR7ZG9uYXRpb25BbW91bnRVU0R9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBpbWFnZUxpbms7XG4gICAgICAgIHRoaXMuZG9uYXRpb25BbW91bnRVU0QgPSBkb25hdGlvbkFtb3VudFVTRDtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgYSBkaXYgdGhhdCBjb250YWlucyB0aGUgZW50aXJlIGNhcmQuXG4gICAgICpcbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUgZWxlbWVudC5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgaW1hZ2UgZWxlbWVudC5cbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuaW1hZ2VMaW5rO1xuICAgICAgICBpbWFnZUVsZW1lbnQuYWx0ID0gXCJpbWFnZVwiO1xuICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGh0bWwgbWFpbiBkaXYgZWxlbWVudC5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtYWluIGRpdi5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2LiAqL1xuU3VwcG9ydGVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmRNYWluRGl2XCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG5hbWUgZWxlbWVudC4gKi9cblN1cHBvcnRlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZE5hbWVcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaW1hZ2UgZWxlbWVudC4gKi9cblN1cHBvcnRlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmRJbWFnZVwiO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3VwcG9ydGVyQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3RyaW5nVG9vbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvc3RyaW5nVG9vbHNcIikpO1xuLyoqIEhvbGRzIHN1cHBvcnRlciBjYXJkcy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdXBwb3J0ZXJzR3JvdXAge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlY3Rpb24uXG4gICAgICogQHBhcmFtIGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VjdGlvbi5cbiAgICAgKiBAcGFyYW0gcGFyZW50RGl2IFRoZSBkaXYgdG8gYXBwZW5kIHRoaXMgc2VjdGlvbiB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgcGFyZW50RGl2KSB7XG4gICAgICAgIC8vIElmIHRoZSBuYW1lIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJuYW1lIGNhbm5vdCBiZSBibGFuay5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGRlc2NyaXB0aW9uIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgZWxzZSBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkZXNjcmlwdGlvbiBjYW5ub3QgYmUgYmxhbmsuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBhcmVudERpdiA9IHBhcmVudERpdjtcbiAgICAgICAgO1xuICAgIH1cbiAgICAvKiogQWRkcyBhIHN1cHBvcnRlciBjYXJkIHRvIHRoZSBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FyZFxuICAgICAqL1xuICAgIGFkZChjYXJkKSB7XG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcbiAgICB9XG4gICAgLyoqIEJ1aWxkcyB0aGUgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgbmFtZS5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkZXNjcmlwdGlvbi5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgZGl2IHRoYXQgaG9sZHMgc3VwcG9ydGVyIGNhcmRzLlxuICAgICAgICBjb25zdCBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdi5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5TVVBQT1JURVJfQ0FSRF9IT0xERVJfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzdXBwb3J0ZXJzIGNhcmRzLlxuICAgICAgICAvLyBBZGQgZWFjaCBjYXJkIHRvIHRoZSBncm91cERpdi5cbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FyZHMpIHtcbiAgICAgICAgICAgIHN1cHBvcnRlckNhcmRIb2xkZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5jYXJkc1tpXS5idWlsZCgpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCdWlsZCB0aGUgbWFpbkRpdi5cbiAgICAgICAgY29uc3QgZ3JvdXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBncm91cERpdi5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5NQUlOX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICBncm91cERpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKHN1cHBvcnRlckNhcmRIb2xkZXJEaXYpO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIGdyb3VwRGl2IHRvIHRoZSBwYXJlbnQgZGl2LlxuICAgICAgICB0aGlzLnBhcmVudERpdi5hcHBlbmRDaGlsZChncm91cERpdik7XG4gICAgfVxufVxuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdi4gKi9cblN1cHBvcnRlcnNHcm91cC5NQUlOX0RJVl9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cE1haW5EaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZGl2IHRoYXQgaG9sZHMgdGhlIHN1cHBvcnRlciBjYXJkcy4gKi9cblN1cHBvcnRlcnNHcm91cC5TVVBQT1JURVJfQ0FSRF9IT0xERVJfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBDYXJkSG9sZGVyRGl2XCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNlY3Rpb24ncyBuYW1lIGh0bWwgZWxlbWVudC4gKi9cblN1cHBvcnRlcnNHcm91cC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBOYW1lXCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNlY3Rpb24ncyBkZXNjcmlwdGlvbiBodG1sIGVsZW1lbnQuUyAqL1xuU3VwcG9ydGVyc0dyb3VwLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBEZXNjcmlwdGlvblwiO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3VwcG9ydGVyc0dyb3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN1cHBvcnRlckNhcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jbGFzc2VzL3N1cHBvcnRlcnMgc2VjdGlvbi9zdXBwb3J0ZXJDYXJkXCIpKTtcbmNvbnN0IHN1cHBvcnRlcnNHcm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NsYXNzZXMvc3VwcG9ydGVycyBzZWN0aW9uL3N1cHBvcnRlcnNHcm91cFwiKSk7XG4vKiogQnVpbGRzIHRoZSBpbmRleCBwYWdlcydzIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAqXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkU3VwcG9ydGVyc1NlY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBzdXBwb3J0ZXJzIHNlY3Rpb25cbiAgICAgICAgY29uc3Qgc3VwcG9ydGVyc1NlY3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cHBvcnRlcnNTZWN0aW9uXCIpO1xuICAgICAgICBpZiAoc3VwcG9ydGVyc1NlY3Rpb25EaXYgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN1cHBvcnRlcnMgc2VjdGlvbiBpcyBudWxsLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgdGhlIGdyb3Vwcy5cbiAgICAgICAgY29uc3QgZ3JvdXAxID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJQbGF0aW51bVwiLCBcIk5vdGhpbmcgd291bGQgYmUgcG9zc2libGUgd2l0aG91dCBvdXIgZ3JlYXRlc3QgZG9uYXRvcnMuXCIsIHN1cHBvcnRlcnNTZWN0aW9uRGl2KTtcbiAgICAgICAgZ3JvdXAxLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJZaXBtYW5cIiwgXCJpbWFnZVwiLCAxMDAwMCkpO1xuICAgICAgICBjb25zdCBncm91cDIgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIkJyb256ZVwiLCBcIkJyb256ZSBzdXBwb3J0ZXJzLlwiLCBzdXBwb3J0ZXJzU2VjdGlvbkRpdik7XG4gICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBncm91cHMuXG4gICAgICAgIGdyb3VwMS5idWlsZCgpO1xuICAgICAgICBncm91cDIuYnVpbGQoKTtcbiAgICB9KTtcbn1cbi8vIEJ1aWxkIHRoZSBzdXBwb3J0ZXJzIHNlY3Rpb24uXG5idWlsZFN1cHBvcnRlcnNTZWN0aW9uKCk7XG5jb25zb2xlLmxvZyhcImluZGV4IHJ1bm5pbmdcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBDb250YWlucyB1c2VmdWwgc3RyaW5nIHRvb2wgZnVuY3Rpb25zLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN0cmluZ1Rvb2xzIHtcbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc09ubHlTcGFjZXMoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKC9eICskLykudGVzdChzdHJpbmcpO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgaXMgb2YgbGVuZ3RoIDAgb3IgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc0JsYW5rKHN0cmluZykge1xuICAgICAgICByZXR1cm4gKHN0cmluZy5sZW5ndGggPT09IDAgfHwgdGhpcy5pc09ubHlTcGFjZXMoc3RyaW5nKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyaW5nVG9vbHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvaW5kZXgvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=