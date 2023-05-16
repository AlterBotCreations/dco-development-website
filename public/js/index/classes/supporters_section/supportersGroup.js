"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const informationCardGroup_1 = __importDefault(require("../informationCardGroup"));
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
exports.default = SupportersGroup;
