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

/***/ "./public/js/index/classes/informationCardGroup.ts":
/*!*********************************************************!*\
  !*** ./public/js/index/classes/informationCardGroup.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const stringTools_1 = __importDefault(__webpack_require__(/*! ../tools/stringTools */ "./public/js/index/tools/stringTools.ts"));
/** Holds multiple information cards.
 *
 * @author Alter
 */
class InformationCardGroup {
    /**
     *
     * @param name The name of the card group.
     * @param description The description of card the group.
     */
    constructor(name, description) {
        // If the name is blank, throw an error.
        // If the description is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error(name);
        }
        else if (stringTools_1.default.isBlank(description)) {
            throw new Error(description);
        }
        this.name = name;
        this.description = description;
        this.cards = [];
    }
}
exports["default"] = InformationCardGroup;


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
const informationCardGroup_1 = __importDefault(__webpack_require__(/*! ../informationCardGroup */ "./public/js/index/classes/informationCardGroup.ts"));
/** Holds supporter cards.
 *
 * @author Alter
 *
 */
class SupportersGroup extends informationCardGroup_1.default {
    /**
     *
     * @param name The name of the section.
     * @param description The description of the section.
     * @param parentDiv The div to append this section to.
     */
    constructor(name, description) {
        super(name, description);
        this.cards = [];
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
        return groupDiv;
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

/***/ "./public/js/index/execution/ourTeamSectionBuilder.ts":
/*!************************************************************!*\
  !*** ./public/js/index/execution/ourTeamSectionBuilder.ts ***!
  \************************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const teamMemberCard_1 = __webpack_require__(/*! ../classes/our_team_section/teamMemberCard */ "./public/js/index/classes/our_team_section/teamMemberCard.ts");
/** Builds the 'our team' section.
 *
 * @author Alter
 *
 */
class OurTeamSectionBuilder {
    /** Builds the 'our team' section.
     *
     */
    static build() {
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
}
exports["default"] = OurTeamSectionBuilder;


/***/ }),

/***/ "./public/js/index/execution/supportersSectionBuilder.ts":
/*!***************************************************************!*\
  !*** ./public/js/index/execution/supportersSectionBuilder.ts ***!
  \***************************************************************/
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
const supporterCard_1 = __importDefault(__webpack_require__(/*! ../classes/supporters_section/supporterCard */ "./public/js/index/classes/supporters_section/supporterCard.ts"));
const supportersGroup_1 = __importDefault(__webpack_require__(/*! ../classes/supporters_section/supportersGroup */ "./public/js/index/classes/supporters_section/supportersGroup.ts"));
/** Builds the index pages's supporters section.
 *
 */
class SupportersSectionBuilder {
    /** Builds the index pages's supporters section.
     *
     */
    static build() {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the supporters section
            const supportersSectionDiv = document.getElementById("supportersSection");
            if (supportersSectionDiv === null) {
                throw new Error("supporters section is null.");
            }
            // Create the groups.
            const group1 = new supportersGroup_1.default("Platinum", "Nothing would be possible without our greatest donators.");
            group1.add(new supporterCard_1.default("Yipman", "image", 10000));
            const group2 = new supportersGroup_1.default("Bronze", "Bronze supporters.");
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            const group3 = new supportersGroup_1.default("Gold", "test");
            group3.add(new supporterCard_1.default("Test", "", 2));
            const group4 = new supportersGroup_1.default("Silver", "test");
            const group5 = new supportersGroup_1.default("Basic", "test");
            const group6 = new supportersGroup_1.default("Micro", "test");
            // Build the groups.
            const groupsToBeBuilt = [
                group1.build(),
                group2.build(),
                group3.build(),
                group4.build(),
                group5.build(),
                group6.build(),
            ];
            // Append the groups to the parent div.
            groupsToBeBuilt.forEach(group => supportersSectionDiv.appendChild(group));
        });
    }
}
exports["default"] = SupportersSectionBuilder;


/***/ }),

/***/ "./public/js/index/index.ts":
/*!**********************************!*\
  !*** ./public/js/index/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** The main file for the index page.
 *
 * @author Alter
 */
