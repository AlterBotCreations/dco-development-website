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

/***/ "./public/js/index/classes/projects_section/projectCard.ts":
/*!*****************************************************************!*\
  !*** ./public/js/index/classes/projects_section/projectCard.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const htmlTools_1 = __importDefault(__webpack_require__(/*! ../../tools/htmlTools */ "./public/js/index/tools/htmlTools.ts"));
const stringTools_1 = __importDefault(__webpack_require__(/*! ../../tools/stringTools */ "./public/js/index/tools/stringTools.ts"));
const informationCard_1 = __importDefault(__webpack_require__(/*! ../informationCard */ "./public/js/index/classes/informationCard.ts"));
/** Displays a Project.
 *
 * @author Alter
 */
class ProjectCard extends informationCard_1.default {
    /**
     *
     * @param name The name of the project.
     * @param imageLink The link to the image of the project.
     * @param description The description of the project.
     */
    constructor(name, imageLink, description) {
        super(name, imageLink);
        // If the description is blank, throw an error.
        if (stringTools_1.default.isBlank(description)) {
            throw new Error(description);
        }
        this.description = description;
    }
    build() {
        // Build the image element.
        const imageElement = htmlTools_1.default.buildImageElement(this.imageLink, "image");
        imageElement.classList.add(ProjectCard.IMAGE_ELEMENT_CLASSNAME);
        // Build the name element.
        const nameElement = document.createElement("h1");
        nameElement.classList.add(ProjectCard.NAME_ELEMENT_CLASSNAME);
        nameElement.innerText = this.name;
        // Build the description element.
        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add(ProjectCard.DESCRIPTION_ELEMENT_CLASSNAME);
        descriptionElement.innerText = this.description;
        // Build the main div.
        const mainDiv = document.createElement("div");
        mainDiv.classList.add(ProjectCard.MAIN_DIV_CLASSNAME);
        mainDiv.appendChild(imageElement);
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(descriptionElement);
        return mainDiv;
    }
}
_a = ProjectCard;
/** The prefix of each html class. */
ProjectCard.CLASS_PREFIX = "projectCard";
/** The class name of the main div. */
ProjectCard.MAIN_DIV_CLASSNAME = `${_a.CLASS_PREFIX}MainDiv`;
/** The clas sname of the image element. */
ProjectCard.IMAGE_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Image`;
/** The class name of the name element. */
ProjectCard.NAME_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Name`;
/** The class name of the description element. */
ProjectCard.DESCRIPTION_ELEMENT_CLASSNAME = `${_a.CLASS_PREFIX}Description`;
exports["default"] = ProjectCard;


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
const projectCard_1 = __importDefault(__webpack_require__(/*! ../classes/projects_section/projectCard */ "./public/js/index/classes/projects_section/projectCard.ts"));
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
            // Get the div to append to.
            const divToAppendTo = document.getElementById("projectsCardHolder");
            // If the element is null, throw an error.
            if (divToAppendTo === null) {
                throw new Error(`divToAppendTo is null.`);
            }
            // Create the projectCards.
            const projectCardHTML = [
                new projectCard_1.default("DCO Operations", "", "A hardcore tactical realism milsim unit designed to test AI to its limits.").build(),
                new projectCard_1.default("DCO Platoon SFM", "", "Brings ARMA 3 to life with improvements the game's AI.").build(),
                new projectCard_1.default("The Command System", "", "A complete ARMA re-haul including multithreading, reworked AI, machine learning, commands, and animations.").build(),
                new projectCard_1.default("GPT Roleplay System", "", "Allows roleplaying with all AI in ARMA 3 using OpenAI's GPT-3.5 API. ").build(),
                new projectCard_1.default("Persistent Economy", "", "An interactive market system. ").build(),
            ];
            // Append the cards to the div.
            projectCardHTML.forEach(card => divToAppendTo.appendChild(card));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDM0JmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL2luZm9ybWF0aW9uQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL2luZm9ybWF0aW9uQ2FyZEdyb3VwLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2NsYXNzZXMvb3VyX3RlYW1fc2VjdGlvbi90ZWFtTWVtYmVyQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL291cl90ZWFtX3NlY3Rpb24vdGVhbU1lbWJlckNhcmRHcm91cC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL3Byb2plY3RzX3NlY3Rpb24vcHJvamVjdENhcmQudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvY2xhc3Nlcy9zdXBwb3J0ZXJzX3NlY3Rpb24vc3VwcG9ydGVyQ2FyZC50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJzR3JvdXAudHMiLCJ3ZWJwYWNrOi8vZGNvLXdlYnNpdGUvLi9wdWJsaWMvanMvaW5kZXgvZXhlY3V0aW9uL291clRlYW1TZWN0aW9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9leGVjdXRpb24vcHJvamVjdHNTZWN0aW9uQnVpbGRlci50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC9leGVjdXRpb24vc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyLnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzIiwid2VicGFjazovL2Rjby13ZWJzaXRlLy4vcHVibGljL2pzL2luZGV4L3Rvb2xzL2h0bWxUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS8uL3B1YmxpYy9qcy9pbmRleC90b29scy9zdHJpbmdUb29scy50cyIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Rjby13ZWJzaXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kY28td2Vic2l0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJpbmdUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi90b29scy9zdHJpbmdUb29sc1wiKSk7XG4vKiogRm9yIGluZm9ybWF0aW9uIGNhcmQgc3RhbmRhcmRpemF0aW9uLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIEluZm9ybWF0aW9uQ2FyZCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvbiB0aGUgY2FyZC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBpbWFnZSBvbiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZUxpbmspIHtcbiAgICAgICAgLyoqIFRoZSBsaW5rL3BhdGggdG8gdGhlIGNhcmQncyBpbWFnZS4gQ2FuIHNlcnZlIGFzIGEgcHJvZmlsZSBwaWMuKi9cbiAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBcIi4vaW1hZ2VzL2RlZmF1bHRfcGZwLnBuZ1wiOyAvLyBEZWZhdWx0LlxuICAgICAgICAvLyBJZiB0aGUgbmFtZSBpcyBibGFuaywgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBuYW1lIGNhbm5vdCBiZSBibGFuay5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyBJZiB0aGUgaW1hZ2UgbGluayBpcyBub3QgYmxhbmssIHJlcGxhY2UgaXQuXG4gICAgICAgIGlmICghc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsoaW1hZ2VMaW5rKSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUxpbmsgPSBpbWFnZUxpbms7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJbmZvcm1hdGlvbkNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmluZ1Rvb2xzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2xzL3N0cmluZ1Rvb2xzXCIpKTtcbi8qKiBIb2xkcyBtdWx0aXBsZSBpbmZvcm1hdGlvbiBjYXJkcy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNsYXNzIEluZm9ybWF0aW9uQ2FyZEdyb3VwIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYXJkIGdyb3VwLlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgY2FyZCB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gSWYgdGhlIG5hbWUgaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICAvLyBJZiB0aGUgZGVzY3JpcHRpb24gaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHJpbmdUb29sc18xLmRlZmF1bHQuaXNCbGFuayhkZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSW5mb3JtYXRpb25DYXJkR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGVhbU1lbWJlckNhcmQgPSB2b2lkIDA7XG5jb25zdCBodG1sVG9vbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvaHRtbFRvb2xzXCIpKTtcbmNvbnN0IGluZm9ybWF0aW9uQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmZvcm1hdGlvbkNhcmRcIikpO1xuLyoqIEhvbGRzIGFuZCBkaXNwbGF5cyBpbmZvcm1hdGlvbiBhYm91dCBhIHRlYW0gbWVtYmVyLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgVGVhbU1lbWJlckNhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5kZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9uIHRoZSB0ZWFtIG1lbWJlciBjYXJkLlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIGltYWdlIG9uIHRoZSB0ZWFtIG1lbWJlciBjYXJkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlTGluaywgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaW1hZ2VMaW5rKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyB0aGUgaHRtbCBkaXYgZWxlbWVudCB0aGF0IGhvbGRzIHRoZSBjYXJkLlxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBidWlsZCgpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGltYWdlIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGh0bWxUb29sc18xLmRlZmF1bHQuYnVpbGRJbWFnZUVsZW1lbnQodGhpcy5pbWFnZUxpbmssIFwiaW1hZ2VcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG5hbWUgZWxlbWVudC5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBCdWlsZCB0aGUgbWFpbiBkaXYuXG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoVGVhbU1lbWJlckNhcmQuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gbWFpbkRpdjtcbiAgICB9XG59XG5fYSA9IFRlYW1NZW1iZXJDYXJkO1xuLyoqIFRoZSBjbGFzcyBuYW1lIHByZWZpeCB0byBkaWZmZXJlbnRpYXRlIHRoZSBlbGVtZW50cyBmcm9tIG90aGVyIGVsZW1lbnRzLiAqL1xuVGVhbU1lbWJlckNhcmQuQ0xBU1NfUFJFRklYID0gXCJ0ZWFtTWVtYmVyQ2FyZFwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdiBvZiB0aGUgY2FyZC4gKi9cblRlYW1NZW1iZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1NYWluRGl2YDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBlbGVtZW50LiAqL1xuVGVhbU1lbWJlckNhcmQuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1OYW1lYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgaW1hZ2UgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLklNQUdFX0VMRU1FTlRfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfUltYWdlYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZGVzY3JpcHRpb24gZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfURlc2NyaXB0aW9uYDtcbmV4cG9ydHMuVGVhbU1lbWJlckNhcmQgPSBUZWFtTWVtYmVyQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkR3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkR3JvdXBcIikpO1xuLyoqIEhvbGRzIG11bHRpcGxlIHRlYW0gbWVtYmVyIGNhcmRzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgVGVhbU1lbWJlckNhcmRHcm91cCBleHRlbmRzIGluZm9ybWF0aW9uQ2FyZEdyb3VwXzEuZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdGVhbSBtZW1iZXIgY2FyZCBncm91cC5cbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0ZWFtIG1lbWJlciBjYXJkIGdyb3VwLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZEdyb3VwLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBjYXJkIGhvbGRlciBkaXYuXG4gICAgICAgIGNvbnN0IGNhcmRIb2xkZXJEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZEhvbGRlckRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChUZWFtTWVtYmVyQ2FyZEdyb3VwLkNBUkRfSE9MREVSX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goY2FyZCA9PiBjYXJkSG9sZGVyRGl2RWxlbWVudC5hcHBlbmRDaGlsZChjYXJkLmJ1aWxkKCkpKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG1haW4gZGl2LlxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFRlYW1NZW1iZXJDYXJkR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FKTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjYXJkSG9sZGVyRGl2RWxlbWVudCk7XG4gICAgICAgIHJldHVybiBtYWluRGl2O1xuICAgIH1cbn1cbl9hID0gVGVhbU1lbWJlckNhcmRHcm91cDtcbi8qKiBUaGUgcHJlZml4IG9mIHRoZSBodG1sIGVsZW1lbnQgY2xhc3MgbmFtZXMgaW4gdGhpcyBjbGFzcy4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuQ0xBU1NfUFJFRklYID0gXCJ0ZWFtTWVtYmVyQ2FyZEdyb3VwXCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG1haW4gZGl2IGh0bWwgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuTUFJTl9ESVZfQ0xBU1NOQU1FID0gYCR7X2EuQ0xBU1NfUFJFRklYfU1haW5EaXZgO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBuYW1lIGh0bWwgZWxlbWVudC4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1OYW1lYDtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZGVzY3JpcHRpb24gaHRtbCBlbGVtZW50LiAqL1xuVGVhbU1lbWJlckNhcmRHcm91cC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1EZXNjcmlwdGlvbmA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRpdiB0aGF0IGhvbGRzIHRoZSBpbmZvcm1hdGlvbiBjYXJkcy4gKi9cblRlYW1NZW1iZXJDYXJkR3JvdXAuQ0FSRF9IT0xERVJfRElWX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1DYXJkSG9sZGVyRGl2YDtcbmV4cG9ydHMuZGVmYXVsdCA9IFRlYW1NZW1iZXJDYXJkR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGh0bWxUb29sc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9odG1sVG9vbHNcIikpO1xuY29uc3Qgc3RyaW5nVG9vbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvc3RyaW5nVG9vbHNcIikpO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZm9ybWF0aW9uQ2FyZFwiKSk7XG4vKiogRGlzcGxheXMgYSBQcm9qZWN0LlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY2xhc3MgUHJvamVjdENhcmQgZXh0ZW5kcyBpbmZvcm1hdGlvbkNhcmRfMS5kZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LlxuICAgICAqIEBwYXJhbSBpbWFnZUxpbmsgVGhlIGxpbmsgdG8gdGhlIGltYWdlIG9mIHRoZSBwcm9qZWN0LlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2VMaW5rLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBzdXBlcihuYW1lLCBpbWFnZUxpbmspO1xuICAgICAgICAvLyBJZiB0aGUgZGVzY3JpcHRpb24gaXMgYmxhbmssIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoc3RyaW5nVG9vbHNfMS5kZWZhdWx0LmlzQmxhbmsoZGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBpbWFnZSBlbGVtZW50LlxuICAgICAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBodG1sVG9vbHNfMS5kZWZhdWx0LmJ1aWxkSW1hZ2VFbGVtZW50KHRoaXMuaW1hZ2VMaW5rLCBcImltYWdlXCIpO1xuICAgICAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChQcm9qZWN0Q2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFByb2plY3RDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkZXNjcmlwdGlvbiBlbGVtZW50LlxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoUHJvamVjdENhcmQuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gQnVpbGQgdGhlIG1haW4gZGl2LlxuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFByb2plY3RDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIG1haW5EaXY7XG4gICAgfVxufVxuX2EgPSBQcm9qZWN0Q2FyZDtcbi8qKiBUaGUgcHJlZml4IG9mIGVhY2ggaHRtbCBjbGFzcy4gKi9cblByb2plY3RDYXJkLkNMQVNTX1BSRUZJWCA9IFwicHJvamVjdENhcmRcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYuICovXG5Qcm9qZWN0Q2FyZC5NQUlOX0RJVl9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TWFpbkRpdmA7XG4vKiogVGhlIGNsYXMgc25hbWUgb2YgdGhlIGltYWdlIGVsZW1lbnQuICovXG5Qcm9qZWN0Q2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1JbWFnZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIG5hbWUgZWxlbWVudC4gKi9cblByb2plY3RDYXJkLk5BTUVfRUxFTUVOVF9DTEFTU05BTUUgPSBgJHtfYS5DTEFTU19QUkVGSVh9TmFtZWA7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQuICovXG5Qcm9qZWN0Q2FyZC5ERVNDUklQVElPTl9FTEVNRU5UX0NMQVNTTkFNRSA9IGAke19hLkNMQVNTX1BSRUZJWH1EZXNjcmlwdGlvbmA7XG5leHBvcnRzLmRlZmF1bHQgPSBQcm9qZWN0Q2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaHRtbFRvb2xzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL2h0bWxUb29sc1wiKSk7XG5jb25zdCBpbmZvcm1hdGlvbkNhcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5mb3JtYXRpb25DYXJkXCIpKTtcbi8qKiBDcmVhdGVzIGEgc3VwcG9ydGVyIGNhcmQuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgU3VwcG9ydGVyQ2FyZCBleHRlbmRzIGluZm9ybWF0aW9uQ2FyZF8xLmRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN1cHBvcnRlci5cbiAgICAgKiBAcGFyYW0gaW1hZ2VMaW5rIFRoZSBwYXRoIG9yIGxpbmsgdG8gdGhlIHN1cHBvcnRlcidzIGltYWdlLlxuICAgICAqIEBwYXJhbSBkb25hdGlvbkFtb3VudFVTRCBUaGUgZG9uYXRpb24gYW1vdW50IG9mIHRoZSBzdXBwb3J0ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2VMaW5rLCBkb25hdGlvbkFtb3VudFVTRCkge1xuICAgICAgICBzdXBlcihuYW1lLCBpbWFnZUxpbmspO1xuICAgICAgICB0aGlzLmRvbmF0aW9uQW1vdW50VVNEID0gZG9uYXRpb25BbW91bnRVU0Q7XG4gICAgfVxuICAgIC8qKiBSZXR1cm5zIGEgZGl2IHRoYXQgY29udGFpbnMgdGhlIGVudGlyZSBjYXJkLlxuICAgICAqXG4gICAgICovXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBuYW1lIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuYW1lRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoU3VwcG9ydGVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FKTtcbiAgICAgICAgLy8gQnVpbGQgdGhlIGltYWdlIGVsZW1lbnQuXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGh0bWxUb29sc18xLmRlZmF1bHQuYnVpbGRJbWFnZUVsZW1lbnQodGhpcy5pbWFnZUxpbmssIFwiaW1hZ2VcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlckNhcmQuSU1BR0VfRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgaHRtbCBtYWluIGRpdiBlbGVtZW50LlxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuICAgICAgICAvLyBSZXR1cm4gdGhlIG1haW4gZGl2LlxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn1cbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbWFpbiBkaXYuICovXG5TdXBwb3J0ZXJDYXJkLk1BSU5fRElWX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZE1haW5EaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgbmFtZSBlbGVtZW50LiAqL1xuU3VwcG9ydGVyQ2FyZC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJDYXJkTmFtZVwiO1xuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBpbWFnZSBlbGVtZW50LiAqL1xuU3VwcG9ydGVyQ2FyZC5JTUFHRV9FTEVNRU5UX0NMQVNTTkFNRSA9IFwic3VwcG9ydGVyQ2FyZEltYWdlXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBTdXBwb3J0ZXJDYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpbmZvcm1hdGlvbkNhcmRHcm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmZvcm1hdGlvbkNhcmRHcm91cFwiKSk7XG4vKiogSG9sZHMgc3VwcG9ydGVyIGNhcmRzLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqXG4gKi9cbmNsYXNzIFN1cHBvcnRlcnNHcm91cCBleHRlbmRzIGluZm9ybWF0aW9uQ2FyZEdyb3VwXzEuZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VjdGlvbi5cbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBzZWN0aW9uLlxuICAgICAqIEBwYXJhbSBwYXJlbnREaXYgVGhlIGRpdiB0byBhcHBlbmQgdGhpcyBzZWN0aW9uIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgIH1cbiAgICAvKiogQWRkcyBhIHN1cHBvcnRlciBjYXJkIHRvIHRoZSBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FyZFxuICAgICAqL1xuICAgIGFkZChjYXJkKSB7XG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcbiAgICB9XG4gICAgLyoqIEJ1aWxkcyB0aGUgc2VjdGlvbi5cbiAgICAgKlxuICAgICAqL1xuICAgIGJ1aWxkKCkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgbmFtZS5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIG5hbWVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuTkFNRV9FTEVNRU5UX0NMQVNTTkFNRSk7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkZXNjcmlwdGlvbi5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChTdXBwb3J0ZXJzR3JvdXAuREVTQ1JJUFRJT05fRUxFTUVOVF9DTEFTU05BTUUpO1xuICAgICAgICAvLyBCdWlsZCB0aGUgZGl2IHRoYXQgaG9sZHMgc3VwcG9ydGVyIGNhcmRzLlxuICAgICAgICBjb25zdCBzdXBwb3J0ZXJDYXJkSG9sZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdi5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5TVVBQT1JURVJfQ0FSRF9IT0xERVJfQ0xBU1NOQU1FKTtcbiAgICAgICAgc3VwcG9ydGVyQ2FyZEhvbGRlckRpdi5jbGFzc0xpc3QuYWRkKGAke1N1cHBvcnRlcnNHcm91cC5TVVBQT1JURVJfQ0FSRF9IT0xERVJfQ0xBU1NOQU1FfS0ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzdXBwb3J0ZXJzIGNhcmRzLlxuICAgICAgICAvLyBBZGQgZWFjaCBjYXJkIHRvIHRoZSBncm91cERpdi5cbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2FyZHMpIHtcbiAgICAgICAgICAgIHN1cHBvcnRlckNhcmRIb2xkZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5jYXJkc1tpXS5idWlsZCgpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCdWlsZCB0aGUgbWFpbkRpdi5cbiAgICAgICAgY29uc3QgZ3JvdXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBncm91cERpdi5jbGFzc0xpc3QuYWRkKFN1cHBvcnRlcnNHcm91cC5NQUlOX0RJVl9DTEFTU05BTUUpO1xuICAgICAgICBncm91cERpdi5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKHN1cHBvcnRlckNhcmRIb2xkZXJEaXYpO1xuICAgICAgICByZXR1cm4gZ3JvdXBEaXY7XG4gICAgfVxufVxuLyoqIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBtYWluIGRpdi4gKi9cblN1cHBvcnRlcnNHcm91cC5NQUlOX0RJVl9DTEFTU05BTUUgPSBcInN1cHBvcnRlcnNHcm91cE1haW5EaXZcIjtcbi8qKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZGl2IHRoYXQgaG9sZHMgdGhlIHN1cHBvcnRlciBjYXJkcy4gKi9cblN1cHBvcnRlcnNHcm91cC5TVVBQT1JURVJfQ0FSRF9IT0xERVJfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBDYXJkSG9sZGVyRGl2XCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNlY3Rpb24ncyBuYW1lIGh0bWwgZWxlbWVudC4gKi9cblN1cHBvcnRlcnNHcm91cC5OQU1FX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBOYW1lXCI7XG4vKiogVGhlIGNsYXNzIG5hbWUgb2YgdGhlIHNlY3Rpb24ncyBkZXNjcmlwdGlvbiBodG1sIGVsZW1lbnQuUyAqL1xuU3VwcG9ydGVyc0dyb3VwLkRFU0NSSVBUSU9OX0VMRU1FTlRfQ0xBU1NOQU1FID0gXCJzdXBwb3J0ZXJzR3JvdXBEZXNjcmlwdGlvblwiO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3VwcG9ydGVyc0dyb3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRlYW1NZW1iZXJDYXJkXzEgPSByZXF1aXJlKFwiLi4vY2xhc3Nlcy9vdXJfdGVhbV9zZWN0aW9uL3RlYW1NZW1iZXJDYXJkXCIpO1xuY29uc3QgdGVhbU1lbWJlckNhcmRHcm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGFzc2VzL291cl90ZWFtX3NlY3Rpb24vdGVhbU1lbWJlckNhcmRHcm91cFwiKSk7XG4vKiogQnVpbGRzIHRoZSAnb3VyIHRlYW0nIHNlY3Rpb24uXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgT3VyVGVhbVNlY3Rpb25CdWlsZGVyIHtcbiAgICAvKiogQnVpbGRzIHRoZSAnb3VyIHRlYW0nIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGNhcmQgaG9sZGVyLlxuICAgICAgICAgICAgY29uc3QgY2FyZEhvbGRlckRpdk5hbWUgPSBcIm91clRlYW1TZWN0aW9uXCI7XG4gICAgICAgICAgICBjb25zdCBjYXJkSG9sZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZEhvbGRlckRpdk5hbWUpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBkZXZlbG9wZXIgdGVhbSBncm91cC5cbiAgICAgICAgICAgIGNvbnN0IGRldlRlYW1Hcm91cCA9IG5ldyB0ZWFtTWVtYmVyQ2FyZEdyb3VwXzEuZGVmYXVsdChcIkRldmVsb3BtZW50IFRlYW1cIiwgXCJQZW9wbGUgdGhhdCBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBwcm9ncmFtbWluZyBvZiBEQ08gcHJvamVjdHMuXCIpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBjYXJkIHRvIHRoZSBkZXZlbG9wZXIgZ3JvdXAuXG4gICAgICAgICAgICBjb25zdCBkZXZUZWFtQ2FyZHMgPSBbXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJZaXBtYW5cIiwgXCJcIiwgXCJEQ08gUHJvamVjdCBMZWFkXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiVGFsbHlcIiwgXCJcIiwgXCJQcm9ncmFtbWVyOiBEQ08gR1BUICYgUGxhdG9vbkZzbS5cIiksXG4gICAgICAgICAgICAgICAgbmV3IHRlYW1NZW1iZXJDYXJkXzEuVGVhbU1lbWJlckNhcmQoXCJGbHVmZnlcIiwgXCJcIiwgXCJQcm9ncmFtbWVyOiBEQ08gQ29tc3lzXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiQWx0ZXJcIiwgXCJcIiwgXCJQcm9ncmFtbWVyOiBEQ08gRUNPICYgV2VicGFnZSwgV2ViIFNlY3VyaXR5XCIpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGRldlRlYW1Hcm91cC5jYXJkcyA9IGRldlRlYW1DYXJkcztcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY29udHJpYnV0b3JzIGdyb3VwLlxuICAgICAgICAgICAgY29uc3QgY29udHJpYnV0b3JzR3JvdXAgPSBuZXcgdGVhbU1lbWJlckNhcmRHcm91cF8xLmRlZmF1bHQoXCJDb250cmlidXRvcnNcIiwgXCJUZXN0ZXJzLCBBZHZpc29ycywgRGVzaWduZXJzIGFuZCBNb3JlLlwiKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY2FyZHMgdG8gdGhlIGNvbnRyaWJ1dG9ycyBncm91cC5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyaWJ1dG9yc1RlYW1DYXJkcyA9IFtcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlBhcGFyZWFwXCIsIFwiXCIsIFwiSGVhZGxlc3MgQ2xpZW50LCBEZWJ1ZyBhbmQgQ29kZSBBZHZpc29yXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiTXlQYWxEZWVic1wiLCBcIlwiLCBcIklkZWEgQW5kIERlc2lnblwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIldvb2R5XCIsIFwiXCIsIFwiTWlsaXRhcnkgQWR2aXNvclwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlBhZ2FuXCIsIFwiXCIsIFwiUHJvbW8sIEZlZWRiYWNrLCBUZXN0aW5nXCIpLFxuICAgICAgICAgICAgICAgIG5ldyB0ZWFtTWVtYmVyQ2FyZF8xLlRlYW1NZW1iZXJDYXJkKFwiS2FybWFrdXRcIiwgXCJcIiwgXCJMYXJnZSBTY2FsZSBUZXN0aW5nIEFuZCBQcm9tb1wiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIlNhbWluXCIsIFwiXCIsIFwiR1BUIEFkdmljZVwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIkJydW5vICYgTWNzZWxsZXJpZVwiLCBcIlwiLCBcIkxvbmcgVGVybSBUZXN0aW5nICYgTW9yYWwgU3VwcG9ydFwiKSxcbiAgICAgICAgICAgICAgICBuZXcgdGVhbU1lbWJlckNhcmRfMS5UZWFtTWVtYmVyQ2FyZChcIk51cnNpZmVyXCIsIFwiXCIsIFwiTnV0cml0aW9uYWwgU3BlY2lhbGlzdFwiKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb250cmlidXRvcnNHcm91cC5jYXJkcyA9IGNvbnRyaWJ1dG9yc1RlYW1DYXJkcztcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgYnVpbHQgZ3JvdXBzIHRvIHRoZSBkaXYuXG4gICAgICAgICAgICBjYXJkSG9sZGVyRGl2LmFwcGVuZENoaWxkKGRldlRlYW1Hcm91cC5idWlsZCgpKTtcbiAgICAgICAgICAgIGNhcmRIb2xkZXJEaXYuYXBwZW5kQ2hpbGQoY29udHJpYnV0b3JzR3JvdXAuYnVpbGQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE91clRlYW1TZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwcm9qZWN0Q2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGFzc2VzL3Byb2plY3RzX3NlY3Rpb24vcHJvamVjdENhcmRcIikpO1xuLyoqIEJ1aWxkcyB0aGUgcHJvamVjdHMgc2VjdGlvbi5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKi9cbmNsYXNzIFByb2plY3RzU2VjdGlvbkJ1aWxkZXIge1xuICAgIC8qKiBCdWlsZHMgdGhlIHByb2plY3RzIHNlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAYXV0aG9yIEFsdGVyXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIHByb2plY3RzIHNlY3Rpb24uXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRpdiB0byBhcHBlbmQgdG8uXG4gICAgICAgICAgICBjb25zdCBkaXZUb0FwcGVuZFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0NhcmRIb2xkZXJcIik7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyBudWxsLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmIChkaXZUb0FwcGVuZFRvID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBkaXZUb0FwcGVuZFRvIGlzIG51bGwuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHByb2plY3RDYXJkcy5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkSFRNTCA9IFtcbiAgICAgICAgICAgICAgICBuZXcgcHJvamVjdENhcmRfMS5kZWZhdWx0KFwiRENPIE9wZXJhdGlvbnNcIiwgXCJcIiwgXCJBIGhhcmRjb3JlIHRhY3RpY2FsIHJlYWxpc20gbWlsc2ltIHVuaXQgZGVzaWduZWQgdG8gdGVzdCBBSSB0byBpdHMgbGltaXRzLlwiKS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBwcm9qZWN0Q2FyZF8xLmRlZmF1bHQoXCJEQ08gUGxhdG9vbiBTRk1cIiwgXCJcIiwgXCJCcmluZ3MgQVJNQSAzIHRvIGxpZmUgd2l0aCBpbXByb3ZlbWVudHMgdGhlIGdhbWUncyBBSS5cIikuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBuZXcgcHJvamVjdENhcmRfMS5kZWZhdWx0KFwiVGhlIENvbW1hbmQgU3lzdGVtXCIsIFwiXCIsIFwiQSBjb21wbGV0ZSBBUk1BIHJlLWhhdWwgaW5jbHVkaW5nIG11bHRpdGhyZWFkaW5nLCByZXdvcmtlZCBBSSwgbWFjaGluZSBsZWFybmluZywgY29tbWFuZHMsIGFuZCBhbmltYXRpb25zLlwiKS5idWlsZCgpLFxuICAgICAgICAgICAgICAgIG5ldyBwcm9qZWN0Q2FyZF8xLmRlZmF1bHQoXCJHUFQgUm9sZXBsYXkgU3lzdGVtXCIsIFwiXCIsIFwiQWxsb3dzIHJvbGVwbGF5aW5nIHdpdGggYWxsIEFJIGluIEFSTUEgMyB1c2luZyBPcGVuQUkncyBHUFQtMy41IEFQSS4gXCIpLmJ1aWxkKCksXG4gICAgICAgICAgICAgICAgbmV3IHByb2plY3RDYXJkXzEuZGVmYXVsdChcIlBlcnNpc3RlbnQgRWNvbm9teVwiLCBcIlwiLCBcIkFuIGludGVyYWN0aXZlIG1hcmtldCBzeXN0ZW0uIFwiKS5idWlsZCgpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgY2FyZHMgdG8gdGhlIGRpdi5cbiAgICAgICAgICAgIHByb2plY3RDYXJkSFRNTC5mb3JFYWNoKGNhcmQgPT4gZGl2VG9BcHBlbmRUby5hcHBlbmRDaGlsZChjYXJkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFByb2plY3RzU2VjdGlvbkJ1aWxkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3VwcG9ydGVyQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJDYXJkXCIpKTtcbmNvbnN0IHN1cHBvcnRlcnNHcm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGFzc2VzL3N1cHBvcnRlcnNfc2VjdGlvbi9zdXBwb3J0ZXJzR3JvdXBcIikpO1xuLyoqIEJ1aWxkcyB0aGUgaW5kZXggcGFnZXMncyBzdXBwb3J0ZXJzIHNlY3Rpb24uXG4gKlxuICovXG5jbGFzcyBTdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXIge1xuICAgIC8qKiBCdWlsZHMgdGhlIGluZGV4IHBhZ2VzJ3Mgc3VwcG9ydGVycyBzZWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBzdXBwb3J0ZXJzIHNlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHN1cHBvcnRlcnNTZWN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXBwb3J0ZXJzU2VjdGlvblwiKTtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZXJzU2VjdGlvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN1cHBvcnRlcnMgc2VjdGlvbiBpcyBudWxsLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZ3JvdXBzLlxuICAgICAgICAgICAgY29uc3QgZ3JvdXAxID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJQbGF0aW51bVwiLCBcIk5vdGhpbmcgd291bGQgYmUgcG9zc2libGUgd2l0aG91dCBvdXIgZ3JlYXRlc3QgZG9uYXRvcnMuXCIpO1xuICAgICAgICAgICAgZ3JvdXAxLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJZaXBtYW5cIiwgXCJcIiwgMTAwMDApKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwMiA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiQnJvbnplXCIsIFwiQnJvbnplIHN1cHBvcnRlcnMuXCIpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgZ3JvdXAyLmFkZChuZXcgc3VwcG9ydGVyQ2FyZF8xLmRlZmF1bHQoXCJBbHRlclwiLCBcIlwiLCAxKSk7XG4gICAgICAgICAgICBncm91cDIuYWRkKG5ldyBzdXBwb3J0ZXJDYXJkXzEuZGVmYXVsdChcIkFsdGVyXCIsIFwiXCIsIDEpKTtcbiAgICAgICAgICAgIGdyb3VwMi5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiQWx0ZXJcIiwgXCJcIiwgMSkpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAzID0gbmV3IHN1cHBvcnRlcnNHcm91cF8xLmRlZmF1bHQoXCJHb2xkXCIsIFwidGVzdFwiKTtcbiAgICAgICAgICAgIGdyb3VwMy5hZGQobmV3IHN1cHBvcnRlckNhcmRfMS5kZWZhdWx0KFwiVGVzdFwiLCBcIlwiLCAyKSk7XG4gICAgICAgICAgICBjb25zdCBncm91cDQgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIlNpbHZlclwiLCBcInRlc3RcIik7XG4gICAgICAgICAgICBjb25zdCBncm91cDUgPSBuZXcgc3VwcG9ydGVyc0dyb3VwXzEuZGVmYXVsdChcIkJhc2ljXCIsIFwidGVzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwNiA9IG5ldyBzdXBwb3J0ZXJzR3JvdXBfMS5kZWZhdWx0KFwiTWljcm9cIiwgXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIGdyb3Vwcy5cbiAgICAgICAgICAgIGNvbnN0IGdyb3Vwc1RvQmVCdWlsdCA9IFtcbiAgICAgICAgICAgICAgICBncm91cDEuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDIuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDMuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDQuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDUuYnVpbGQoKSxcbiAgICAgICAgICAgICAgICBncm91cDYuYnVpbGQoKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGdyb3VwcyB0byB0aGUgcGFyZW50IGRpdi5cbiAgICAgICAgICAgIGdyb3Vwc1RvQmVCdWlsdC5mb3JFYWNoKGdyb3VwID0+IHN1cHBvcnRlcnNTZWN0aW9uRGl2LmFwcGVuZENoaWxkKGdyb3VwKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN1cHBvcnRlcnNTZWN0aW9uQnVpbGRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIFRoZSBtYWluIGZpbGUgZm9yIHRoZSBpbmRleCBwYWdlLlxuICpcbiAqIEBhdXRob3IgQWx0ZXJcbiAqL1xuY29uc3Qgb3VyVGVhbVNlY3Rpb25CdWlsZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZXhlY3V0aW9uL291clRlYW1TZWN0aW9uQnVpbGRlclwiKSk7XG5jb25zdCBwcm9qZWN0c1NlY3Rpb25CdWlsZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZXhlY3V0aW9uL3Byb2plY3RzU2VjdGlvbkJ1aWxkZXJcIikpO1xuY29uc3Qgc3VwcG9ydGVyc1NlY3Rpb25CdWlsZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZXhlY3V0aW9uL3N1cHBvcnRlcnNTZWN0aW9uQnVpbGRlclwiKSk7XG4vLyBBc3luY2hyb25vdXNseSBidWlsZCB0aGUgd2VicGFnZS5cblByb21pc2UuYWxsKFtcbiAgICAvLyBCdWlsZCB0aGUgJ3Byb2plY3RzJyBzZWN0aW9uLlxuICAgIHByb2plY3RzU2VjdGlvbkJ1aWxkZXJfMS5kZWZhdWx0LmJ1aWxkKCksXG4gICAgLy8gQnVpbGQgdGhlICdvdXIgdGVhbScgc2VjdGlvbi5cbiAgICBvdXJUZWFtU2VjdGlvbkJ1aWxkZXJfMS5kZWZhdWx0LmJ1aWxkKCksXG4gICAgLy8gQnVpbGQgdGhlIHN1cHBvcnRlcnMgc2VjdGlvbi5cbiAgICBzdXBwb3J0ZXJzU2VjdGlvbkJ1aWxkZXJfMS5kZWZhdWx0LmJ1aWxkKClcbl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQ29udGFpbnMgdXNlZnVsIEhUTUwgdG9vbHMuXG4gKlxuICogQGF1dGhvciBBbHRlclxuICpcbiAqL1xuY2xhc3MgSFRNTFRvb2xzIHtcbiAgICAvKiogUmV0dXJucyBhIG5ldyBndG1sIGltZyBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNyYyBUaGUgc291cmNlIG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAcGFyYW0gYWx0IFRoZSBhbHQgb2YgdGhlIGltYWdlLlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIGJ1aWxkSW1hZ2VFbGVtZW50KHNyYywgYWx0KSB7XG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIGltYWdlRWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIHJldHVybiBpbWFnZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSFRNTFRvb2xzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQ29udGFpbnMgdXNlZnVsIHN0cmluZyB0b29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBAYXV0aG9yIEFsdGVyXG4gKlxuICovXG5jbGFzcyBTdHJpbmdUb29scyB7XG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIE9OTFkgb25lIG9yIG1vcmUgc3BhY2VzLlxuICAgICAqIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPbmx5U3BhY2VzKHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgvXiArJC8pLnRlc3Qoc3RyaW5nKTtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIG9mIGxlbmd0aCAwIG9yIGNvbnRhaW5zIE9OTFkgb25lIG9yIG1vcmUgc3BhY2VzLlxuICAgICAqIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCbGFuayhzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIChzdHJpbmcubGVuZ3RoID09PSAwIHx8IHRoaXMuaXNPbmx5U3BhY2VzKHN0cmluZykpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmluZ1Rvb2xzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcHVibGljL2pzL2luZGV4L2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9