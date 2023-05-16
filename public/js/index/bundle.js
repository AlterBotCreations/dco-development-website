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
            const cardHolderDivName = "teamMemberCardsHolder";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QixzQ0FBc0MsbUJBQU8sQ0FBQyxvRUFBc0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7Ozs7Ozs7Ozs7QUM3QlY7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQ0FBc0MsbUJBQU8sQ0FBQyxvRUFBc0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDOUJGO0FBQ2I7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCLG9CQUFvQixtQkFBTyxDQUFDLG1FQUF1QjtBQUNuRCwwQkFBMEIsbUJBQU8sQ0FBQyx3RUFBb0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZEO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQSxrREFBa0QsZ0JBQWdCO0FBQ2xFLHNCQUFzQjs7Ozs7Ozs7Ozs7QUN4RFQ7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELCtDQUErQyxtQkFBTyxDQUFDLGtGQUF5QjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7QUFDQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRSxrQkFBZTs7Ozs7Ozs7Ozs7QUNwREY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLG1CQUFPLENBQUMsbUVBQXVCO0FBQ25ELDBCQUEwQixtQkFBTyxDQUFDLHdFQUFvQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUM5Q0Y7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwrQ0FBK0MsbUJBQU8sQ0FBQyxrRkFBeUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnREFBZ0QsR0FBRyxVQUFVO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDbkVGO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHlCQUF5QixtQkFBTyxDQUFDLGdIQUE0QztBQUM3RSw4Q0FBOEMsbUJBQU8sQ0FBQywwSEFBaUQ7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDNURGO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzFCRjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3Q0FBd0MsbUJBQU8sQ0FBQyxrSEFBNkM7QUFDN0YsMENBQTBDLG1CQUFPLENBQUMsc0hBQStDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUMzREY7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQkFBTyxDQUFDLCtGQUFtQztBQUMzRixpREFBaUQsbUJBQU8sQ0FBQyxpR0FBb0M7QUFDN0YsbURBQW1ELG1CQUFPLENBQUMscUdBQXNDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ3RCSjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDM0JmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL2luZm9ybWF0aW9uQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL2luZm9ybWF0aW9uQ2FyZEdyb3VwLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvb3VyX3RlYW1fc2VjdGlvbi90ZWFtTWVtYmVyQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL291cl90ZWFtX3NlY3Rpb24vdGVhbU1lbWJlckNhcmRHcm91cC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJDYXJkLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlcnNHcm91cC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9leGVjdXRpb24vb3VyVGVhbVNlY3Rpb25CdWlsZGVyLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2V4ZWN1dGlvbi9wcm9qZWN0c1NlY3Rpb25CdWlsZGVyLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2V4ZWN1dGlvbi9zdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvdG9vbHMvaHRtbFRvb2xzLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L3Rvb2xzL3N0cmluZ1Rvb2xzLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5mb3JtYXRpb25DYXJkID0gdm9pZCAwO1xuY29uc3Qgc3RyaW5nVG9vbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdG9vbHMvc3RyaW5nVG9vbHNcIikpO1xuLyoqIEZvciBpbmZvcm1hdGlvbiBjYXJkIHN0YW5kYXJkaXphdGlvbi5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBJbmZvcm1hdGlvbkNhcmQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb24gdGhlIGNhcmQuXG4gICAgICogQHBhcmFtIGltYWdlTGluayBUaGUgaW1hZ2Ugb24gdGhlIGNhcmQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2VMaW5rKSB7XG4gICAgICAgIC8qKiBUaGUgbGluay9wYXRoIHRvIHRoZSBjYXJkJ3MgaW1hZ2UuIENhbiBzZXJ2ZSBhcyBhIHByb2ZpbGUgcGljLiovXG4gICAgICAgIHRoaXMuaW1hZ2VMaW5rID0gXCIuL2RlZmF1bHRfcGZwLnBuZ1wiOyAvLyBEZWZhdWx0LlxuICAgICAgICAvLyBJZiB0aGUgbmFtZSBpcyBibGFuaywgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBuYW1lIGNhbm5vdCBiZSBibGFuay5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmltYWdlTGluayA9IGltYWdlTGluaztcbiAgICB9XG59XG5leHBvcnRzLkluZm9ybWF0aW9uQ2FyZCA9IEluZm9ybWF0aW9uQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3RyaW5nVG9vbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdG9vbHMvc3RyaW5nVG9vbHNcIikpO1xuLyoqIEhvbGRzIG11bHRpcGxlIGluZm9ybWF0aW9uIGNhcmRzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgSW5mb3JtYXRpb25DYXJkR3JvdXAge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNhcmQgZ3JvdXAuXG4gICAgICogQHBhcmFtIGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiBvZiBjYXJkIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICAvLyBJZiB0aGUgbmFtZSBpcyBibGFuaywgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgIC8vIElmIHRoZSBkZXNjcmlwdGlvbiBpcyBibGFuaywgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ1Rvb2xzXzEuZGVmYXVsdC5pc0JsYW5rKGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJbmZvcm1hdGlvbkNhcmRHcm91cDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UZWFtTWVtYmVyQ2FyZCA9IHZvaWQgMDtcbmNvbnN0IGh0bWxUb29sc18xID0gcmVxdWlyZShcIi4uLy4uL3Rvb2xzL2h0bWxUb29sc1wiKTtcbmNvbnN0IGluZm9ybWF0aW9uQ2FyZF8xID0gcmVxdWlyZShcIi4uL2luZm9ybWF0aW9uQ2FyZFwiKTtcbi8qKiBIb2xkcyBhbmQgZGlzcGxheXMgaW5mb3JtYXRpb24gYWJvdXQgYSB0ZWFtIG1lbWJlci5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNsYXNzIFRlYW1NZW1iZXJDYXJkIGV4dGVuZHMgaW5mb3JtYXRpb25DYXJkXzEuSW5mb3JtYXRpb25DYXJkIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9uIHRoZSB0ZWFtIG1lbWJlciBjYXJkLlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIGltYWdlIG9uIHRoZSB0ZWFtIG1lbWJlciBjYXJkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaywgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaW1hZ2VMaW5rKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGF0IGhvbGRzIHRoZSBjYXJkLlxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGltYWdlIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGh0bWxUb29sc18xLkhUTUxUb29scy5idWlsZEltYWdlRWxlbWVudCh0aGlzLmltYWdlTGluaywgXCJpbWFnZVwiKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgbmFtZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgZGVzY3JpcHRpb24gZWxlbWVudC5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBtYWluIGRpdi5cbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBtYWluRGl2O1xuICAgIH1cbn1cbl9hID0gVGVhbU1lbWJlckNhcmQ7XG4vKiogVGhlIGNsYXNzIG5hbWUgcHJlZml4IHRvIGRpZmZlcmVudGlhdGUgdGhlIGVsZW1lbnRzIGZyb20gb3RoZXIgZWxlbWVudHMuICovXG5UZWFtTWVtYmVyQ2FyZC5DTEFTU19QUkVGSVggPSBcInRlYW1NZW1iZXJDYXJkXCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2IG9mIHRoZSBjYXJkLiAqL1xuVGVhbU1lbWJlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfU1haW5EaXZgO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBuYW1lIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfU5hbWVgO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBpbWFnZSBlbGVtZW50LiAqL1xuVGVhbU1lbWJlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9SW1hZ2VgO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBkZXNjcmlwdGlvbiBlbGVtZW50LiAqL1xuVGVhbU1lbWJlckNhcmQuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9RGVzY3JpcHRpb25gO1xuZXhwb3J0cy5UZWFtTWVtYmVyQ2FyZCA9IFRlYW1NZW1iZXJDYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpbmZvcm1hdGlvbkNhcmRHcm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmZvcm1hdGlvbkNhcmRHcm91cFwiKSk7XG4vKiogSG9sZHMgbXVsdGlwbGUgdGVhbSBtZW1iZXIgY2FyZHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICovXG5jbGFzcyBUZWFtTWVtYmVyQ2FyZEdyb3VwIGV4dGVuZHMgaW5mb3JtYXRpb25DYXJkR3JvdXBfMS5kZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0ZWFtIG1lbWJlciBjYXJkIGdyb3VwLlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHRlYW0gbWVtYmVyIGNhcmQgZ3JvdXAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUgZWxlbWVudC5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmRHcm91cC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICAvLyBCdWlsZCB0aGUgZGVzY3JpcHRpb24gZWxlbWVudC5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGNhcmQgaG9sZGVyIGRpdi5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlckRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkSG9sZGVyRGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkR3JvdXAuQ0FSRF9IT0xERVJfRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaChjYXJkID0+IGNhcmRIb2xkZXJEaXZFbGVtZW50LmFwcGVuZENoaWxkKGNhcmQuYnVpbGQoKSkpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgbWFpbiBkaXYuXG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmRHcm91cC5NQUlOX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gbWFpbkRpdjtcbiAgICB9XG59XG5fYSA9IFRlYW1NZW1iZXJDYXJkR3JvdXA7XG4vKiogVGhlIHByZWZpeCBvZiB0aGUgaHRtbCBlbGVtZW50IGNsYXNzIG5hbWVzIGluIHRoaXMgY2xhc3MuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLkNMQVNTX1BSRUZJWCA9IFwidGVhbU1lbWJlckNhcmRHcm91cFwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdiBodG1sIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1NYWluRGl2YDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBodG1sIGVsZW1lbnQuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TmFtZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRlc2NyaXB0aW9uIGh0bWwgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9RGVzY3JpcHRpb25gO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBkaXYgdGhhdCBob2xkcyB0aGUgaW5mb3JtYXRpb24gY2FyZHMuICovXG5UZWFtTWVtYmVyQ2FyZEdyb3VwLkNBUkRfSE9MREVSX0RJVl9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9Q2FyZEhvbGRlckRpdmA7XG5leHBvcnRzLmRlZmF1bHQgPSBUZWFtTWVtYmVyQ2FyZEdyb3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBodG1sVG9vbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b29scy9odG1sVG9vbHNcIik7XG5jb25zdCBpbmZvcm1hdGlvbkNhcmRfMSA9IHJlcXVpcmUoXCIuLi9pbmZvcm1hdGlvbkNhcmRcIik7XG4vKiogQ3JlYXRlcyBhIHN1cHBvcnRlciBjYXJkLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlckNhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5JbmZvcm1hdGlvbkNhcmQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN1cHBvcnRlci5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBwYXRoIG9yIGxpbmsgdG8gdGhlIHN1cHBvcnRlcidzIGltYWdlLlxuICAgICAqIEBwYXJhbSBkb25hdGlvbkFtb3VudFVTRCBUaGUgZG9uYXRpb24gYW1vdW50IG9mIHRoZSBzdXBwb3J0ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2VMaW5rLCBkb25hdGlvbkFtb3VudFVTRCkge1xuICAgICAgICBzdXBlcihuYW1lLCBpbWFnZUxpbmspO1xuICAgICAgICB0aGlzLmRvbmF0aW9uQW1vdW50VVNEID0gZG9uYXRpb25BbW91bnRVU0Q7XG4gICAgfVxuICAgIC8qKiBSZXR1cm5zIGEgZGl2IHRoYXQgY29udGFpbnMgdGhlIGVudGlyZSBjYXJkLlxuICAgICAqXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGltYWdlIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGh0bWxUb29sc18xLkhUTUxUb29scy5idWlsZEltYWdlRWxlbWVudCh0aGlzLmltYWdlTGluaywgXCJpbWFnZVwiKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBodG1sIG1haW4gZGl2IGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIC8vIFJldHVybiB0aGUgbWFpbiBkaXYuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxufVxuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdi4gKi9cblN1cHBvcnRlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJDYXJkTWFpbkRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBuYW1lIGVsZW1lbnQuICovXG5TdXBwb3J0ZXJDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmROYW1lXCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGltYWdlIGVsZW1lbnQuICovXG5TdXBwb3J0ZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJDYXJkSW1hZ2VcIjtcbmV4cG9ydHMuZGVmYXVsdCA9IFN1cHBvcnRlckNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGluZm9ybWF0aW9uQ2FyZEdyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZm9ybWF0aW9uQ2FyZEdyb3VwXCIpKTtcbi8qKiBIb2xkcyBzdXBwb3J0ZXIgY2FyZHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgU3VwcG9ydGVyc0dyb3VwIGV4dGVuZHMgaW5mb3JtYXRpb25DYXJkR3JvdXBfMS5kZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzZWN0aW9uLlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHNlY3Rpb24uXG4gICAgICogQHBhcmFtIHBhcmVudERpdiBUaGUgZGl2IHRvIGFwcGVuZCB0aGlzIHNlY3Rpb24gdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgfVxuICAgIC8qKiBBZGRzIGEgc3VwcG9ydGVyIGNhcmQgdG8gdGhlIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJkXG4gICAgICovXG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICAvKiogQnVpbGRzIHRoZSBzZWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lLlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uLlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkaXYgdGhhdCBob2xkcyBzdXBwb3J0ZXIgY2FyZHMuXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlckNhcmRIb2xkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUpO1xuICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoYCR7U3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUV9LSR7dGhpcy5uYW1lfWApO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHN1cHBvcnRlcnMgY2FyZHMuXG4gICAgICAgIC8vIEFkZCBlYWNoIGNhcmQgdG8gdGhlIGdyb3VwRGl2LlxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jYXJkcykge1xuICAgICAgICAgICAgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhcmRzW2ldLmJ1aWxkKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBtYWluRGl2LlxuICAgICAgICBjb25zdCBncm91cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdyb3VwRGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoc3VwcG9ydGVyQ2FyZEhvbGRlckRpdik7XG4gICAgICAgIHJldHVybiBncm91cERpdjtcbiAgICB9XG59XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk1BSU5fRElWX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwTWFpbkRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBkaXYgdGhhdCBob2xkcyB0aGUgc3VwcG9ydGVyIGNhcmRzLiAqL1xuU3VwcG9ydGVyc0dyb3VwLlNVUFBPUlRFUl9DQVJEX0hPTERFUl9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cENhcmRIb2xkZXJEaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIG5hbWUgaHRtbCBlbGVtZW50LiAqL1xuU3VwcG9ydGVyc0dyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cE5hbWVcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgc2VjdGlvbidzIGRlc2NyaXB0aW9uIGh0bWwgZWxlbWVudC5TICovXG5TdXBwb3J0ZXJzR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cERlc2NyaXB0aW9uXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJzR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdGVhbU1lbWJlckNhcmRfMSA9IHJlcXVpcmUoXCIuLi9jbGFzc2VzL291cl90ZWFtX3NlY3Rpb24vdGVhbU1lbWJlckNhcmRcIik7XG5jb25zdCB0ZWFtTWVtYmVyQ2FyZEdyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvb3VyX3RlYW1fc2VjdGlvbi90ZWFtTWVtYmVyQ2FyZEdyb3VwXCIpKTtcbi8qKiBCdWlsZHMgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBPdXJUZWFtU2VjdGlvbkJ1aWxkZXIge1xuICAgIC8qKiBCdWlsZHMgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY2FyZCBob2xkZXIuXG4gICAgICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2TmFtZSA9IFwidGVhbU1lbWJlckNhcmRzSG9sZGVyXCI7XG4gICAgICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZEhvbGRlckRpdk5hbWUpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBkZXZlbG9wZXIgdGVhbSBncm91cC5cbiAgICAgICAgICAgIGNvbnN0IGRldlRlYW1Hcm91cCA9IG5ldyB0ZWFtTWVtYmVyQ2FyZEdyb3VwXzEuZGVmYXVsdChcIkRldmVsb3BtZW50IFRlYW1cIiwgXCJQZW9wbGUgdGhhdCBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBwcm9ncmFtbWluZyBvZiBEQ08gcHJvamVjdHMuXCIpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBjYXJkIHRvIHRoZSBkZXZlbG9wZXIgZ3JvdXAuXG4gICAgICAgICAgICBjb25zdCBkZXZUZWFtQ2FyZHMgPSBbXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJZaXBtYW5cIiwgXCJcIiwgXCJEQ08gUHJvamVjdCBMZWFkXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiVGFsbHlcIiwgXCJcIiwgXCJQcm9ncmFtbWVyOiBEQ08gR1BUICYgUGxhdG9vbkZzbS5cIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJGbHVmZnlcIiwgXCJcIiwgXCJQcm9ncmFtbWVyOiBEQ08gQ29tc3lzXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiQWx0ZXJcIiwgXCJcIiwgXCJQcm9ncmFtbWVyOiBEQ08gRUNPICYgV2VicGFnZSwgV2ViIFNlY3VyaXR5XCIpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGRldlRlYW1Hcm91cC5jYXJkcyA9IGRldlRlYW1DYXJkcztcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udHJpYnV0b3JzIGdyb3VwLlxuICAgICAgICAgICAgY29uc3QgY29udHJpYnV0b3JzR3JvdXAgPSBuZXcgdGVhbU1lbWJlckNhcmRHcm91cF8xLmRlZmF1bHQoXCJDb250cmlidXRvcnNcIiwgXCJUZXN0ZXJzLCBBZHZpc29ycywgRGVzaWduZXJzIGFuZCBNb3JlLlwiKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FyZHMgdG8gdGhlIGNvbnRyaWJ1dG9ycyBncm91cC5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyaWJ1dG9yc1RlYW1DYXJkcyA9IFtcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlBhcGFyZWFwXCIsIFwiXCIsIFwiSGVhZGxlc3MgQ2xpZW50LCBEZWJ1ZyBhbmQgQ29kZSBBZHZpc29yXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiTXlQYWxEZWVic1wiLCBcIlwiLCBcIklkZWEgQW5kIERlc2lnblwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIldvb2R5XCIsIFwiXCIsIFwiTWlsaXRhcnkgQWR2aXNvclwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlBhZ2FuXCIsIFwiXCIsIFwiUHJvbW8sIEZlZWRiYWNrLCBUZXN0aW5nXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiS2FybWFrdXRcIiwgXCJcIiwgXCJMYXJnZSBTY2FsZSBUZXN0aW5nIEFuZCBQcm9tb1wiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlNhbWluXCIsIFwiXCIsIFwiR1BUIEFkdmljZVwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIkJydW5vICYgTWNzZWxsZXJpZVwiLCBcIlwiLCBcIkxvbmcgVGVybSBUZXN0aW5nICYgTW9yYWwgU3VwcG9ydFwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIk51cnNpZmVyXCIsIFwiXCIsIFwiTnV0cml0aW9uYWwgU3BlY2lhbGlzdFwiKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb250cmlidXRvcnNHcm91cC5jYXJkcyA9IGNvbnRyaWJ1dG9yc1RlYW1DYXJkcztcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgYnVpbHQgZ3JvdXBzIHRvIHRoZSBkaXYuXG4gICAgICAgICAgICBjYXJkSG9sZGVyRGl2LmFwcGVuZENoaWxkKGRldlRlYW1Hcm91cC5idWlsZCgpKTtcbiAgICAgICAgICAgIGNhcmRIb2xkZXJEaXYuYXBwZW5kQ2hpbGQoY29udHJpYnV0b3JzR3JvdXAuYnVpbGQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE91clRlYW1TZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQnVpbGRzIHRoZSBwcm9qZWN0cyBzZWN0aW9uLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgUHJvamVjdHNTZWN0aW9uQnVpbGRlciB7XG4gICAgLyoqIEJ1aWxkcyB0aGUgcHJvamVjdHMgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqIEBhdXRob3IgQWx0ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgcHJvamVjdHMgc2VjdGlvbi5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvamVjdHNTZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdXBwb3J0ZXJDYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlckNhcmRcIikpO1xuY29uc3Qgc3VwcG9ydGVyc0dyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlcnNHcm91cFwiKSk7XG4vKiogQnVpbGRzIHRoZSBpbmRleCBwYWdlcydzIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlciB7XG4gICAgLyoqIEJ1aWxkcyB0aGUgaW5kZXggcGFnZXMncyBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHN1cHBvcnRlcnMgc2VjdGlvblxuICAgICAgICAgICAgY29uc3Qgc3VwcG9ydGVyc1NlY3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cHBvcnRlcnNTZWN0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlcnNTZWN0aW9uRGl2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3VwcG9ydGVycyBzZWN0aW9uIGlzIG51bGwuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBncm91cHMuXG4gICAgICAgICAgICBjb25zdCBncm91cDEgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIlBsYXRpbnVtXCIsIFwiTm90aGluZyB3b3VsZCBiZSBwb3NzaWJsZSB3aXRob3V0IG91ciBncmVhdGVzdCBkb25hdG9ycy5cIik7XG4gICAgICAgICAgICBncm91cDEuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIllpcG1hblwiLCBcImltYWdlXCIsIDEwMDAwKSk7XG4gICAgICAgICAgICBjb25zdCBncm91cDIgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIkJyb256ZVwiLCBcIkJyb256ZSBzdXBwb3J0ZXJzLlwiKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwMyA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiR29sZFwiLCBcInRlc3RcIik7XG4gICAgICAgICAgICBncm91cDMuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIlRlc3RcIiwgXCJcIiwgMikpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXA0ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJTaWx2ZXJcIiwgXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXA1ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJCYXNpY1wiLCBcInRlc3RcIik7XG4gICAgICAgICAgICBjb25zdCBncm91cDYgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIk1pY3JvXCIsIFwidGVzdFwiKTtcbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBncm91cHMuXG4gICAgICAgICAgICBjb25zdCBncm91cHNUb0JlQnVpbHQgPSBbXG4gICAgICAgICAgICAgICAgZ3JvdXAxLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXAyLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXAzLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXA0LmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXA1LmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgZ3JvdXA2LmJ1aWxkKCksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBncm91cHMgdG8gdGhlIHBhcmVudCBkaXYuXG4gICAgICAgICAgICBncm91cHNUb0JlQnVpbHQuZm9yRWFjaChncm91cCA9PiBzdXBwb3J0ZXJzU2VjdGlvbkRpdi5hcHBlbmRDaGlsZChncm91cCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBUaGUgbWFpbiBmaWxlIGZvciB0aGUgaW5kZXggcGFnZS5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNvbnN0IG91clRlYW1TZWN0aW9uQnVpbGRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2V4ZWN1dGlvbi9vdXJUZWFtU2VjdGlvbkJ1aWxkZXJcIikpO1xuY29uc3QgcHJvamVjdHNTZWN0aW9uQnVpbGRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2V4ZWN1dGlvbi9wcm9qZWN0c1NlY3Rpb25CdWlsZGVyXCIpKTtcbmNvbnN0IHN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2V4ZWN1dGlvbi9zdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXJcIikpO1xuLy8gQXN5bmNocm9ub3VzbHkgYnVpbGQgdGhlIHdlYnBhZ2UuXG5Qcm9taXNlLmFsbChbXG4gICAgLy8gQnVpbGQgdGhlICdwcm9qZWN0cycgc2VjdGlvbi5cbiAgICBwcm9qZWN0c1NlY3Rpb25CdWlsZGVyXzEuZGVmYXVsdC5idWlsZCgpLFxuICAgIC8vIEJ1aWxkIHRoZSAnb3VyIHRlYW0nIHNlY3Rpb24uXG4gICAgb3VyVGVhbVNlY3Rpb25CdWlsZGVyXzEuZGVmYXVsdC5idWlsZCgpLFxuICAgIC8vIEJ1aWxkIHRoZSBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gICAgc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyXzEuZGVmYXVsdC5idWlsZCgpXG5dKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5IVE1MVG9vbHMgPSB2b2lkIDA7XG4vKiogQ29udGFpbnMgdXNlZnVsIEhUTUwgdG9vbHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgSFRNTFRvb2xzIHtcbiAgICAvKiogUmV0dXJucyBhIG5ldyBndG1sIGltZyBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNyYyBUaGUgc291cmNlIG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAcGFyYW0gYWx0IFRoZSBhbHQgb2YgdGhlIGltYWdlLlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkSW1hZ2VFbGVtZW50KHNyYywgYWx0KSB7XG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIGltYWdlRWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIHJldHVybiBpbWFnZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5IVE1MVG9vbHMgPSBIVE1MVG9vbHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBDb250YWlucyB1c2VmdWwgc3RyaW5nIHRvb2wgZnVuY3Rpb25zLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN0cmluZ1Rvb2xzIHtcbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc09ubHlTcGFjZXMoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKC9eICskLykudGVzdChzdHJpbmcpO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgaXMgb2YgbGVuZ3RoIDAgb3IgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc0JsYW5rKHN0cmluZykge1xuICAgICAgICByZXR1cm4gKHN0cmluZy5sZW5ndGggPT09IDAgfHwgdGhpcy5pc09ubHlTcGFjZXMoc3RyaW5nKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyaW5nVG9vbHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvaW5kZXgvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=