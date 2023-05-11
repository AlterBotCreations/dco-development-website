/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index/classes/informationCard.ts":
/*!****************************************************!*\
  !*** ./public/js/index/classes/informationCard.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InformationCard = void 0;
const stringTools_1 = __importDefault(__webpack_require__(/*! ../tools/stringTools */ "./public/js/index/tools/stringTools.ts"));
/** For information card standardization.
 *
 * @author Alter
 *
 */
class InformationCard {
    /**
     *
     * @param name The name on the card.
     * @param imageLink The image on the card.
     */
    constructor(name, imageLink) {
        /** The link/path to the card's image. Can serve as a profile pic.*/
        this.imageLink = "./default_pfp.png"; // Default.
        // If the name is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error(`name cannot be blank.`);
        }
        else if (stringTools_1.default.isBlank(imageLink)) {
            throw new Error(`imageLink cannot be blank.`);
        }
        this.name = name;
        this.imageLink = imageLink;
    }
}
exports.InformationCard = InformationCard;


/***/ }),

/***/ "./public/js/index/classes/supporters_section/supporterCard.ts":
/*!*********************************************************************!*\
  !*** ./public/js/index/classes/supporters_section/supporterCard.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const htmlTools_1 = __webpack_require__(/*! ../../tools/htmlTools */ "./public/js/index/tools/htmlTools.ts");
const informationCard_1 = __webpack_require__(/*! ../informationCard */ "./public/js/index/classes/informationCard.ts");
/** Creates a supporter card.
 *
 * @author Alter
 *
 */
class SupporterCard extends informationCard_1.InformationCard {
    /**
     *
     * @param name The name of the supporter.
     * @param imageLink The path or link to the supporter's image.
     * @param donationAmountUSD The donation amount of the supporter.
     */
    constructor(name, imageLink, donationAmountUSD) {
        super(name, imageLink);
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
        const imageElement = htmlTools_1.HTMLTools.buildImageElement(this.imageLink, "image");
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

/***/ "./public/js/index/classes/supporters_section/supportersGroup.ts":
/*!***********************************************************************!*\
  !*** ./public/js/index/classes/supporters_section/supportersGroup.ts ***!
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
        supporterCardHolderDiv.classList.add(`${SupportersGroup.SUPPORTER_CARD_HOLDER_CLASSNAME}-${this.name}`);
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
const supporterCard_1 = __importDefault(__webpack_require__(/*! ./classes/supporters_section/supporterCard */ "./public/js/index/classes/supporters_section/supporterCard.ts"));
const supportersGroup_1 = __importDefault(__webpack_require__(/*! ./classes/supporters_section/supportersGroup */ "./public/js/index/classes/supporters_section/supportersGroup.ts"));
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
        const group3 = new supportersGroup_1.default("Gold", "test", supportersSectionDiv);
        group3.add(new supporterCard_1.default("Test", "", 2));
        const group4 = new supportersGroup_1.default("Silver", "test", supportersSectionDiv);
        const group5 = new supportersGroup_1.default("Basic", "test", supportersSectionDiv);
        const group6 = new supportersGroup_1.default("Micro", "test", supportersSectionDiv);
        // Build the groups.
        group1.build();
        group2.build();
        group3.build();
        group4.build();
        group5.build();
        group6.build();
    });
}
// Build the supporters section.
buildSupportersSection();
console.log("index running");


/***/ }),

/***/ "./public/js/index/tools/htmlTools.ts":
/*!********************************************!*\
  !*** ./public/js/index/tools/htmlTools.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTMLTools = void 0;
/** Contains useful HTML tools.
 *
 * @author Alter
 *
 */
