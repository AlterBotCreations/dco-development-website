import HTMLTools from "../../tools/htmlTools";
import StringTools from "../../tools/stringTools";
import InformationCard from "../informationCard";


/** Displays a Project.
 * 
 * @author Alter
 */
export default class ProjectCard extends InformationCard {

    /** The prefix of each html class. */
    static readonly CLASS_PREFIX: string = "projectCard";

    /** The class name of the main div. */
    static readonly MAIN_DIV_CLASSNAME: string = `${this.CLASS_PREFIX}MainDiv`;

    /** The clas sname of the image element. */
    static readonly IMAGE_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Image`;

    /** The class name of the name element. */
    static readonly NAME_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Name`;

    /** The class name of the description element. */
    static readonly DESCRIPTION_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Description`;

    /** The description of the project. */
    description: string;

    /**
     * 
     * @param name The name of the project.
     * @param imageLink The link to the image of the project.
     * @param description The description of the project.
     */
    constructor(name: string, imageLink: string, description: string) {
        super(name, imageLink);

        // If the description is blank, throw an error.
        if (StringTools.isBlank(description)) {
            throw new Error(description);
        }

        this.description = description;
    }

    override build(): HTMLDivElement {

        // Build the image element.
        const imageElement: HTMLImageElement = HTMLTools.buildImageElement(this.imageLink, "image");
        imageElement.classList.add(ProjectCard.IMAGE_ELEMENT_CLASSNAME);

        // Build the name element.
        const nameElement: HTMLHeadingElement = document.createElement("h1");
        nameElement.classList.add(ProjectCard.NAME_ELEMENT_CLASSNAME);
        nameElement.innerText = this.name;

        // Build the description element.
        const descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.classList.add(ProjectCard.DESCRIPTION_ELEMENT_CLASSNAME)
        descriptionElement.innerText = this.description;

        // Build the main div.
        const mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.classList.add(ProjectCard.MAIN_DIV_CLASSNAME);
        mainDiv.appendChild(imageElement);
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(descriptionElement);

        return mainDiv;

    }
}