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
exports["default"] = InformationCard;


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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamMemberCard = void 0;
const htmlTools_1 = __importDefault(__webpack_require__(/*! ../../tools/htmlTools */ "./public/js/index/tools/htmlTools.ts"));
const informationCard_1 = __importDefault(__webpack_require__(/*! ../informationCard */ "./public/js/index/classes/informationCard.ts"));
/** Holds and displays information about a team member.
 *
 * @author Alter
 */
class TeamMemberCard extends informationCard_1.default {
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
        const imageElement = htmlTools_1.default.buildImageElement(this.imageLink, "image");
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const htmlTools_1 = __importDefault(__webpack_require__(/*! ../../tools/htmlTools */ "./public/js/index/tools/htmlTools.ts"));
const informationCard_1 = __importDefault(__webpack_require__(/*! ../informationCard */ "./public/js/index/classes/informationCard.ts"));
/** Creates a supporter card.
 *
 * @author Alter
 *
 */
class SupporterCard extends informationCard_1.default {
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
        const imageElement = htmlTools_1.default.buildImageElement(this.imageLink, "image");
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
exports["default"] = HTMLTools;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNDQUFzQyxtQkFBTyxDQUFDLG9FQUFzQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDL0JGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0NBQXNDLG1CQUFPLENBQUMsb0VBQXNCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzlCRjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCLG9DQUFvQyxtQkFBTyxDQUFDLG1FQUF1QjtBQUNuRSwwQ0FBMEMsbUJBQU8sQ0FBQyx3RUFBb0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZEO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQSxrREFBa0QsZ0JBQWdCO0FBQ2xFLHNCQUFzQjs7Ozs7Ozs7Ozs7QUMzRFQ7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELCtDQUErQyxtQkFBTyxDQUFDLGtGQUF5QjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBLHVEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FLGtCQUFlOzs7Ozs7Ozs7OztBQ3JERjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9DQUFvQyxtQkFBTyxDQUFDLG1FQUF1QjtBQUNuRSwwQ0FBMEMsbUJBQU8sQ0FBQyx3RUFBb0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDakRGO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsK0NBQStDLG1CQUFPLENBQUMsa0ZBQXlCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZ0RBQWdELEdBQUcsVUFBVTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ25FRjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsbUJBQU8sQ0FBQyxnSEFBNEM7QUFDN0UsOENBQThDLG1CQUFPLENBQUMsMEhBQWlEO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDN0RGO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQzFCRjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3Q0FBd0MsbUJBQU8sQ0FBQyxrSEFBNkM7QUFDN0YsMENBQTBDLG1CQUFPLENBQUMsc0hBQStDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUMzREY7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQkFBTyxDQUFDLCtGQUFtQztBQUMzRixpREFBaUQsbUJBQU8sQ0FBQyxpR0FBb0M7QUFDN0YsbURBQW1ELG1CQUFPLENBQUMscUdBQXNDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNyQkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7OztVQzNCZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9pbmZvcm1hdGlvbkNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9pbmZvcm1hdGlvbkNhcmRHcm91cC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL291cl90ZWFtX3NlY3Rpb24vdGVhbU1lbWJlckNhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9vdXJfdGVhbV9zZWN0aW9uL3RlYW1NZW1iZXJDYXJkR3JvdXAudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9zdXBwb3J0ZXJzX3NlY3Rpb24vc3VwcG9ydGVyQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJzR3JvdXAudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvZXhlY3V0aW9uL291clRlYW1TZWN0aW9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9leGVjdXRpb24vcHJvamVjdHNTZWN0aW9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9leGVjdXRpb24vc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L3Rvb2xzL2h0bWxUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC90b29scy9zdHJpbmdUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogRm9yIGluZm9ybWF0aW9uIGNhcmQgc3RhbmRhcmRpemF0aW9uLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIEluZm9ybWF0aW9uQ2FyZCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvbiB0aGUgY2FyZC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBpbWFnZSBvbiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZUxpbmspIHtcbiAgICAgICAgLyoqIFRoZSBsaW5rL3BhdGggdG8gdGhlIGNhcmQncyBpbWFnZS4gQ2FuIHNlcnZlIGFzIGEgcHJvZmlsZSBwaWMuKi9cbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBcIi4vaW1hZ2VzL2RlZmF1bHRfcGZwLnBuZ1wiOyAvLyBEZWZhdWx0LlxuICAgICAgICAvLyBJZiB0aGUgbmFtZSBpcyBibGFuaywgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBuYW1lIGNhbm5vdCBiZSBibGFuay5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyBJZiB0aGUgaW1hZ2UgbGluayBpcyBub3QgYmxhbmssIHJlcGxhY2UgaXQuXG4gICAgICAgIGlmICghc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsoaW1hZ2VMaW5rKSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBpbWFnZUxpbms7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJbmZvcm1hdGlvbkNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmluZ1Rvb2xzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2xzL3N0cmluZ1Rvb2xzXCIpKTtcbi8qKiBIb2xkcyBtdWx0aXBsZSBpbmZvcm1hdGlvbiBjYXJkcy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNsYXNzIEluZm9ybWF0aW9uQ2FyZEdyb3VwIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYXJkIGdyb3VwLlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgY2FyZCB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gSWYgdGhlIG5hbWUgaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICAvLyBJZiB0aGUgZGVzY3JpcHRpb24gaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSW5mb3JtYXRpb25DYXJkR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGVhbU1lbWJlckNhcmQgPSB2b2lkIDA7XG5jb25zdCBodG1sVG9vbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvaHRtbFRvb2xzXCIpKTtcbmNvbnN0IGluZm9ybWF0aW9uQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmZvcm1hdGlvbkNhcmRcIikpO1xuLyoqIEhvbGRzIGFuZCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCBhIHRlYW0gbWVtYmVyLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgVGVhbU1lbWJlckNhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5kZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9uIHRoZSB0ZWFtIG1lbWJlciBjYXJkLlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIGltYWdlIG9uIHRoZSB0ZWFtIG1lbWJlciBjYXJkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaywgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaW1hZ2VMaW5rKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGF0IGhvbGRzIHRoZSBjYXJkLlxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGltYWdlIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGh0bWxUb29sc18xLmRlZmF1bHQuYnVpbGRJbWFnZUVsZW1lbnQodGhpcy5pbWFnZUxpbmssIFwiaW1hZ2VcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUgZWxlbWVudC5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBCdWlsZCB0aGUgbWFpbiBkaXYuXG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gbWFpbkRpdjtcbiAgICB9XG59XG5fYSA9IFRlYW1NZW1iZXJDYXJkO1xuLyoqIFRoZSBjbGFzcyBuYW1lIHByZWZpeCB0byBkaWZmZXJlbnRpYXRlIHRoZSBlbGVtZW50cyBmcm9tIG90aGVyIGVsZW1lbnRzLiAqL1xuVGVhbU1lbWJlckNhcmQuQ0xBU1NfUFJFRklYID0gXCJ0ZWFtTWVtYmVyQ2FyZFwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdiBvZiB0aGUgY2FyZC4gKi9cblRlYW1NZW1iZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1NYWluRGl2YDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBlbGVtZW50LiAqL1xuVGVhbU1lbWJlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1OYW1lYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaW1hZ2UgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfUltYWdlYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZGVzY3JpcHRpb24gZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfURlc2NyaXB0aW9uYDtcbmV4cG9ydHMuVGVhbU1lbWJlckNhcmQgPSBUZWFtTWVtYmVyQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkR3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkR3JvdXBcIikpO1xuLyoqIEhvbGRzIG11bHRpcGxlIHRlYW0gbWVtYmVyIGNhcmRzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgVGVhbU1lbWJlckNhcmRHcm91cCBleHRlbmRzIGluZm9ybWF0aW9uQ2FyZEdyb3VwXzEuZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdGVhbSBtZW1iZXIgY2FyZCBncm91cC5cbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0ZWFtIG1lbWJlciBjYXJkIGdyb3VwLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZEdyb3VwLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBjYXJkIGhvbGRlciBkaXYuXG4gICAgICAgIGNvbnN0IGNhcmRIb2xkZXJEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZEhvbGRlckRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZEdyb3VwLkNBUkRfSE9MREVSX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goY2FyZCA9PiBjYXJkSG9sZGVyRGl2RWxlbWVudC5hcHBlbmRDaGlsZChjYXJkLmJ1aWxkKCkpKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG1haW4gZGl2LlxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjYXJkSG9sZGVyRGl2RWxlbWVudCk7XG4gICAgICAgIHJldHVybiBtYWluRGl2O1xuICAgIH1cbn1cbl9hID0gVGVhbU1lbWJlckNhcmRHcm91cDtcbi8qKiBUaGUgcHJlZml4IG9mIHRoZSBodG1sIGVsZW1lbnQgY2xhc3MgbmFtZXMgaW4gdGhpcyBjbGFzcy4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuQ0xBU1NfUFJFRklYID0gXCJ0ZWFtTWVtYmVyQ2FyZEdyb3VwXCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2IGh0bWwgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfU1haW5EaXZgO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBuYW1lIGh0bWwgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1OYW1lYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZGVzY3JpcHRpb24gaHRtbCBlbGVtZW50LiAqL1xuVGVhbU1lbWJlckNhcmRHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1EZXNjcmlwdGlvbmA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRpdiB0aGF0IGhvbGRzIHRoZSBpbmZvcm1hdGlvbiBjYXJkcy4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuQ0FSRF9IT0xERVJfRElWX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1DYXJkSG9sZGVyRGl2YDtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlYW1NZW1iZXJDYXJkR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGh0bWxUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9odG1sVG9vbHNcIikpO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZm9ybWF0aW9uQ2FyZFwiKSk7XG4vKiogQ3JlYXRlcyBhIHN1cHBvcnRlciBjYXJkLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlckNhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5kZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdXBwb3J0ZXIuXG4gICAgICogQHBhcmFtIGltYWdlTGluayBUaGUgcGF0aCBvciBsaW5rIHRvIHRoZSBzdXBwb3J0ZXIncyBpbWFnZS5cbiAgICAgKiBAcGFyYW0gZG9uYXRpb25BbW91bnRVU0QgVGhlIGRvbmF0aW9uIGFtb3VudCBvZiB0aGUgc3VwcG9ydGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaywgZG9uYXRpb25BbW91bnRVU0QpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaW1hZ2VMaW5rKTtcbiAgICAgICAgdGhpcy5kb25hdGlvbkFtb3VudFVTRCA9IGRvbmF0aW9uQW1vdW50VVNEO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyBhIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSBlbnRpcmUgY2FyZC5cbiAgICAgKlxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgbmFtZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBpbWFnZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBodG1sVG9vbHNfMS5kZWZhdWx0LmJ1aWxkSW1hZ2VFbGVtZW50KHRoaXMuaW1hZ2VMaW5rLCBcImltYWdlXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGh0bWwgbWFpbiBkaXYgZWxlbWVudC5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtYWluIGRpdi5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2LiAqL1xuU3VwcG9ydGVyQ2FyZC5NQUlOX0RJVl9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmRNYWluRGl2XCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG5hbWUgZWxlbWVudC4gKi9cblN1cHBvcnRlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZE5hbWVcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaW1hZ2UgZWxlbWVudC4gKi9cblN1cHBvcnRlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUgPSBcInN1cHBvcnRlckNhcmRJbWFnZVwiO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3VwcG9ydGVyQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkR3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkR3JvdXBcIikpO1xuLyoqIEhvbGRzIHN1cHBvcnRlciBjYXJkcy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdXBwb3J0ZXJzR3JvdXAgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRHcm91cF8xLmRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlY3Rpb24uXG4gICAgICogQHBhcmFtIGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VjdGlvbi5cbiAgICAgKiBAcGFyYW0gcGFyZW50RGl2IFRoZSBkaXYgdG8gYXBwZW5kIHRoaXMgc2VjdGlvbiB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBzdXBlcihuYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICB9XG4gICAgLyoqIEFkZHMgYSBzdXBwb3J0ZXIgY2FyZCB0byB0aGUgc3VwcG9ydGVycyBzZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcmRcbiAgICAgKi9cbiAgICBhZGQoY2FyZCkge1xuICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIC8qKiBCdWlsZHMgdGhlIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgZGVzY3JpcHRpb24uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyc0dyb3VwLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRpdiB0aGF0IGhvbGRzIHN1cHBvcnRlciBjYXJkcy5cbiAgICAgICAgY29uc3Qgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN1cHBvcnRlckNhcmRIb2xkZXJEaXYuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuU1VQUE9SVEVSX0NBUkRfSE9MREVSX0NMQVNTTkFNRSk7XG4gICAgICAgIHN1cHBvcnRlckNhcmRIb2xkZXJEaXYuY2xhc3NMaXN0LmFkZChgJHtTdXBwb3J0ZXJzR3JvdXAuU1VQUE9SVEVSX0NBUkRfSE9MREVSX0NMQVNTTkFNRX0tJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgc3VwcG9ydGVycyBjYXJkcy5cbiAgICAgICAgLy8gQWRkIGVhY2ggY2FyZCB0byB0aGUgZ3JvdXBEaXYuXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNhcmRzKSB7XG4gICAgICAgICAgICBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2LmFwcGVuZENoaWxkKHRoaXMuY2FyZHNbaV0uYnVpbGQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQnVpbGQgdGhlIG1haW5EaXYuXG4gICAgICAgIGNvbnN0IGdyb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZ3JvdXBEaXYuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgICAgICBncm91cERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICBncm91cERpdi5hcHBlbmRDaGlsZChzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwRGl2O1xuICAgIH1cbn1cbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYuICovXG5TdXBwb3J0ZXJzR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBNYWluRGl2XCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRpdiB0aGF0IGhvbGRzIHRoZSBzdXBwb3J0ZXIgY2FyZHMuICovXG5TdXBwb3J0ZXJzR3JvdXAuU1VQUE9SVEVSX0NBUkRfSE9MREVSX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwQ2FyZEhvbGRlckRpdlwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzZWN0aW9uJ3MgbmFtZSBodG1sIGVsZW1lbnQuICovXG5TdXBwb3J0ZXJzR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwTmFtZVwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzZWN0aW9uJ3MgZGVzY3JpcHRpb24gaHRtbCBlbGVtZW50LlMgKi9cblN1cHBvcnRlcnNHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyc0dyb3VwRGVzY3JpcHRpb25cIjtcbmV4cG9ydHMuZGVmYXVsdCA9IFN1cHBvcnRlcnNHcm91cDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0ZWFtTWVtYmVyQ2FyZF8xID0gcmVxdWlyZShcIi4uL2NsYXNzZXMvb3VyX3RlYW1fc2VjdGlvbi90ZWFtTWVtYmVyQ2FyZFwiKTtcbmNvbnN0IHRlYW1NZW1iZXJDYXJkR3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY2xhc3Nlcy9vdXJfdGVhbV9zZWN0aW9uL3RlYW1NZW1iZXJDYXJkR3JvdXBcIikpO1xuLyoqIEJ1aWxkcyB0aGUgJ291ciB0ZWFtJyBzZWN0aW9uLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIE91clRlYW1TZWN0aW9uQnVpbGRlciB7XG4gICAgLyoqIEJ1aWxkcyB0aGUgJ291ciB0ZWFtJyBzZWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjYXJkIGhvbGRlci5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRIb2xkZXJEaXZOYW1lID0gXCJvdXJUZWFtU2VjdGlvblwiO1xuICAgICAgICAgICAgY29uc3QgY2FyZEhvbGRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRIb2xkZXJEaXZOYW1lKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZGV2ZWxvcGVyIHRlYW0gZ3JvdXAuXG4gICAgICAgICAgICBjb25zdCBkZXZUZWFtR3JvdXAgPSBuZXcgdGVhbU1lbWJlckNhcmRHcm91cF8xLmRlZmF1bHQoXCJEZXZlbG9wbWVudCBUZWFtXCIsIFwiUGVvcGxlIHRoYXQgZGlyZWN0bHkgaW50ZXJhY3Qgd2l0aCB0aGUgcHJvZ3JhbW1pbmcgb2YgRENPIHByb2plY3RzLlwiKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FyZCB0byB0aGUgZGV2ZWxvcGVyIGdyb3VwLlxuICAgICAgICAgICAgY29uc3QgZGV2VGVhbUNhcmRzID0gW1xuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiWWlwbWFuXCIsIFwiXCIsIFwiRENPIFByb2plY3QgTGVhZFwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlRhbGx5XCIsIFwiXCIsIFwiUHJvZ3JhbW1lcjogRENPIEdQVCAmIFBsYXRvb25Gc20uXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiRmx1ZmZ5XCIsIFwiXCIsIFwiUHJvZ3JhbW1lcjogRENPIENvbXN5c1wiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIkFsdGVyXCIsIFwiXCIsIFwiUHJvZ3JhbW1lcjogRENPIEVDTyAmIFdlYnBhZ2UsIFdlYiBTZWN1cml0eVwiKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBkZXZUZWFtR3JvdXAuY2FyZHMgPSBkZXZUZWFtQ2FyZHM7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbnRyaWJ1dG9ycyBncm91cC5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyaWJ1dG9yc0dyb3VwID0gbmV3IHRlYW1NZW1iZXJDYXJkR3JvdXBfMS5kZWZhdWx0KFwiQ29udHJpYnV0b3JzXCIsIFwiVGVzdGVycywgQWR2aXNvcnMsIERlc2lnbmVycyBhbmQgTW9yZS5cIik7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGNhcmRzIHRvIHRoZSBjb250cmlidXRvcnMgZ3JvdXAuXG4gICAgICAgICAgICBjb25zdCBjb250cmlidXRvcnNUZWFtQ2FyZHMgPSBbXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJQYXBhcmVhcFwiLCBcIlwiLCBcIkhlYWRsZXNzIENsaWVudCwgRGVidWcgYW5kIENvZGUgQWR2aXNvclwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIk15UGFsRGVlYnNcIiwgXCJcIiwgXCJJZGVhIEFuZCBEZXNpZ25cIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJXb29keVwiLCBcIlwiLCBcIk1pbGl0YXJ5IEFkdmlzb3JcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJQYWdhblwiLCBcIlwiLCBcIlByb21vLCBGZWVkYmFjaywgVGVzdGluZ1wiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIkthcm1ha3V0XCIsIFwiXCIsIFwiTGFyZ2UgU2NhbGUgVGVzdGluZyBBbmQgUHJvbW9cIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJTYW1pblwiLCBcIlwiLCBcIkdQVCBBZHZpY2VcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJCcnVubyAmIE1jc2VsbGVyaWVcIiwgXCJcIiwgXCJMb25nIFRlcm0gVGVzdGluZyAmIE1vcmFsIFN1cHBvcnRcIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJOdXJzaWZlclwiLCBcIlwiLCBcIk51dHJpdGlvbmFsIFNwZWNpYWxpc3RcIiksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29udHJpYnV0b3JzR3JvdXAuY2FyZHMgPSBjb250cmlidXRvcnNUZWFtQ2FyZHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250cmlidXRvcnNHcm91cC5idWlsZCgpKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgYnVpbHQgZ3JvdXBzIHRvIHRoZSBkaXYuXG4gICAgICAgICAgICBjYXJkSG9sZGVyRGl2LmFwcGVuZENoaWxkKGRldlRlYW1Hcm91cC5idWlsZCgpKTtcbiAgICAgICAgICAgIGNhcmRIb2xkZXJEaXYuYXBwZW5kQ2hpbGQoY29udHJpYnV0b3JzR3JvdXAuYnVpbGQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE91clRlYW1TZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQnVpbGRzIHRoZSBwcm9qZWN0cyBzZWN0aW9uLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgUHJvamVjdHNTZWN0aW9uQnVpbGRlciB7XG4gICAgLyoqIEJ1aWxkcyB0aGUgcHJvamVjdHMgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqIEBhdXRob3IgQWx0ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgcHJvamVjdHMgc2VjdGlvbi5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvamVjdHNTZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdXBwb3J0ZXJDYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlckNhcmRcIikpO1xuY29uc3Qgc3VwcG9ydGVyc0dyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NsYXNzZXMvc3VwcG9ydGVyc19zZWN0aW9uL3N1cHBvcnRlcnNHcm91cFwiKSk7XG4vKiogQnVpbGRzIHRoZSBpbmRleCBwYWdlcydzIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlciB7XG4gICAgLyoqIEJ1aWxkcyB0aGUgaW5kZXggcGFnZXMncyBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHN1cHBvcnRlcnMgc2VjdGlvblxuICAgICAgICAgICAgY29uc3Qgc3VwcG9ydGVyc1NlY3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cHBvcnRlcnNTZWN0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlcnNTZWN0aW9uRGl2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic3VwcG9ydGVycyBzZWN0aW9uIGlzIG51bGwuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBncm91cHMuXG4gICAgICAgICAgICBjb25zdCBncm91cDEgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIlBsYXRpbnVtXCIsIFwiTm90aGluZyB3b3VsZCBiZSBwb3NzaWJsZSB3aXRob3V0IG91ciBncmVhdGVzdCBkb25hdG9ycy5cIik7XG4gICAgICAgICAgICBncm91cDEuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIllpcG1hblwiLCBcIlwiLCAxMDAwMCkpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAyID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJCcm9uemVcIiwgXCJCcm9uemUgc3VwcG9ydGVycy5cIik7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBjb25zdCBncm91cDMgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIkdvbGRcIiwgXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgZ3JvdXAzLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJUZXN0XCIsIFwiXCIsIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwNCA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiU2lsdmVyXCIsIFwidGVzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwNSA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiQmFzaWNcIiwgXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXA2ID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJNaWNyb1wiLCBcInRlc3RcIik7XG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgZ3JvdXBzLlxuICAgICAgICAgICAgY29uc3QgZ3JvdXBzVG9CZUJ1aWx0ID0gW1xuICAgICAgICAgICAgICAgIGdyb3VwMS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIGdyb3VwMi5idWlsZCgpLFxuICAgICAgICAgICAgICAgIGdyb3VwMy5idWlsZCgpLFxuICAgICAgICAgICAgICAgIGdyb3VwNC5idWlsZCgpLFxuICAgICAgICAgICAgICAgIGdyb3VwNS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIGdyb3VwNi5idWlsZCgpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgZ3JvdXBzIHRvIHRoZSBwYXJlbnQgZGl2LlxuICAgICAgICAgICAgZ3JvdXBzVG9CZUJ1aWx0LmZvckVhY2goZ3JvdXAgPT4gc3VwcG9ydGVyc1NlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZ3JvdXApKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogVGhlIG1haW4gZmlsZSBmb3IgdGhlIGluZGV4IHBhZ2UuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICovXG5jb25zdCBvdXJUZWFtU2VjdGlvbkJ1aWxkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9leGVjdXRpb24vb3VyVGVhbVNlY3Rpb25CdWlsZGVyXCIpKTtcbmNvbnN0IHByb2plY3RzU2VjdGlvbkJ1aWxkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9leGVjdXRpb24vcHJvamVjdHNTZWN0aW9uQnVpbGRlclwiKSk7XG5jb25zdCBzdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9leGVjdXRpb24vc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyXCIpKTtcbi8vIEFzeW5jaHJvbm91c2x5IGJ1aWxkIHRoZSB3ZWJwYWdlLlxuUHJvbWlzZS5hbGwoW1xuICAgIC8vIEJ1aWxkIHRoZSAncHJvamVjdHMnIHNlY3Rpb24uXG4gICAgcHJvamVjdHNTZWN0aW9uQnVpbGRlcl8xLmRlZmF1bHQuYnVpbGQoKSxcbiAgICAvLyBCdWlsZCB0aGUgJ291ciB0ZWFtJyBzZWN0aW9uLlxuICAgIG91clRlYW1TZWN0aW9uQnVpbGRlcl8xLmRlZmF1bHQuYnVpbGQoKSxcbiAgICAvLyBCdWlsZCB0aGUgc3VwcG9ydGVycyBzZWN0aW9uLlxuICAgIHN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlcl8xLmRlZmF1bHQuYnVpbGQoKVxuXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBDb250YWlucyB1c2VmdWwgSFRNTCB0b29scy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBIVE1MVG9vbHMge1xuICAgIC8qKiBSZXR1cm5zIGEgbmV3IGd0bWwgaW1nIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3JjIFRoZSBzb3VyY2Ugb2YgdGhlIGltYWdlLlxuICAgICAqIEBwYXJhbSBhbHQgVGhlIGFsdCBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGRJbWFnZUVsZW1lbnQoc3JjLCBhbHQpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgaW1hZ2VFbGVtZW50LmFsdCA9IGFsdDtcbiAgICAgICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIVE1MVG9vbHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBDb250YWlucyB1c2VmdWwgc3RyaW5nIHRvb2wgZnVuY3Rpb25zLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN0cmluZ1Rvb2xzIHtcbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc09ubHlTcGFjZXMoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKC9eICskLykudGVzdChzdHJpbmcpO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgaXMgb2YgbGVuZ3RoIDAgb3IgY29udGFpbnMgT05MWSBvbmUgb3IgbW9yZSBzcGFjZXMuXG4gICAgICogUmV0dXJucyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0YXRpYyBpc0JsYW5rKHN0cmluZykge1xuICAgICAgICByZXR1cm4gKHN0cmluZy5sZW5ndGggPT09IDAgfHwgdGhpcy5pc09ubHlTcGFjZXMoc3RyaW5nKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyaW5nVG9vbHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMvanMvaW5kZXgvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=