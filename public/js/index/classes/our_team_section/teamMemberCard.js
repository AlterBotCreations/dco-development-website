"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCard = void 0;
const htmlTools_1 = require("../../tools/htmlTools");
const informationCard_1 = require("../informationCard");
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
