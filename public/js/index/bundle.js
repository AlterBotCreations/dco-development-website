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
        this.imageLink = "./images/default_pfp.png"; // Default.
        // If the name is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error(`name cannot be blank.`);
        }
        this.name = name;
        // If the image link is not blank, replace it.
        if (!stringTools_1.default.isBlank(imageLink)) {
            this.imageLink = imageLink;
        }
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

/***/ "./public/js/index/classes/our_team_section/teamMemberCardGroup.ts":
/*!*************************************************************************!*\
  !*** ./public/js/index/classes/our_team_section/teamMemberCardGroup.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const informationCardGroup_1 = __importDefault(__webpack_require__(/*! ../informationCardGroup */ "./public/js/index/classes/informationCardGroup.ts"));
/** Holds multiple team member cards.
 *
 * @author Alter
 */
class TeamMemberCardGroup extends informationCardGroup_1.default {
    /**
     *
     * @param name The name of the team member card group.
     * @param description The description of the team member card group.
     */
    constructor(name, description) {
        super(name, description);
    }
    build() {
        // Build the name element.
        const nameElement = document.createElement("h1");
        nameElement.classList.add(TeamMemberCardGroup.NAME_ELEMENT_CLASSNAME);
        nameElement.innerText = this.name;
        // Build the description element.
        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add(TeamMemberCardGroup.DESCRIPTION_ELEMENT_CLASSNAME);
        descriptionElement.innerText = this.description;
        // Build the card holder div.
        const cardHolderDivElement = document.createElement("div");
        cardHolderDivElement.classList.add(TeamMemberCardGroup.CARD_HOLDER_DIV_CLASSNAME);
        this.cards.forEach(card => cardHolderDivElement.appendChild(card.build()));
        // Build the main div.
        const mainDiv = document.createElement("div");
        mainDiv.classList.add(TeamMemberCardGroup.MAIN_DIV_CLASSNAME);
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(descriptionElement);
        mainDiv.appendChild(cardHolderDivElement);
        return mainDiv;
    }
}
_a = TeamMemberCardGroup;
/** The prefix of the html element class names in this class. */
TeamMemberCardGroup.CLASS_PREFIX = "teamMemberCardGroup";
/** The class name of the main div html element. */
TeamMemberCardGroup.MAIN_DIV_CLASSNAME = `${_a.CLASS_PREFIX}MainDiv`;
/** The class name of the name html element. */
TeamMemberCardGroup.NAME_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Name`;
/** The class name of the description html element. */
TeamMemberCardGroup.DESCRIPTION_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Description`;
/** The class name of the div that holds the information cards. */
TeamMemberCardGroup.CARD_HOLDER_DIV_CLASSNAME = `${_a.CLASS_PREFIX}CardHolderDiv`;
exports["default"] = TeamMemberCardGroup;


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const teamMemberCard_1 = __webpack_require__(/*! ../classes/our_team_section/teamMemberCard */ "./public/js/index/classes/our_team_section/teamMemberCard.ts");
const teamMemberCardGroup_1 = __importDefault(__webpack_require__(/*! ../classes/our_team_section/teamMemberCardGroup */ "./public/js/index/classes/our_team_section/teamMemberCardGroup.ts"));
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
            const cardHolderDivName = "ourTeamSection";
            const cardHolderDiv = document.getElementById(cardHolderDivName);
            // Create the developer team group.
            const devTeamGroup = new teamMemberCardGroup_1.default("Development Team", "People that directly interact with the programming of DCO projects.");
            // Add the card to the developer group.
            const devTeamCards = [
                new teamMemberCard_1.TeamMemberCard("Yipman", "", "DCO Project Lead"),
                new teamMemberCard_1.TeamMemberCard("Tally", "", "Programmer: DCO GPT & PlatoonFsm."),
                new teamMemberCard_1.TeamMemberCard("Fluffy", "", "Programmer: DCO Comsys"),
                new teamMemberCard_1.TeamMemberCard("Alter", "", "Programmer: DCO ECO & Webpage, Web Security"),
            ];
            devTeamGroup.cards = devTeamCards;
            // Create the contributors group.
            const contributorsGroup = new teamMemberCardGroup_1.default("Contributors", "Testers, Advisors, Designers and More.");
            // Add the cards to the contributors group.
            const contributorsTeamCards = [
                new teamMemberCard_1.TeamMemberCard("Papareap", "", "Headless Client, Debug and Code Advisor"),
                new teamMemberCard_1.TeamMemberCard("MyPalDeebs", "", "Idea And Design"),
                new teamMemberCard_1.TeamMemberCard("Woody", "", "Military Advisor"),
                new teamMemberCard_1.TeamMemberCard("Pagan", "", "Promo, Feedback, Testing"),
                new teamMemberCard_1.TeamMemberCard("Karmakut", "", "Large Scale Testing And Promo"),
                new teamMemberCard_1.TeamMemberCard("Samin", "", "GPT Advice"),
                new teamMemberCard_1.TeamMemberCard("Bruno & Mcsellerie", "", "Long Term Testing & Moral Support"),
                new teamMemberCard_1.TeamMemberCard("Nursifer", "", "Nutritional Specialist"),
            ];
            contributorsGroup.cards = contributorsTeamCards;
            console.log(contributorsGroup.build());
            // Add the built groups to the div.
            cardHolderDiv.appendChild(devTeamGroup.build());
            cardHolderDiv.appendChild(contributorsGroup.build());
        });
    }
}
exports["default"] = OurTeamSectionBuilder;


