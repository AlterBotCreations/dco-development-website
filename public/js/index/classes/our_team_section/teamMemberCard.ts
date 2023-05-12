
import { HTMLTools } from "../../tools/htmlTools";
import { InformationCard } from "../informationCard";

/** Holds and displays information about a team member.
 * 
 * @author Alter
 */
export class TeamMemberCard extends InformationCard {

    /** The class name prefix to differentiate the elements from other elements. */
    static readonly CLASS_PREFIX: string = "teamMemberCard";

    /** The class name of the main div of the card. */
    static readonly MAIN_DIV_CLASSNAME: string = `${this.CLASS_PREFIX}MainDiv`;

    /** The class name of the name element. */
    static readonly NAME_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Name`;

    /** The class name of the image element. */
    static readonly IMAGE_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Image`;

    /** The class name of the description element. */
    static readonly DESCRIPTION_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Description`;

    /** The description of the team member. */
    description: string;

    /**
     * 
     * @param name The name on the team member card.
     * @param imageLink The image on the team member card.
     */
    constructor(name: string, imageLink: string, description: string) {
        super(name, imageLink);

        this.description = description;
    }

    /** Returns the html div element that holds the card.
     * 
     * @returns 
     */
    build(): HTMLDivElement {

        // Build the image element.
        const imageElement: HTMLImageElement = HTMLTools.buildImageElement(this.imageLink, "image");
        imageElement.classList.add(TeamMemberCard.IMAGE_ELEMENT_CLASSNAME);

        // Build the name element.
        const nameElement: HTMLHeadingElement = document.createElement("h1");
        nameElement.innerText = this.name;
        nameElement.classList.add(TeamMemberCard.NAME_ELEMENT_CLASSNAME);

        // Build the description element.
        const descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.classList.add(TeamMemberCard.DESCRIPTION_ELEMENT_CLASSNAME);
        descriptionElement.innerText = this.description;

        // Build the main div.
        const mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.classList.add(TeamMemberCard.MAIN_DIV_CLASSNAME);
        mainDiv.appendChild(imageElement);
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(descriptionElement);

        return mainDiv;

    }

}