
import { HTMLTools } from "../../tools/htmlTools";
import { InformationCard } from "../informationCard";

/** Holds and displays information about a team member.
 * 
 * @author Alter
 */
export class TeamMemberCard extends InformationCard {

    /** The class name of the name element. */
    static readonly NAME_ELEMENT_CLASSNAME: string = "teamMemberCardName";

    /** The class name of the image element. */
    static readonly IMAGE_ELEMENT_CLASSNAME: string = "teameMemberImage";

    /**
     * 
     * @param name The name on the team member card.
     * @param imageLink The image on the team member card.
     */
    constructor(name: string, imageLink: string) {
        super(name, imageLink);
    }

    /** Returns the html div element that holds the card.
     * 
     * @returns 
     */
    build(): HTMLDivElement {

        // Build the name element.
        const nameElement: HTMLHeadingElement = document.createElement("h1");
        nameElement.innerText = this.name;
        nameElement.classList.add(TeamMemberCard.NAME_ELEMENT_CLASSNAME);

        // Build the image element.
        const imageElement: HTMLImageElement = HTMLTools.buildImageElement(this.imageLink, "image");
        imageElement.classList.add(TeamMemberCard.IMAGE_ELEMENT_CLASSNAME);

        // Build the main div.
        const mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(imageElement);

        return mainDiv;

    }

}