const ourTeamSectionBuilder_1 = __importDefault(__webpack_require__(/*! ./execution/ourTeamSectionBuilder */ "./public/js/index/execution/ourTeamSectionBuilder.ts"));
const supportersSectionBuilder_1 = __importDefault(__webpack_require__(/*! ./execution/supportersSectionBuilder */ "./public/js/index/execution/supportersSectionBuilder.ts"));
// Asynchronously build the webpage.
Promise.all([
    // Build the 'our team' section.
    ourTeamSectionBuilder_1.default.build(),
    // Build the supporters section.
    supportersSectionBuilder_1.default.build()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUM7QUFDM0YsbURBQW1ELG1CQUFPLENBQUMscUdBQXNDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDdEJKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7VUMzQmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvaW5mb3JtYXRpb25DYXJkLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvaW5mb3JtYXRpb25DYXJkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9vdXJfdGVhbV9zZWN0aW9uL3RlYW1NZW1iZXJDYXJkLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlckNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9zdXBwb3J0ZXJzX3NlY3Rpb24vc3VwcG9ydGVyc0dyb3VwLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2V4ZWN1dGlvbi9vdXJUZWFtU2VjdGlvbkJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvZXhlY3V0aW9uL3N1cHBvcnRlcnNTZWN0aW9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9pbmRleC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC90b29scy9odG1sVG9vbHMudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvdG9vbHMvc3RyaW5nVG9vbHMudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmZvcm1hdGlvbkNhcmQgPSB2b2lkIDA7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogRm9yIGluZm9ybWF0aW9uIGNhcmQgc3RhbmRhcmRpemF0aW9uLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIEluZm9ybWF0aW9uQ2FyZCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvbiB0aGUgY2FyZC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBpbWFnZSBvbiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZUxpbmspIHtcbiAgICAgICAgLyoqIFRoZSBsaW5rL3BhdGggdG8gdGhlIGNhcmQncyBpbWFnZS4gQ2FuIHNlcnZlIGFzIGEgcHJvZmlsZSBwaWMuKi9cbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBcIi4vZGVmYXVsdF9wZnAucG5nXCI7IC8vIERlZmF1bHQuXG4gICAgICAgIC8vIElmIHRoZSBuYW1lIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG5hbWUgY2Fubm90IGJlIGJsYW5rLmApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW1hZ2VMaW5rID0gaW1hZ2VMaW5rO1xuICAgIH1cbn1cbmV4cG9ydHMuSW5mb3JtYXRpb25DYXJkID0gSW5mb3JtYXRpb25DYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogSG9sZHMgbXVsdGlwbGUgaW5mb3JtYXRpb24gY2FyZHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICovXG5jbGFzcyBJbmZvcm1hdGlvbkNhcmRHcm91cCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FyZCBncm91cC5cbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIGNhcmQgdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIElmIHRoZSBuYW1lIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgLy8gSWYgdGhlIGRlc2NyaXB0aW9uIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEluZm9ybWF0aW9uQ2FyZEdyb3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRlYW1NZW1iZXJDYXJkID0gdm9pZCAwO1xuY29uc3QgaHRtbFRvb2xzXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvaHRtbFRvb2xzXCIpO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkXzEgPSByZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkXCIpO1xuLyoqIEhvbGRzIGFuZCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCBhIHRlYW0gbWVtYmVyLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgVGVhbU1lbWJlckNhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5JbmZvcm1hdGlvbkNhcmQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb24gdGhlIHRlYW0gbWVtYmVyIGNhcmQuXG4gICAgICogQHBhcmFtIGltYWdlTGluayBUaGUgaW1hZ2Ugb24gdGhlIHRlYW0gbWVtYmVyIGNhcmQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2VMaW5rLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBzdXBlcihuYW1lLCBpbWFnZUxpbmspO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIC8qKiBSZXR1cm5zIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoYXQgaG9sZHMgdGhlIGNhcmQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgaW1hZ2UgZWxlbWVudC5cbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gaHRtbFRvb2xzXzEuSFRNTFRvb2xzLmJ1aWxkSW1hZ2VFbGVtZW50KHRoaXMuaW1hZ2VMaW5rLCBcImltYWdlXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkZXNjcmlwdGlvbiBlbGVtZW50LlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG1haW4gZGl2LlxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIG1haW5EaXY7XG4gICAgfVxufVxuX2EgPSBUZWFtTWVtYmVyQ2FyZDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBwcmVmaXggdG8gZGlmZmVyZW50aWF0ZSB0aGUgZWxlbWVudHMgZnJvbSBvdGhlciBlbGVtZW50cy4gKi9cblRlYW1NZW1iZXJDYXJkLkNMQVNTX1BSRUZJWCA9IFwidGVhbU1lbWJlckNhcmRcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYgb2YgdGhlIGNhcmQuICovXG5UZWFtTWVtYmVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TWFpbkRpdmA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG5hbWUgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TmFtZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGltYWdlIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1JbWFnZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1EZXNjcmlwdGlvbmA7XG5leHBvcnRzLlRlYW1NZW1iZXJDYXJkID0gVGVhbU1lbWJlckNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGh0bWxUb29sc18xID0gcmVxdWlyZShcIi4uLy4uL3Rvb2xzL2h0bWxUb29sc1wiKTtcbmNvbnN0IGluZm9ybWF0aW9uQ2FyZF8xID0gcmVxdWlyZShcIi4uL2luZm9ybWF0aW9uQ2FyZFwiKTtcbi8qKiBDcmVhdGVzIGEgc3VwcG9ydGVyIGNhcmQuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgU3VwcG9ydGVyQ2FyZCBleHRlbmRzIGluZm9ybWF0aW9uQ2FyZF8xLkluZm9ybWF0aW9uQ2FyZCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3VwcG9ydGVyLlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIHBhdGggb3IgbGluayB0byB0aGUgc3VwcG9ydGVyJ3MgaW1hZ2UuXG4gICAgICogQHBhcmFtIGRvbmF0aW9uQW1vdW50VVNEIFRoZSBkb25hdGlvbiBhbW91bnQgb2YgdGhlIHN1cHBvcnRlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZUxpbmssIGRvbmF0aW9uQW1vdW50VVNEKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGltYWdlTGluayk7XG4gICAgICAgIHRoaXMuZG9uYXRpb25BbW91bnRVU0QgPSBkb25hdGlvbkFtb3VudFVTRDtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgYSBkaXYgdGhhdCBjb250YWlucyB0aGUgZW50aXJlIGNhcmQuXG4gICAgICpcbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUgZWxlbWVudC5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgaW1hZ2UgZWxlbWVudC5cbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gaHRtbFRvb2xzXzEuSFRNTFRvb2xzLmJ1aWxkSW1hZ2VFbGVtZW50KHRoaXMuaW1hZ2VMaW5rLCBcImltYWdlXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGh0bWwgbWFpbiBkaXYgZWxlbWVudC5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtYWluIGRpdi5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2LiAqL1xuU3VwcG9ydGVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmRNYWluRGl2XCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG5hbWUgZWxlbWVudC4gKi9cblN1cHBvcnRlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZE5hbWVcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaW1hZ2UgZWxlbWVudC4gKi9cblN1cHBvcnRlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmRJbWFnZVwiO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3VwcG9ydGVyQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkR3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkR3JvdXBcIikpO1xuLyoqIEhvbGRzIHN1cHBvcnRlciBjYXJkcy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdXBwb3J0ZXJzR3JvdXAgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRHcm91cF8xLmRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlY3Rpb24uXG4gICAgICogQHBhcmFtIGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VjdGlvbi5cbiAgICAgKiBAcGFyYW0gcGFyZW50RGl2IFRoZSBkaXYgdG8gYXBwZW5kIHRoaXMgc2VjdGlvbiB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBzdXBlcihuYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICB9XG4gICAgLyoqIEFkZHMgYSBzdXBwb3J0ZXIgY2FyZCB0byB0aGUgc3VwcG9ydGVycyBzZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcmRcbiAgICAgKi9cbiAgICBhZGQoY2FyZCkge1xuICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIC8qKiBCdWlsZHMgdGhlIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgZGVzY3JpcHRpb24uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRpdiB0aGF0IGhvbGRzIHN1cHBvcnRlciBjYXJkcy5cbiAgICAgICAgY29uc3Qgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN1cHBvcnRlckNhcmRIb2xkZXJEaXYuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuU1VQUE9SVEVSX0NBUkRfSE9MREVSX0NMQVNTTkFNRSk7XG4gICAgICAgIHN1cHBvcnRlckNhcmRIb2xkZXJEaXYuY2xhc3NMaXN0LmFkZChgJHtTdXBwb3J0ZXJzR3JvdXAuU1VQUE9SVEVSX0NBUkRfSE9MREVSX0NMQVNTTkFNRX0tJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgc3VwcG9ydGVycyBjYXJkcy5cbiAgICAgICAgLy8gQWRkIGVhY2ggY2FyZCB0byB0aGUgZ3JvdXBEaXYuXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhcmRzKSB7XG4gICAgICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmFwcGVuZENoaWxkKHRoaXMuY2FyZHNbaV0uYnVpbGQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQnVpbGQgdGhlIG1haW5EaXYuXG4gICAgICAgIGNvbnN0IGdyb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZ3JvdXBEaXYuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgICAgICBncm91cERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICBncm91cERpdi5hcHBlbmRDaGlsZChzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwRGl2O1xuICAgIH1cbn1cbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYuICovXG5TdXBwb3J0ZXJzR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBNYWluRGl2XCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRpdiB0aGF0IGhvbGRzIHRoZSBzdXBwb3J0ZXIgY2FyZHMuICovXG5TdXBwb3J0ZXJzR3JvdXAuU1VQUE9SVEVSX0NBUkRfSE9MREVSX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwQ2FyZEhvbGRlckRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzZWN0aW9uJ3MgbmFtZSBodG1sIGVsZW1lbnQuICovXG5TdXBwb3J0ZXJzR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwTmFtZVwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzZWN0aW9uJ3MgZGVzY3JpcHRpb24gaHRtbCBlbGVtZW50LlMgKi9cblN1cHBvcnRlcnNHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwRGVzY3JpcHRpb25cIjtcbmV4cG9ydHMuZGVmYXVsdCA9IFN1cHBvcnRlcnNHcm91cDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0ZWFtTWVtYmVyQ2FyZF8xID0gcmVxdWlyZShcIi4uL2NsYXNzZXMvb3VyX3RlYW1fc2VjdGlvbi90ZWFtTWVtYmVyQ2FyZFwiKTtcbi8qKiBCdWlsZHMgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBPdXJUZWFtU2VjdGlvbkJ1aWxkZXIge1xuICAgIC8qKiBCdWlsZHMgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY2FyZCBob2xkZXIuXG4gICAgICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2TmFtZSA9IFwidGVhbU1lbWJlckNhcmRzSG9sZGVyXCI7XG4gICAgICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZEhvbGRlckRpdk5hbWUpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBjYXJkcy5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRzID0gW1xuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiWWlwbWFuXCIsIFwidGVzdFwiLCBcIlByb2plY3QgTGVhZFwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlBhZ2FuXCIsIFwidGVzdFwiLCBcInVuc3VyZVwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIkZsdWZmeVwiLCBcInRlc3RcIiwgXCJBcm1hIElJSSBEZXZlbG9wZXJcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJUYWxseVwiLCBcInRlc3RcIiwgXCJBSSBEZXZlbG9wZXJcXG5Bcm1hIElJSSBEZXZlbG9wZXJcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJZaXBtYW5cIiwgXCJ0ZXN0XCIsIFwiUHJvamVjdCBMZWFkXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiQWx0ZXJcIiwgXCJ0ZXN0XCIsIFwiV2ViIERldmVsb3BlclxcbkRpc2NvcmQgQm90IERldmVsb3BlclwiKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGNhcmRzIHRvIHRoZSBjYXJkIGhvbGRlciBkaXYuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIGNhcmRzKSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckRpdi5hcHBlbmRDaGlsZChjYXJkc1tpbmRleF0uYnVpbGQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE91clRlYW1TZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdXBwb3J0ZXJDYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlckNhcmRcIikpO1xuY29uc3Qgc3VwcG9ydGVyc0dyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlcnNHcm91cFwiKSk7XG4vKiogQnVpbGRzIHRoZSBpbmRleCBwYWdlcydzIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlciB7XG4gICAgLyoqIEJ1aWxkcyB0aGUgaW5kZXggcGFnZXMncyBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHN1cHBvcnRlcnMgc2VjdGlvblxuICAgICAgICAgICAgY29uc3Qgc3VwcG9ydGVyc1NlY3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cHBvcnRlcnNTZWN0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlcnNTZWN0aW9uRGl2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3VwcG9ydGVycyBzZWN0aW9uIGlzIG51bGwuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBncm91cHMuXG4gICAgICAgICAgICBjb25zdCBncm91cDEgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIlBsYXRpbnVtXCIsIFwiTm90aGluZyB3b3VsZCBiZSBwb3NzaWJsZSB3aXRob3V0IG91ciBncmVhdGVzdCBkb25hdG9ycy5cIik7XG4gICAgICAgICAgICBncm91cDEuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIllpcG1hblwiLCBcImltYWdlXCIsIDEwMDAwKSk7XG4gICAgICAgICAgICBjb25zdCBncm91cDIgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIkJyb256ZVwiLCBcIkJyb256ZSBzdXBwb3J0ZXJzLlwiKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwMyA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiR29sZFwiLCBcInRlc3RcIik7XG4gICAgICAgICAgICBncm91cDMuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIlRlc3RcIiwgXCJcIiwgMikpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXA0ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJTaWx2ZXJcIiwgXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXA1ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJCYXNpY1wiLCBcInRlc3RcIik7XG4gICAgICAgICAgICBjb25zdCBncm91cDYgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIk1pY3JvXCIsIFwidGVzdFwiKTtcbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBncm91cHMuXG4gICAgICAgICAgICBjb25zdCBncm91cHNUb0JlQnVpbHQgPSBbXG4gICAgICAgICAgICAgICAgZ3JvdXAxLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXAyLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXAzLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXA0LmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXA1LmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXA2LmJ1aWxkKCksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBncm91cHMgdG8gdGhlIHBhcmVudCBkaXYuXG4gICAgICAgICAgICBncm91cHNUb0JlQnVpbHQuZm9yRWFjaChncm91cCA9PiBzdXBwb3J0ZXJzU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChncm91cCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBUaGUgbWFpbiBmaWxlIGZvciB0aGUgaW5kZXggcGFnZS5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNvbnN0IG91clRlYW1TZWN0aW9uQnVpbGRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2V4ZWN1dGlvbi9vdXJUZWFtU2VjdGlvbkJ1aWxkZXJcIikpO1xuY29uc3Qgc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZXhlY3V0aW9uL3N1cHBvcnRlcnNTZWN0aW9uQnVpbGRlclwiKSk7XG4vLyBBc3luY2hyb25vdXNseSBidWlsZCB0aGUgd2VicGFnZS5cblByb21pc2UuYWxsKFtcbiAgICAvLyBCdWlsZCB0aGUgJ291ciB0ZWFtJyBzZWN0aW9uLlxuICAgIG91clRlYW1TZWN0aW9uQnVpbGRlcl8xLmRlZmF1bHQuYnVpbGQoKSxcbiAgICAvLyBCdWlsZCB0aGUgc3VwcG9ydGVycyBzZWN0aW9uLlxuICAgIHN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlcl8xLmRlZmF1bHQuYnVpbGQoKVxuXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSFRNTFRvb2xzID0gdm9pZCAwO1xuLyoqIENvbnRhaW5zIHVzZWZ1bCBIVE1MIHRvb2xzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIEhUTUxUb29scyB7XG4gICAgLyoqIFJldHVybnMgYSBuZXcgZ3RtbCBpbWcgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzcmMgVGhlIHNvdXJjZSBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHBhcmFtIGFsdCBUaGUgYWx0IG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZEltYWdlRWxlbWVudChzcmMsIGFsdCkge1xuICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3JjO1xuICAgICAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuICAgICAgICByZXR1cm4gaW1hZ2VFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuSFRNTFRvb2xzID0gSFRNTFRvb2xzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQ29udGFpbnMgdXNlZnVsIHN0cmluZyB0b29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdHJpbmdUb29scyB7XG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIE9OTFkgb25lIG9yIG1vcmUgc3BhY2VzLlxuICAgICAqIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPbmx5U3BhY2VzKHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgvXiArJC8pLnRlc3Qoc3RyaW5nKTtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIG9mIGxlbmd0aCAwIG9yIGNvbnRhaW5zIE9OTFkgb25lIG9yIG1vcmUgc3BhY2VzLlxuICAgICAqIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCbGFuayhzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIChzdHJpbmcubGVuZ3RoID09PSAwIHx8IHRoaXMuaXNPbmx5U3BhY2VzKHN0cmluZykpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmluZ1Rvb2xzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9