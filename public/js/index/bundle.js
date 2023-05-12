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
        this.name = name;
        this.imageLink = imageLink;
    }
}
exports.InformationCard = InformationCard;


/***/ }),

/***/ "./public/js/index/classes/our_team_section/teamMemberCard.ts":
/*!********************************************************************!*\
  !*** ./public/js/index/classes/our_team_section/teamMemberCard.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamMemberCard = void 0;
const htmlTools_1 = __webpack_require__(/*! ../../tools/htmlTools */ "./public/js/index/tools/htmlTools.ts");
const informationCard_1 = __webpack_require__(/*! ../informationCard */ "./public/js/index/classes/informationCard.ts");
/** Holds and displays information about a team member.
 *
 * @author Alter
 */
class TeamMemberCard extends informationCard_1.InformationCard {
    /**
     *
     * @param name The name on the team member card.
     * @param imageLink The image on the team member card.
     */
    constructor(name, imageLink, description) {
        super(name, imageLink);
        this.description = description;
    }
    /** Returns the html div element that holds the card.
     *
     * @returns
     */
    build() {
        // Build the image element.
        const imageElement = htmlTools_1.HTMLTools.buildImageElement(this.imageLink, "image");
        imageElement.classList.add(TeamMemberCard.IMAGE_ELEMENT_CLASSNAME);
        // Build the name element.
        const nameElement = document.createElement("h1");
        nameElement.innerText = this.name;
        nameElement.classList.add(TeamMemberCard.NAME_ELEMENT_CLASSNAME);
        // Build the description element.
        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add(TeamMemberCard.DESCRIPTION_ELEMENT_CLASSNAME);
        descriptionElement.innerText = this.description;
        // Build the main div.
        const mainDiv = document.createElement("div");
        mainDiv.classList.add(TeamMemberCard.MAIN_DIV_CLASSNAME);
        mainDiv.appendChild(imageElement);
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(descriptionElement);
        return mainDiv;
    }
}
_a = TeamMemberCard;
/** The class name prefix to differentiate the elements from other elements. */
TeamMemberCard.CLASS_PREFIX = "teamMemberCard";
/** The class name of the main div of the card. */
TeamMemberCard.MAIN_DIV_CLASSNAME = `${_a.CLASS_PREFIX}MainDiv`;
/** The class name of the name element. */
TeamMemberCard.NAME_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Name`;
/** The class name of the image element. */
TeamMemberCard.IMAGE_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Image`;
/** The class name of the description element. */
TeamMemberCard.DESCRIPTION_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Description`;
exports.TeamMemberCard = TeamMemberCard;


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


/** The main file for the index page.
 *
 * @author Alter
 */
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
const teamMemberCard_1 = __webpack_require__(/*! ./classes/our_team_section/teamMemberCard */ "./public/js/index/classes/our_team_section/teamMemberCard.ts");
const supporterCard_1 = __importDefault(__webpack_require__(/*! ./classes/supporters_section/supporterCard */ "./public/js/index/classes/supporters_section/supporterCard.ts"));
const supportersGroup_1 = __importDefault(__webpack_require__(/*! ./classes/supporters_section/supportersGroup */ "./public/js/index/classes/supporters_section/supportersGroup.ts"));
/** Builds the index page's 'our team' section.
 *
 */
function buildOurTeamSection() {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the card holder.
        const cardHolderDivName = "teamMemberCardsHolder";
        const cardHolderDiv = document.getElementById(cardHolderDivName);
        // Add the cards.
        const cards = [
            new teamMemberCard_1.TeamMemberCard("Yipman", "test", "Project Lead"),
            new teamMemberCard_1.TeamMemberCard("Pagan", "test", "unsure"),
            new teamMemberCard_1.TeamMemberCard("Fluffy", "test", "Arma III Developer"),
            new teamMemberCard_1.TeamMemberCard("Tally", "test", "AI Developer\nArma III Developer"),
            new teamMemberCard_1.TeamMemberCard("Yipman", "test", "Project Lead"),
            new teamMemberCard_1.TeamMemberCard("Alter", "test", "Web Developer\nDiscord Bot Developer"),
        ];
        // Append the cards to the card holder div.
        for (const index in cards) {
            cardHolderDiv.appendChild(cards[index].build());
        }
    });
}
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
// Asynchronously build the webpage.
Promise.all([
    // Build the 'our team' section.
    buildOurTeamSection(),
    // Build the supporters section.
    buildSupportersSection()
]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9pbmZvcm1hdGlvbkNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9vdXJfdGVhbV9zZWN0aW9uL3RlYW1NZW1iZXJDYXJkLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlckNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9zdXBwb3J0ZXJzX3NlY3Rpb24vc3VwcG9ydGVyc0dyb3VwLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L3Rvb2xzL2h0bWxUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC90b29scy9zdHJpbmdUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluZm9ybWF0aW9uQ2FyZCA9IHZvaWQgMDtcbmNvbnN0IHN0cmluZ1Rvb2xzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2xzL3N0cmluZ1Rvb2xzXCIpKTtcbi8qKiBGb3IgaW5mb3JtYXRpb24gY2FyZCBzdGFuZGFyZGl6YXRpb24uXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgSW5mb3JtYXRpb25DYXJkIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9uIHRoZSBjYXJkLlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIGltYWdlIG9uIHRoZSBjYXJkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaykge1xuICAgICAgICAvKiogVGhlIGxpbmsvcGF0aCB0byB0aGUgY2FyZCdzIGltYWdlLiBDYW4gc2VydmUgYXMgYSBwcm9maWxlIHBpYy4qL1xuICAgICAgICB0aGlzLmltYWdlTGluayA9IFwiLi9kZWZhdWx0X3BmcC5wbmdcIjsgLy8gRGVmYXVsdC5cbiAgICAgICAgLy8gSWYgdGhlIG5hbWUgaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgbmFtZSBjYW5ub3QgYmUgYmxhbmsuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBpbWFnZUxpbms7XG4gICAgfVxufVxuZXhwb3J0cy5JbmZvcm1hdGlvbkNhcmQgPSBJbmZvcm1hdGlvbkNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGVhbU1lbWJlckNhcmQgPSB2b2lkIDA7XG5jb25zdCBodG1sVG9vbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b29scy9odG1sVG9vbHNcIik7XG5jb25zdCBpbmZvcm1hdGlvbkNhcmRfMSA9IHJlcXVpcmUoXCIuLi9pbmZvcm1hdGlvbkNhcmRcIik7XG4vKiogSG9sZHMgYW5kIGRpc3BsYXlzIGluZm9ybWF0aW9uIGFib3V0IGEgdGVhbSBtZW1iZXIuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICovXG5jbGFzcyBUZWFtTWVtYmVyQ2FyZCBleHRlbmRzIGluZm9ybWF0aW9uQ2FyZF8xLkluZm9ybWF0aW9uQ2FyZCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvbiB0aGUgdGVhbSBtZW1iZXIgY2FyZC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBpbWFnZSBvbiB0aGUgdGVhbSBtZW1iZXIgY2FyZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZUxpbmssIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGltYWdlTGluayk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgdGhlIGh0bWwgZGl2IGVsZW1lbnQgdGhhdCBob2xkcyB0aGUgY2FyZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBpbWFnZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBodG1sVG9vbHNfMS5IVE1MVG9vbHMuYnVpbGRJbWFnZUVsZW1lbnQodGhpcy5pbWFnZUxpbmssIFwiaW1hZ2VcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUgZWxlbWVudC5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBCdWlsZCB0aGUgbWFpbiBkaXYuXG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gbWFpbkRpdjtcbiAgICB9XG59XG5fYSA9IFRlYW1NZW1iZXJDYXJkO1xuLyoqIFRoZSBjbGFzcyBuYW1lIHByZWZpeCB0byBkaWZmZXJlbnRpYXRlIHRoZSBlbGVtZW50cyBmcm9tIG90aGVyIGVsZW1lbnRzLiAqL1xuVGVhbU1lbWJlckNhcmQuQ0xBU1NfUFJFRklYID0gXCJ0ZWFtTWVtYmVyQ2FyZFwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdiBvZiB0aGUgY2FyZC4gKi9cblRlYW1NZW1iZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1NYWluRGl2YDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBlbGVtZW50LiAqL1xuVGVhbU1lbWJlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1OYW1lYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaW1hZ2UgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfUltYWdlYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZGVzY3JpcHRpb24gZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfURlc2NyaXB0aW9uYDtcbmV4cG9ydHMuVGVhbU1lbWJlckNhcmQgPSBUZWFtTWVtYmVyQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaHRtbFRvb2xzXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvaHRtbFRvb2xzXCIpO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkXzEgPSByZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkXCIpO1xuLyoqIENyZWF0ZXMgYSBzdXBwb3J0ZXIgY2FyZC5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdXBwb3J0ZXJDYXJkIGV4dGVuZHMgaW5mb3JtYXRpb25DYXJkXzEuSW5mb3JtYXRpb25DYXJkIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdXBwb3J0ZXIuXG4gICAgICogQHBhcmFtIGltYWdlTGluayBUaGUgcGF0aCBvciBsaW5rIHRvIHRoZSBzdXBwb3J0ZXIncyBpbWFnZS5cbiAgICAgKiBAcGFyYW0gZG9uYXRpb25BbW91bnRVU0QgVGhlIGRvbmF0aW9uIGFtb3VudCBvZiB0aGUgc3VwcG9ydGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaywgZG9uYXRpb25BbW91bnRVU0QpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaW1hZ2VMaW5rKTtcbiAgICAgICAgdGhpcy5kb25hdGlvbkFtb3VudFVTRCA9IGRvbmF0aW9uQW1vdW50VVNEO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyBhIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSBlbnRpcmUgY2FyZC5cbiAgICAgKlxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgbmFtZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBpbWFnZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBodG1sVG9vbHNfMS5IVE1MVG9vbHMuYnVpbGRJbWFnZUVsZW1lbnQodGhpcy5pbWFnZUxpbmssIFwiaW1hZ2VcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgaHRtbCBtYWluIGRpdiBlbGVtZW50LlxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1haW4gZGl2LlxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn1cbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYuICovXG5TdXBwb3J0ZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZE1haW5EaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBlbGVtZW50LiAqL1xuU3VwcG9ydGVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJDYXJkTmFtZVwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBpbWFnZSBlbGVtZW50LiAqL1xuU3VwcG9ydGVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZEltYWdlXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJDYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogSG9sZHMgc3VwcG9ydGVyIGNhcmRzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlcnNHcm91cCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VjdGlvbi5cbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBzZWN0aW9uLlxuICAgICAqIEBwYXJhbSBwYXJlbnREaXYgVGhlIGRpdiB0byBhcHBlbmQgdGhpcyBzZWN0aW9uIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwYXJlbnREaXYpIHtcbiAgICAgICAgLy8gSWYgdGhlIG5hbWUgaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5hbWUgY2Fubm90IGJlIGJsYW5rLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgZGVzY3JpcHRpb24gaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBlbHNlIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuay5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucGFyZW50RGl2ID0gcGFyZW50RGl2O1xuICAgICAgICA7XG4gICAgfVxuICAgIC8qKiBBZGRzIGEgc3VwcG9ydGVyIGNhcmQgdG8gdGhlIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJkXG4gICAgICovXG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICAvKiogQnVpbGRzIHRoZSBzZWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lLlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uLlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkaXYgdGhhdCBob2xkcyBzdXBwb3J0ZXIgY2FyZHMuXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlckNhcmRIb2xkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoYCR7U3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUV9LSR7dGhpcy5uYW1lfWApO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHN1cHBvcnRlcnMgY2FyZHMuXG4gICAgICAgIC8vIEFkZCBlYWNoIGNhcmQgdG8gdGhlIGdyb3VwRGl2LlxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYXJkcykge1xuICAgICAgICAgICAgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhcmRzW2ldLmJ1aWxkKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBtYWluRGl2LlxuICAgICAgICBjb25zdCBncm91cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdyb3VwRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoc3VwcG9ydGVyQ2FyZEhvbGRlckRpdik7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZ3JvdXBEaXYgdG8gdGhlIHBhcmVudCBkaXYuXG4gICAgICAgIHRoaXMucGFyZW50RGl2LmFwcGVuZENoaWxkKGdyb3VwRGl2KTtcbiAgICB9XG59XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwTWFpbkRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBkaXYgdGhhdCBob2xkcyB0aGUgc3VwcG9ydGVyIGNhcmRzLiAqL1xuU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cENhcmRIb2xkZXJEaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIG5hbWUgaHRtbCBlbGVtZW50LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cE5hbWVcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIGRlc2NyaXB0aW9uIGh0bWwgZWxlbWVudC5TICovXG5TdXBwb3J0ZXJzR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cERlc2NyaXB0aW9uXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJzR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKiBUaGUgbWFpbiBmaWxlIGZvciB0aGUgaW5kZXggcGFnZS5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdGVhbU1lbWJlckNhcmRfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXMvb3VyX3RlYW1fc2VjdGlvbi90ZWFtTWVtYmVyQ2FyZFwiKTtcbmNvbnN0IHN1cHBvcnRlckNhcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJDYXJkXCIpKTtcbmNvbnN0IHN1cHBvcnRlcnNHcm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlcnNHcm91cFwiKSk7XG4vKiogQnVpbGRzIHRoZSBpbmRleCBwYWdlJ3MgJ291ciB0ZWFtJyBzZWN0aW9uLlxuICpcbiAqL1xuZnVuY3Rpb24gYnVpbGRPdXJUZWFtU2VjdGlvbigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBHZXQgdGhlIGNhcmQgaG9sZGVyLlxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2TmFtZSA9IFwidGVhbU1lbWJlckNhcmRzSG9sZGVyXCI7XG4gICAgICAgIGNvbnN0IGNhcmRIb2xkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSG9sZGVyRGl2TmFtZSk7XG4gICAgICAgIC8vIEFkZCB0aGUgY2FyZHMuXG4gICAgICAgIGNvbnN0IGNhcmRzID0gW1xuICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJZaXBtYW5cIiwgXCJ0ZXN0XCIsIFwiUHJvamVjdCBMZWFkXCIpLFxuICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJQYWdhblwiLCBcInRlc3RcIiwgXCJ1bnN1cmVcIiksXG4gICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIkZsdWZmeVwiLCBcInRlc3RcIiwgXCJBcm1hIElJSSBEZXZlbG9wZXJcIiksXG4gICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlRhbGx5XCIsIFwidGVzdFwiLCBcIkFJIERldmVsb3BlclxcbkFybWEgSUlJIERldmVsb3BlclwiKSxcbiAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiWWlwbWFuXCIsIFwidGVzdFwiLCBcIlByb2plY3QgTGVhZFwiKSxcbiAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiQWx0ZXJcIiwgXCJ0ZXN0XCIsIFwiV2ViIERldmVsb3BlclxcbkRpc2NvcmQgQm90IERldmVsb3BlclwiKSxcbiAgICAgICAgXTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBjYXJkcyB0byB0aGUgY2FyZCBob2xkZXIgZGl2LlxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIGNhcmRzKSB7XG4gICAgICAgICAgICBjYXJkSG9sZGVyRGl2LmFwcGVuZENoaWxkKGNhcmRzW2luZGV4XS5idWlsZCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqIEJ1aWxkcyB0aGUgaW5kZXggcGFnZXMncyBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gKlxuICovXG5mdW5jdGlvbiBidWlsZFN1cHBvcnRlcnNTZWN0aW9uKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgc3VwcG9ydGVycyBzZWN0aW9uXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlcnNTZWN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXBwb3J0ZXJzU2VjdGlvblwiKTtcbiAgICAgICAgaWYgKHN1cHBvcnRlcnNTZWN0aW9uRGl2ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdXBwb3J0ZXJzIHNlY3Rpb24gaXMgbnVsbC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBncm91cHMuXG4gICAgICAgIGNvbnN0IGdyb3VwMSA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiUGxhdGludW1cIiwgXCJOb3RoaW5nIHdvdWxkIGJlIHBvc3NpYmxlIHdpdGhvdXQgb3VyIGdyZWF0ZXN0IGRvbmF0b3JzLlwiLCBzdXBwb3J0ZXJzU2VjdGlvbkRpdik7XG4gICAgICAgIGdyb3VwMS5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiWWlwbWFuXCIsIFwiaW1hZ2VcIiwgMTAwMDApKTtcbiAgICAgICAgY29uc3QgZ3JvdXAyID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJCcm9uemVcIiwgXCJCcm9uemUgc3VwcG9ydGVycy5cIiwgc3VwcG9ydGVyc1NlY3Rpb25EaXYpO1xuICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICBjb25zdCBncm91cDMgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIkdvbGRcIiwgXCJ0ZXN0XCIsIHN1cHBvcnRlcnNTZWN0aW9uRGl2KTtcbiAgICAgICAgZ3JvdXAzLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJUZXN0XCIsIFwiXCIsIDIpKTtcbiAgICAgICAgY29uc3QgZ3JvdXA0ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJTaWx2ZXJcIiwgXCJ0ZXN0XCIsIHN1cHBvcnRlcnNTZWN0aW9uRGl2KTtcbiAgICAgICAgY29uc3QgZ3JvdXA1ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJCYXNpY1wiLCBcInRlc3RcIiwgc3VwcG9ydGVyc1NlY3Rpb25EaXYpO1xuICAgICAgICBjb25zdCBncm91cDYgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIk1pY3JvXCIsIFwidGVzdFwiLCBzdXBwb3J0ZXJzU2VjdGlvbkRpdik7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBncm91cHMuXG4gICAgICAgIGdyb3VwMS5idWlsZCgpO1xuICAgICAgICBncm91cDIuYnVpbGQoKTtcbiAgICAgICAgZ3JvdXAzLmJ1aWxkKCk7XG4gICAgICAgIGdyb3VwNC5idWlsZCgpO1xuICAgICAgICBncm91cDUuYnVpbGQoKTtcbiAgICAgICAgZ3JvdXA2LmJ1aWxkKCk7XG4gICAgfSk7XG59XG4vLyBBc3luY2hyb25vdXNseSBidWlsZCB0aGUgd2VicGFnZS5cblByb21pc2UuYWxsKFtcbiAgICAvLyBCdWlsZCB0aGUgJ291ciB0ZWFtJyBzZWN0aW9uLlxuICAgIGJ1aWxkT3VyVGVhbVNlY3Rpb24oKSxcbiAgICAvLyBCdWlsZCB0aGUgc3VwcG9ydGVycyBzZWN0aW9uLlxuICAgIGJ1aWxkU3VwcG9ydGVyc1NlY3Rpb24oKVxuXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSFRNTFRvb2xzID0gdm9pZCAwO1xuLyoqIENvbnRhaW5zIHVzZWZ1bCBIVE1MIHRvb2xzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIEhUTUxUb29scyB7XG4gICAgLyoqIFJldHVybnMgYSBuZXcgZ3RtbCBpbWcgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzcmMgVGhlIHNvdXJjZSBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHBhcmFtIGFsdCBUaGUgYWx0IG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZEltYWdlRWxlbWVudChzcmMsIGFsdCkge1xuICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3JjO1xuICAgICAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuICAgICAgICByZXR1cm4gaW1hZ2VFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuSFRNTFRvb2xzID0gSFRNTFRvb2xzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQ29udGFpbnMgdXNlZnVsIHN0cmluZyB0b29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdHJpbmdUb29scyB7XG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIE9OTFkgb25lIG9yIG1vcmUgc3BhY2VzLlxuICAgICAqIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPbmx5U3BhY2VzKHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgvXiArJC8pLnRlc3Qoc3RyaW5nKTtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIG9mIGxlbmd0aCAwIG9yIGNvbnRhaW5zIE9OTFkgb25lIG9yIG1vcmUgc3BhY2VzLlxuICAgICAqIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCbGFuayhzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIChzdHJpbmcubGVuZ3RoID09PSAwIHx8IHRoaXMuaXNPbmx5U3BhY2VzKHN0cmluZykpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmluZ1Rvb2xzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9