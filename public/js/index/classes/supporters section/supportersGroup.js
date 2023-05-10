"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringTools_1 = __importDefault(require("../../tools/stringTools"));
/** Holds supporter cards.
 *
 * @author Alter
 *
 */
class SupportersGroup {
    /**
     *
     * @param name The name of the section.
     * @param description The description of the section.
     * @param parentDiv The div to append this section to.
     */
    constructor(name, description, parentDiv) {
        // If the name is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error("name cannot be blank.");
        }
        // If the description is blank, throw an error.
        else if (stringTools_1.default.isBlank(description)) {
            throw new Error("description cannot be blank.");
        }
        this.cards = [];
        this.name = name;
        this.description = description;
        this.parentDiv = parentDiv;
        ;
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
        // Build the mainDiv.
        const groupDiv = document.createElement("div");
        groupDiv.appendChild(nameElement);
        groupDiv.appendChild(descriptionElement);
        // Loop through the supporters cards.
        // Add each card to the groupDiv.
        for (const i in this.cards) {
            groupDiv.appendChild(this.cards[i].build());
        }
        // Append the groupDiv to the parent div.
        this.parentDiv.appendChild(groupDiv);
    }
}
/** The class name of the section's name html element. */
SupportersGroup.NAME_ELEMENT_CLASSNAME = "supportersGroupName";
/** The class name of the section's description html element.S */
SupportersGroup.DESCRIPTION_ELEMENT_CLASSNAME = "supportersGroupDescription";
exports.default = SupportersGroup;
