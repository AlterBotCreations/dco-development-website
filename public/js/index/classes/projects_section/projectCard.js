"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const htmlTools_1 = __importDefault(require("../../tools/htmlTools"));
const stringTools_1 = __importDefault(require("../../tools/stringTools"));
const informationCard_1 = __importDefault(require("../informationCard"));
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
exports.default = ProjectCard;