/***/ }),

/***/ "./public/js/index/execution/projectsSectionBuilder.ts":
/*!*************************************************************!*\
  !*** ./public/js/index/execution/projectsSectionBuilder.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {


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
/** Builds the projects section.
 *
 * @author Alter
 */
class ProjectsSectionBuilder {
    /** Builds the projects section.
     *
     * @author Alter
     */
    static build() {
        return __awaiter(this, void 0, void 0, function* () {
            // Build the projects section.
        });
    }
}
exports["default"] = ProjectsSectionBuilder;


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
            group1.add(new supporterCard_1.default("Yipman", "", 10000));
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
const projectsSectionBuilder_1 = __importDefault(__webpack_require__(/*! ./execution/projectsSectionBuilder */ "./public/js/index/execution/projectsSectionBuilder.ts"));
const supportersSectionBuilder_1 = __importDefault(__webpack_require__(/*! ./execution/supportersSectionBuilder */ "./public/js/index/execution/supportersSectionBuilder.ts"));
// Asynchronously build the webpage.
Promise.all([
    // Build the 'projects' section.
    projectsSectionBuilder_1.default.build(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7QUN0Qko7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7OztVQzNCZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9pbmZvcm1hdGlvbkNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9pbmZvcm1hdGlvbkNhcmRHcm91cC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL291cl90ZWFtX3NlY3Rpb24vdGVhbU1lbWJlckNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9vdXJfdGVhbV9zZWN0aW9uL3RlYW1NZW1iZXJDYXJkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9zdXBwb3J0ZXJzX3NlY3Rpb24vc3VwcG9ydGVyQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJzR3JvdXAudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvZXhlY3V0aW9uL291clRlYW1TZWN0aW9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9leGVjdXRpb24vcHJvamVjdHNTZWN0aW9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9leGVjdXRpb24vc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L3Rvb2xzL2h0bWxUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC90b29scy9zdHJpbmdUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluZm9ybWF0aW9uQ2FyZCA9IHZvaWQgMDtcbmNvbnN0IHN0cmluZ1Rvb2xzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2xzL3N0cmluZ1Rvb2xzXCIpKTtcbi8qKiBGb3IgaW5mb3JtYXRpb24gY2FyZCBzdGFuZGFyZGl6YXRpb24uXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgSW5mb3JtYXRpb25DYXJkIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9uIHRoZSBjYXJkLlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIGltYWdlIG9uIHRoZSBjYXJkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaykge1xuICAgICAgICAvKiogVGhlIGxpbmsvcGF0aCB0byB0aGUgY2FyZCdzIGltYWdlLiBDYW4gc2VydmUgYXMgYSBwcm9maWxlIHBpYy4qL1xuICAgICAgICB0aGlzLmltYWdlTGluayA9IFwiLi9pbWFnZXMvZGVmYXVsdF9wZnAucG5nXCI7IC8vIERlZmF1bHQuXG4gICAgICAgIC8vIElmIHRoZSBuYW1lIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG5hbWUgY2Fubm90IGJlIGJsYW5rLmApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vIElmIHRoZSBpbWFnZSBsaW5rIGlzIG5vdCBibGFuaywgcmVwbGFjZSBpdC5cbiAgICAgICAgaWYgKCFzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhpbWFnZUxpbmspKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlTGluayA9IGltYWdlTGluaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuSW5mb3JtYXRpb25DYXJkID0gSW5mb3JtYXRpb25DYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogSG9sZHMgbXVsdGlwbGUgaW5mb3JtYXRpb24gY2FyZHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICovXG5jbGFzcyBJbmZvcm1hdGlvbkNhcmRHcm91cCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FyZCBncm91cC5cbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIGNhcmQgdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIElmIHRoZSBuYW1lIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgLy8gSWYgdGhlIGRlc2NyaXB0aW9uIGlzIGJsYW5rLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEluZm9ybWF0aW9uQ2FyZEdyb3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRlYW1NZW1iZXJDYXJkID0gdm9pZCAwO1xuY29uc3QgaHRtbFRvb2xzXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvaHRtbFRvb2xzXCIpO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkXzEgPSByZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkXCIpO1xuLyoqIEhvbGRzIGFuZCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCBhIHRlYW0gbWVtYmVyLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgVGVhbU1lbWJlckNhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5JbmZvcm1hdGlvbkNhcmQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb24gdGhlIHRlYW0gbWVtYmVyIGNhcmQuXG4gICAgICogQHBhcmFtIGltYWdlTGluayBUaGUgaW1hZ2Ugb24gdGhlIHRlYW0gbWVtYmVyIGNhcmQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2VMaW5rLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBzdXBlcihuYW1lLCBpbWFnZUxpbmspO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIC8qKiBSZXR1cm5zIHRoZSBodG1sIGRpdiBlbGVtZW50IHRoYXQgaG9sZHMgdGhlIGNhcmQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgaW1hZ2UgZWxlbWVudC5cbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gaHRtbFRvb2xzXzEuSFRNTFRvb2xzLmJ1aWxkSW1hZ2VFbGVtZW50KHRoaXMuaW1hZ2VMaW5rLCBcImltYWdlXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkZXNjcmlwdGlvbiBlbGVtZW50LlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG1haW4gZGl2LlxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIG1haW5EaXY7XG4gICAgfVxufVxuX2EgPSBUZWFtTWVtYmVyQ2FyZDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBwcmVmaXggdG8gZGlmZmVyZW50aWF0ZSB0aGUgZWxlbWVudHMgZnJvbSBvdGhlciBlbGVtZW50cy4gKi9cblRlYW1NZW1iZXJDYXJkLkNMQVNTX1BSRUZJWCA9IFwidGVhbU1lbWJlckNhcmRcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYgb2YgdGhlIGNhcmQuICovXG5UZWFtTWVtYmVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TWFpbkRpdmA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG5hbWUgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TmFtZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGltYWdlIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1JbWFnZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1EZXNjcmlwdGlvbmA7XG5leHBvcnRzLlRlYW1NZW1iZXJDYXJkID0gVGVhbU1lbWJlckNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGluZm9ybWF0aW9uQ2FyZEdyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZm9ybWF0aW9uQ2FyZEdyb3VwXCIpKTtcbi8qKiBIb2xkcyBtdWx0aXBsZSB0ZWFtIG1lbWJlciBjYXJkcy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNsYXNzIFRlYW1NZW1iZXJDYXJkR3JvdXAgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRHcm91cF8xLmRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRlYW0gbWVtYmVyIGNhcmQgZ3JvdXAuXG4gICAgICogQHBhcmFtIGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGVhbSBtZW1iZXIgY2FyZCBncm91cC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBzdXBlcihuYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgbmFtZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZEdyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkZXNjcmlwdGlvbiBlbGVtZW50LlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmRHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBCdWlsZCB0aGUgY2FyZCBob2xkZXIgZGl2LlxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmRIb2xkZXJEaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmRHcm91cC5DQVJEX0hPTERFUl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKGNhcmQgPT4gY2FyZEhvbGRlckRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FyZC5idWlsZCgpKSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBtYWluIGRpdi5cbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZEdyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoY2FyZEhvbGRlckRpdkVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gbWFpbkRpdjtcbiAgICB9XG59XG5fYSA9IFRlYW1NZW1iZXJDYXJkR3JvdXA7XG4vKiogVGhlIHByZWZpeCBvZiB0aGUgaHRtbCBlbGVtZW50IGNsYXNzIG5hbWVzIGluIHRoaXMgY2xhc3MuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLkNMQVNTX1BSRUZJWCA9IFwidGVhbU1lbWJlckNhcmRHcm91cFwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdiBodG1sIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1NYWluRGl2YDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBodG1sIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TmFtZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRlc2NyaXB0aW9uIGh0bWwgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9RGVzY3JpcHRpb25gO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBkaXYgdGhhdCBob2xkcyB0aGUgaW5mb3JtYXRpb24gY2FyZHMuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLkNBUkRfSE9MREVSX0RJVl9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9Q2FyZEhvbGRlckRpdmA7XG5leHBvcnRzLmRlZmF1bHQgPSBUZWFtTWVtYmVyQ2FyZEdyb3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBodG1sVG9vbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b29scy9odG1sVG9vbHNcIik7XG5jb25zdCBpbmZvcm1hdGlvbkNhcmRfMSA9IHJlcXVpcmUoXCIuLi9pbmZvcm1hdGlvbkNhcmRcIik7XG4vKiogQ3JlYXRlcyBhIHN1cHBvcnRlciBjYXJkLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlckNhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5JbmZvcm1hdGlvbkNhcmQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN1cHBvcnRlci5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBwYXRoIG9yIGxpbmsgdG8gdGhlIHN1cHBvcnRlcidzIGltYWdlLlxuICAgICAqIEBwYXJhbSBkb25hdGlvbkFtb3VudFVTRCBUaGUgZG9uYXRpb24gYW1vdW50IG9mIHRoZSBzdXBwb3J0ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2VMaW5rLCBkb25hdGlvbkFtb3VudFVTRCkge1xuICAgICAgICBzdXBlcihuYW1lLCBpbWFnZUxpbmspO1xuICAgICAgICB0aGlzLmRvbmF0aW9uQW1vdW50VVNEID0gZG9uYXRpb25BbW91bnRVU0Q7XG4gICAgfVxuICAgIC8qKiBSZXR1cm5zIGEgZGl2IHRoYXQgY29udGFpbnMgdGhlIGVudGlyZSBjYXJkLlxuICAgICAqXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGltYWdlIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGh0bWxUb29sc18xLkhUTUxUb29scy5idWlsZEltYWdlRWxlbWVudCh0aGlzLmltYWdlTGluaywgXCJpbWFnZVwiKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBodG1sIG1haW4gZGl2IGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIC8vIFJldHVybiB0aGUgbWFpbiBkaXYuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxufVxuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdi4gKi9cblN1cHBvcnRlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJDYXJkTWFpbkRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBuYW1lIGVsZW1lbnQuICovXG5TdXBwb3J0ZXJDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmROYW1lXCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGltYWdlIGVsZW1lbnQuICovXG5TdXBwb3J0ZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJDYXJkSW1hZ2VcIjtcbmV4cG9ydHMuZGVmYXVsdCA9IFN1cHBvcnRlckNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGluZm9ybWF0aW9uQ2FyZEdyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZm9ybWF0aW9uQ2FyZEdyb3VwXCIpKTtcbi8qKiBIb2xkcyBzdXBwb3J0ZXIgY2FyZHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgU3VwcG9ydGVyc0dyb3VwIGV4dGVuZHMgaW5mb3JtYXRpb25DYXJkR3JvdXBfMS5kZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzZWN0aW9uLlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHNlY3Rpb24uXG4gICAgICogQHBhcmFtIHBhcmVudERpdiBUaGUgZGl2IHRvIGFwcGVuZCB0aGlzIHNlY3Rpb24gdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgfVxuICAgIC8qKiBBZGRzIGEgc3VwcG9ydGVyIGNhcmQgdG8gdGhlIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJkXG4gICAgICovXG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICAvKiogQnVpbGRzIHRoZSBzZWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lLlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uLlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkaXYgdGhhdCBob2xkcyBzdXBwb3J0ZXIgY2FyZHMuXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlckNhcmRIb2xkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoYCR7U3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUV9LSR7dGhpcy5uYW1lfWApO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHN1cHBvcnRlcnMgY2FyZHMuXG4gICAgICAgIC8vIEFkZCBlYWNoIGNhcmQgdG8gdGhlIGdyb3VwRGl2LlxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYXJkcykge1xuICAgICAgICAgICAgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhcmRzW2ldLmJ1aWxkKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBtYWluRGl2LlxuICAgICAgICBjb25zdCBncm91cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdyb3VwRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoc3VwcG9ydGVyQ2FyZEhvbGRlckRpdik7XG4gICAgICAgIHJldHVybiBncm91cERpdjtcbiAgICB9XG59XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwTWFpbkRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBkaXYgdGhhdCBob2xkcyB0aGUgc3VwcG9ydGVyIGNhcmRzLiAqL1xuU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cENhcmRIb2xkZXJEaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIG5hbWUgaHRtbCBlbGVtZW50LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cE5hbWVcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIGRlc2NyaXB0aW9uIGh0bWwgZWxlbWVudC5TICovXG5TdXBwb3J0ZXJzR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cERlc2NyaXB0aW9uXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJzR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdGVhbU1lbWJlckNhcmRfMSA9IHJlcXVpcmUoXCIuLi9jbGFzc2VzL291cl90ZWFtX3NlY3Rpb24vdGVhbU1lbWJlckNhcmRcIik7XG5jb25zdCB0ZWFtTWVtYmVyQ2FyZEdyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvb3VyX3RlYW1fc2VjdGlvbi90ZWFtTWVtYmVyQ2FyZEdyb3VwXCIpKTtcbi8qKiBCdWlsZHMgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBPdXJUZWFtU2VjdGlvbkJ1aWxkZXIge1xuICAgIC8qKiBCdWlsZHMgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY2FyZCBob2xkZXIuXG4gICAgICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2TmFtZSA9IFwib3VyVGVhbVNlY3Rpb25cIjtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRIb2xkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSG9sZGVyRGl2TmFtZSk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGRldmVsb3BlciB0ZWFtIGdyb3VwLlxuICAgICAgICAgICAgY29uc3QgZGV2VGVhbUdyb3VwID0gbmV3IHRlYW1NZW1iZXJDYXJkR3JvdXBfMS5kZWZhdWx0KFwiRGV2ZWxvcG1lbnQgVGVhbVwiLCBcIlBlb3BsZSB0aGF0IGRpcmVjdGx5IGludGVyYWN0IHdpdGggdGhlIHByb2dyYW1taW5nIG9mIERDTyBwcm9qZWN0cy5cIik7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNhcmQgdG8gdGhlIGRldmVsb3BlciBncm91cC5cbiAgICAgICAgICAgIGNvbnN0IGRldlRlYW1DYXJkcyA9IFtcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIllpcG1hblwiLCBcIlwiLCBcIkRDTyBQcm9qZWN0IExlYWRcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJUYWxseVwiLCBcIlwiLCBcIlByb2dyYW1tZXI6IERDTyBHUFQgJiBQbGF0b29uRnNtLlwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIkZsdWZmeVwiLCBcIlwiLCBcIlByb2dyYW1tZXI6IERDTyBDb21zeXNcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJBbHRlclwiLCBcIlwiLCBcIlByb2dyYW1tZXI6IERDTyBFQ08gJiBXZWJwYWdlLCBXZWIgU2VjdXJpdHlcIiksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgZGV2VGVhbUdyb3VwLmNhcmRzID0gZGV2VGVhbUNhcmRzO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb250cmlidXRvcnMgZ3JvdXAuXG4gICAgICAgICAgICBjb25zdCBjb250cmlidXRvcnNHcm91cCA9IG5ldyB0ZWFtTWVtYmVyQ2FyZEdyb3VwXzEuZGVmYXVsdChcIkNvbnRyaWJ1dG9yc1wiLCBcIlRlc3RlcnMsIEFkdmlzb3JzLCBEZXNpZ25lcnMgYW5kIE1vcmUuXCIpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBjYXJkcyB0byB0aGUgY29udHJpYnV0b3JzIGdyb3VwLlxuICAgICAgICAgICAgY29uc3QgY29udHJpYnV0b3JzVGVhbUNhcmRzID0gW1xuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiUGFwYXJlYXBcIiwgXCJcIiwgXCJIZWFkbGVzcyBDbGllbnQsIERlYnVnIGFuZCBDb2RlIEFkdmlzb3JcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJNeVBhbERlZWJzXCIsIFwiXCIsIFwiSWRlYSBBbmQgRGVzaWduXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiV29vZHlcIiwgXCJcIiwgXCJNaWxpdGFyeSBBZHZpc29yXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiUGFnYW5cIiwgXCJcIiwgXCJQcm9tbywgRmVlZGJhY2ssIFRlc3RpbmdcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJLYXJtYWt1dFwiLCBcIlwiLCBcIkxhcmdlIFNjYWxlIFRlc3RpbmcgQW5kIFByb21vXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiU2FtaW5cIiwgXCJcIiwgXCJHUFQgQWR2aWNlXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiQnJ1bm8gJiBNY3NlbGxlcmllXCIsIFwiXCIsIFwiTG9uZyBUZXJtIFRlc3RpbmcgJiBNb3JhbCBTdXBwb3J0XCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiTnVyc2lmZXJcIiwgXCJcIiwgXCJOdXRyaXRpb25hbCBTcGVjaWFsaXN0XCIpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnRyaWJ1dG9yc0dyb3VwLmNhcmRzID0gY29udHJpYnV0b3JzVGVhbUNhcmRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29udHJpYnV0b3JzR3JvdXAuYnVpbGQoKSk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGJ1aWx0IGdyb3VwcyB0byB0aGUgZGl2LlxuICAgICAgICAgICAgY2FyZEhvbGRlckRpdi5hcHBlbmRDaGlsZChkZXZUZWFtR3JvdXAuYnVpbGQoKSk7XG4gICAgICAgICAgICBjYXJkSG9sZGVyRGl2LmFwcGVuZENoaWxkKGNvbnRyaWJ1dG9yc0dyb3VwLmJ1aWxkKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBPdXJUZWFtU2VjdGlvbkJ1aWxkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEJ1aWxkcyB0aGUgcHJvamVjdHMgc2VjdGlvbi5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNsYXNzIFByb2plY3RzU2VjdGlvbkJ1aWxkZXIge1xuICAgIC8qKiBCdWlsZHMgdGhlIHByb2plY3RzIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAYXV0aG9yIEFsdGVyXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIHByb2plY3RzIHNlY3Rpb24uXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFByb2plY3RzU2VjdGlvbkJ1aWxkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3VwcG9ydGVyQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJDYXJkXCIpKTtcbmNvbnN0IHN1cHBvcnRlcnNHcm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJzR3JvdXBcIikpO1xuLyoqIEJ1aWxkcyB0aGUgaW5kZXggcGFnZXMncyBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gKlxuICovXG5jbGFzcyBTdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXIge1xuICAgIC8qKiBCdWlsZHMgdGhlIGluZGV4IHBhZ2VzJ3Mgc3VwcG9ydGVycyBzZWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBzdXBwb3J0ZXJzIHNlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHN1cHBvcnRlcnNTZWN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXBwb3J0ZXJzU2VjdGlvblwiKTtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZXJzU2VjdGlvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN1cHBvcnRlcnMgc2VjdGlvbiBpcyBudWxsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZ3JvdXBzLlxuICAgICAgICAgICAgY29uc3QgZ3JvdXAxID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJQbGF0aW51bVwiLCBcIk5vdGhpbmcgd291bGQgYmUgcG9zc2libGUgd2l0aG91dCBvdXIgZ3JlYXRlc3QgZG9uYXRvcnMuXCIpO1xuICAgICAgICAgICAgZ3JvdXAxLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJZaXBtYW5cIiwgXCJcIiwgMTAwMDApKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwMiA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiQnJvbnplXCIsIFwiQnJvbnplIHN1cHBvcnRlcnMuXCIpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAzID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJHb2xkXCIsIFwidGVzdFwiKTtcbiAgICAgICAgICAgIGdyb3VwMy5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiVGVzdFwiLCBcIlwiLCAyKSk7XG4gICAgICAgICAgICBjb25zdCBncm91cDQgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIlNpbHZlclwiLCBcInRlc3RcIik7XG4gICAgICAgICAgICBjb25zdCBncm91cDUgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIkJhc2ljXCIsIFwidGVzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwNiA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiTWljcm9cIiwgXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIGdyb3Vwcy5cbiAgICAgICAgICAgIGNvbnN0IGdyb3Vwc1RvQmVCdWlsdCA9IFtcbiAgICAgICAgICAgICAgICBncm91cDEuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDIuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDMuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDQuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDUuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDYuYnVpbGQoKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGdyb3VwcyB0byB0aGUgcGFyZW50IGRpdi5cbiAgICAgICAgICAgIGdyb3Vwc1RvQmVCdWlsdC5mb3JFYWNoKGdyb3VwID0+IHN1cHBvcnRlcnNTZWN0aW9uRGl2LmFwcGVuZENoaWxkKGdyb3VwKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIFRoZSBtYWluIGZpbGUgZm9yIHRoZSBpbmRleCBwYWdlLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY29uc3Qgb3VyVGVhbVNlY3Rpb25CdWlsZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZXhlY3V0aW9uL291clRlYW1TZWN0aW9uQnVpbGRlclwiKSk7XG5jb25zdCBwcm9qZWN0c1NlY3Rpb25CdWlsZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZXhlY3V0aW9uL3Byb2plY3RzU2VjdGlvbkJ1aWxkZXJcIikpO1xuY29uc3Qgc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZXhlY3V0aW9uL3N1cHBvcnRlcnNTZWN0aW9uQnVpbGRlclwiKSk7XG4vLyBBc3luY2hyb25vdXNseSBidWlsZCB0aGUgd2VicGFnZS5cblByb21pc2UuYWxsKFtcbiAgICAvLyBCdWlsZCB0aGUgJ3Byb2plY3RzJyBzZWN0aW9uLlxuICAgIHByb2plY3RzU2VjdGlvbkJ1aWxkZXJfMS5kZWZhdWx0LmJ1aWxkKCksXG4gICAgLy8gQnVpbGQgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAgICBvdXJUZWFtU2VjdGlvbkJ1aWxkZXJfMS5kZWZhdWx0LmJ1aWxkKCksXG4gICAgLy8gQnVpbGQgdGhlIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAgICBzdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXJfMS5kZWZhdWx0LmJ1aWxkKClcbl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkhUTUxUb29scyA9IHZvaWQgMDtcbi8qKiBDb250YWlucyB1c2VmdWwgSFRNTCB0b29scy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBIVE1MVG9vbHMge1xuICAgIC8qKiBSZXR1cm5zIGEgbmV3IGd0bWwgaW1nIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3JjIFRoZSBzb3VyY2Ugb2YgdGhlIGltYWdlLlxuICAgICAqIEBwYXJhbSBhbHQgVGhlIGFsdCBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRJbWFnZUVsZW1lbnQoc3JjLCBhbHQpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgaW1hZ2VFbGVtZW50LmFsdCA9IGFsdDtcbiAgICAgICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnRzLkhUTUxUb29scyA9IEhUTUxUb29scztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIENvbnRhaW5zIHVzZWZ1bCBzdHJpbmcgdG9vbCBmdW5jdGlvbnMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgU3RyaW5nVG9vbHMge1xuICAgIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIHN0cmluZyBjb250YWlucyBPTkxZIG9uZSBvciBtb3JlIHNwYWNlcy5cbiAgICAgKiBSZXR1cm5zIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgc3RhdGljIGlzT25seVNwYWNlcyhzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoL14gKyQvKS50ZXN0KHN0cmluZyk7XG4gICAgfVxuICAgIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIHN0cmluZyBpcyBvZiBsZW5ndGggMCBvciBjb250YWlucyBPTkxZIG9uZSBvciBtb3JlIHNwYWNlcy5cbiAgICAgKiBSZXR1cm5zIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgc3RhdGljIGlzQmxhbmsoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoc3RyaW5nLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmlzT25seVNwYWNlcyhzdHJpbmcpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTdHJpbmdUb29scztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9qcy9pbmRleC9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==