"use strict";
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
    constructor(name, imageLink) {
        super(name, imageLink);
    }
    /** Returns the html div element that holds the card.
     *
     * @returns
     */
    build() {
        // Build the name element.
        const nameElement = document.createElement("h1");
        nameElement.innerText = this.name;
        nameElement.classList.add(TeamMemberCard.NAME_ELEMENT_CLASSNAME);
        // Build the image element.
        const imageElement = htmlTools_1.HTMLTools.buildImageElement(this.imageLink, "image");
        imageElement.classList.add(TeamMemberCard.IMAGE_ELEMENT_CLASSNAME);
        // Build the main div.
        const mainDiv = document.createElement("div");
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(imageElement);
        return mainDiv;
    }
}
/** The class name of the name element. */
TeamMemberCard.NAME_ELEMENT_CLASSNAME = "teamMemberCardName";
/** The class name of the image element. */
TeamMemberCard.IMAGE_ELEMENT_CLASSNAME = "teameMemberImage";
exports.TeamMemberCard = TeamMemberCard;