class HTMLTools {
    /** Returns a new gtml img element.
     *
     * @param src The source of the image.
     * @param alt The alt of the image.
     * @returns
     */
    static buildImageElement(src, alt) {
        const imageElement = document.createElement("img");
        imageElement.src = src;
        imageElement.alt = alt;
        return imageElement;
    }
}
exports.HTMLTools = HTMLTools;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDM0JmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL2luZm9ybWF0aW9uQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJDYXJkLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlcnNHcm91cC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9pbmRleC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC90b29scy9odG1sVG9vbHMudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvdG9vbHMvc3RyaW5nVG9vbHMudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmZvcm1hdGlvbkNhcmQgPSB2b2lkIDA7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogRm9yIGluZm9ybWF0aW9uIGNhcmQgc3RhbmRhcmRpemF0aW9uLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIEluZm9ybWF0aW9uQ2FyZCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvbiB0aGUgY2FyZC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBpbWFnZSBvbiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZUxpbmspIHtcbiAgICAgICAgLyoqIFRoZSBsaW5rL3BhdGggdG8gdGhlIGNhcmQncyBpbWFnZS4gQ2FuIHNlcnZlIGFzIGEgcHJvZmlsZSBwaWMuKi9cbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBcIi4vZGVmYXVsdF9wZnAucG5nXCI7IC8vIERlZmF1bHQuXG4gICAgICAgIC8vIElmIHRoZSBuYW1lIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG5hbWUgY2Fubm90IGJlIGJsYW5rLmApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKGltYWdlTGluaykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW1hZ2VMaW5rIGNhbm5vdCBiZSBibGFuay5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmltYWdlTGluayA9IGltYWdlTGluaztcbiAgICB9XG59XG5leHBvcnRzLkluZm9ybWF0aW9uQ2FyZCA9IEluZm9ybWF0aW9uQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaHRtbFRvb2xzXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvaHRtbFRvb2xzXCIpO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkXzEgPSByZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkXCIpO1xuLyoqIENyZWF0ZXMgYSBzdXBwb3J0ZXIgY2FyZC5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdXBwb3J0ZXJDYXJkIGV4dGVuZHMgaW5mb3JtYXRpb25DYXJkXzEuSW5mb3JtYXRpb25DYXJkIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdXBwb3J0ZXIuXG4gICAgICogQHBhcmFtIGltYWdlTGluayBUaGUgcGF0aCBvciBsaW5rIHRvIHRoZSBzdXBwb3J0ZXIncyBpbWFnZS5cbiAgICAgKiBAcGFyYW0gZG9uYXRpb25BbW91bnRVU0QgVGhlIGRvbmF0aW9uIGFtb3VudCBvZiB0aGUgc3VwcG9ydGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaywgZG9uYXRpb25BbW91bnRVU0QpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaW1hZ2VMaW5rKTtcbiAgICAgICAgdGhpcy5kb25hdGlvbkFtb3VudFVTRCA9IGRvbmF0aW9uQW1vdW50VVNEO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyBhIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSBlbnRpcmUgY2FyZC5cbiAgICAgKlxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgbmFtZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBpbWFnZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBodG1sVG9vbHNfMS5IVE1MVG9vbHMuYnVpbGRJbWFnZUVsZW1lbnQodGhpcy5pbWFnZUxpbmssIFwiaW1hZ2VcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgaHRtbCBtYWluIGRpdiBlbGVtZW50LlxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1haW4gZGl2LlxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn1cbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYuICovXG5TdXBwb3J0ZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZE1haW5EaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBlbGVtZW50LiAqL1xuU3VwcG9ydGVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJDYXJkTmFtZVwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBpbWFnZSBlbGVtZW50LiAqL1xuU3VwcG9ydGVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZEltYWdlXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJDYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogSG9sZHMgc3VwcG9ydGVyIGNhcmRzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlcnNHcm91cCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VjdGlvbi5cbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBzZWN0aW9uLlxuICAgICAqIEBwYXJhbSBwYXJlbnREaXYgVGhlIGRpdiB0byBhcHBlbmQgdGhpcyBzZWN0aW9uIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwYXJlbnREaXYpIHtcbiAgICAgICAgLy8gSWYgdGhlIG5hbWUgaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5hbWUgY2Fubm90IGJlIGJsYW5rLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgZGVzY3JpcHRpb24gaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBlbHNlIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuay5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucGFyZW50RGl2ID0gcGFyZW50RGl2O1xuICAgICAgICA7XG4gICAgfVxuICAgIC8qKiBBZGRzIGEgc3VwcG9ydGVyIGNhcmQgdG8gdGhlIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJkXG4gICAgICovXG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICAvKiogQnVpbGRzIHRoZSBzZWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lLlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uLlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkaXYgdGhhdCBob2xkcyBzdXBwb3J0ZXIgY2FyZHMuXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlckNhcmRIb2xkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoYCR7U3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUV9LSR7dGhpcy5uYW1lfWApO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHN1cHBvcnRlcnMgY2FyZHMuXG4gICAgICAgIC8vIEFkZCBlYWNoIGNhcmQgdG8gdGhlIGdyb3VwRGl2LlxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYXJkcykge1xuICAgICAgICAgICAgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhcmRzW2ldLmJ1aWxkKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBtYWluRGl2LlxuICAgICAgICBjb25zdCBncm91cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdyb3VwRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoc3VwcG9ydGVyQ2FyZEhvbGRlckRpdik7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZ3JvdXBEaXYgdG8gdGhlIHBhcmVudCBkaXYuXG4gICAgICAgIHRoaXMucGFyZW50RGl2LmFwcGVuZENoaWxkKGdyb3VwRGl2KTtcbiAgICB9XG59XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwTWFpbkRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBkaXYgdGhhdCBob2xkcyB0aGUgc3VwcG9ydGVyIGNhcmRzLiAqL1xuU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cENhcmRIb2xkZXJEaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIG5hbWUgaHRtbCBlbGVtZW50LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cE5hbWVcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIGRlc2NyaXB0aW9uIGh0bWwgZWxlbWVudC5TICovXG5TdXBwb3J0ZXJzR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cERlc2NyaXB0aW9uXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJzR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3VwcG9ydGVyQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlckNhcmRcIikpO1xuY29uc3Qgc3VwcG9ydGVyc0dyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY2xhc3Nlcy9zdXBwb3J0ZXJzX3NlY3Rpb24vc3VwcG9ydGVyc0dyb3VwXCIpKTtcbi8qKiBCdWlsZHMgdGhlIGluZGV4IHBhZ2VzJ3Mgc3VwcG9ydGVycyBzZWN0aW9uLlxuICpcbiAqL1xuZnVuY3Rpb24gYnVpbGRTdXBwb3J0ZXJzU2VjdGlvbigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBHZXQgdGhlIHN1cHBvcnRlcnMgc2VjdGlvblxuICAgICAgICBjb25zdCBzdXBwb3J0ZXJzU2VjdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VwcG9ydGVyc1NlY3Rpb25cIik7XG4gICAgICAgIGlmIChzdXBwb3J0ZXJzU2VjdGlvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3VwcG9ydGVycyBzZWN0aW9uIGlzIG51bGwuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZ3JvdXBzLlxuICAgICAgICBjb25zdCBncm91cDEgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIlBsYXRpbnVtXCIsIFwiTm90aGluZyB3b3VsZCBiZSBwb3NzaWJsZSB3aXRob3V0IG91ciBncmVhdGVzdCBkb25hdG9ycy5cIiwgc3VwcG9ydGVyc1NlY3Rpb25EaXYpO1xuICAgICAgICBncm91cDEuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIllpcG1hblwiLCBcImltYWdlXCIsIDEwMDAwKSk7XG4gICAgICAgIGNvbnN0IGdyb3VwMiA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiQnJvbnplXCIsIFwiQnJvbnplIHN1cHBvcnRlcnMuXCIsIHN1cHBvcnRlcnNTZWN0aW9uRGl2KTtcbiAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgY29uc3QgZ3JvdXAzID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJHb2xkXCIsIFwidGVzdFwiLCBzdXBwb3J0ZXJzU2VjdGlvbkRpdik7XG4gICAgICAgIGdyb3VwMy5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiVGVzdFwiLCBcIlwiLCAyKSk7XG4gICAgICAgIGNvbnN0IGdyb3VwNCA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiU2lsdmVyXCIsIFwidGVzdFwiLCBzdXBwb3J0ZXJzU2VjdGlvbkRpdik7XG4gICAgICAgIGNvbnN0IGdyb3VwNSA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiQmFzaWNcIiwgXCJ0ZXN0XCIsIHN1cHBvcnRlcnNTZWN0aW9uRGl2KTtcbiAgICAgICAgY29uc3QgZ3JvdXA2ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJNaWNyb1wiLCBcInRlc3RcIiwgc3VwcG9ydGVyc1NlY3Rpb25EaXYpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgZ3JvdXBzLlxuICAgICAgICBncm91cDEuYnVpbGQoKTtcbiAgICAgICAgZ3JvdXAyLmJ1aWxkKCk7XG4gICAgICAgIGdyb3VwMy5idWlsZCgpO1xuICAgICAgICBncm91cDQuYnVpbGQoKTtcbiAgICAgICAgZ3JvdXA1LmJ1aWxkKCk7XG4gICAgICAgIGdyb3VwNi5idWlsZCgpO1xuICAgIH0pO1xufVxuLy8gQnVpbGQgdGhlIHN1cHBvcnRlcnMgc2VjdGlvbi5cbmJ1aWxkU3VwcG9ydGVyc1NlY3Rpb24oKTtcbmNvbnNvbGUubG9nKFwiaW5kZXggcnVubmluZ1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5IVE1MVG9vbHMgPSB2b2lkIDA7XG4vKiogQ29udGFpbnMgdXNlZnVsIEhUTUwgdG9vbHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgSFRNTFRvb2xzIHtcbiAgICAvKiogUmV0dXJucyBhIG5ldyBndG1sIGltZyBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNyYyBUaGUgc291cmNlIG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAcGFyYW0gYWx0IFRoZSBhbHQgb2YgdGhlIGltYWdlLlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkSW1hZ2VFbGVtZW50KHNyYywgYWx0KSB7XG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIGltYWdlRWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIHJldHVybiBpbWFnZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5IVE1MVG9vbHMgPSBIVE1MVG9vbHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBDb250YWlucyB1c2VmdWwgc3RyaW5nIHRvb2wgZnVuY3Rpb25zLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN0cmluZ1Rvb2xzIHtcbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc09ubHlTcGFjZXMoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKC9eICskLykudGVzdChzdHJpbmcpO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgaXMgb2YgbGVuZ3RoIDAgb3IgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc0JsYW5rKHN0cmluZykge1xuICAgICAgICByZXR1cm4gKHN0cmluZy5sZW5ndGggPT09IDAgfHwgdGhpcy5pc09ubHlTcGFjZXMoc3RyaW5nKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyaW5nVG9vbHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvaW5kZXgvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=