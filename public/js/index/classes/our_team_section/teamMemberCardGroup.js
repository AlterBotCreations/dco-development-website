"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const informationCardGroup_1 = __importDefault(require("../informationCardGroup"));
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
exports.default = TeamMemberCardGroup;
