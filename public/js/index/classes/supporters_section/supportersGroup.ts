import StringTools from "../../tools/stringTools";
import SupporterCard from "./supporterCard";

/** Holds supporter cards.
 * 
 * @author Alter
 * 
 */
export default class SupportersGroup {

    /** The class name of the main div. */
    static readonly MAIN_DIV_CLASSNAME: string = "supportersGroupMainDiv";

    /** The class name of the div that holds the supporter cards. */
    static readonly SUPPORTER_CARD_HOLDER_CLASSNAME: string = "supportersGroupCardHolderDiv";

    /** The class name of the section's name html element. */
    static readonly NAME_ELEMENT_CLASSNAME: string = "supportersGroupName";

    /** The class name of the section's description html element.S */
    static readonly DESCRIPTION_ELEMENT_CLASSNAME: string = "supportersGroupDescription";

    /** Holds the supporter cards. */
    cards: SupporterCard[];

    name: string;

    description: string;

    /** The parent div. */
    parentDiv: HTMLDivElement;

    /**
     * 
     * @param name The name of the section.
     * @param description The description of the section.
     * @param parentDiv The div to append this section to.
     */
    constructor(name: string, description: string, parentDiv: HTMLDivElement) {

        // If the name is blank, throw an error.
        if (StringTools.isBlank(name)) {
            throw new Error("name cannot be blank.");
        }

        // If the description is blank, throw an error.
        else if (StringTools.isBlank(description)) {
            throw new Error("description cannot be blank.");
        }

        this.cards = [];
        this.name = name;
        this.description = description;
        this.parentDiv = parentDiv;;
    }

    /** Adds a supporter card to the supporters section.
     * 
     * @param card 
     */
    add(card: SupporterCard) {
        this.cards.push(card);
    }

    /** Builds the section.
     * 
     */
    build() {

        // Build the name.
        const nameElement: HTMLHeadingElement = document.createElement("h2");
        nameElement.innerText = this.name;
        nameElement.classList.add(SupportersGroup.NAME_ELEMENT_CLASSNAME);

        // Build the description.
        const descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.innerText = this.description;
        descriptionElement.classList.add(SupportersGroup.DESCRIPTION_ELEMENT_CLASSNAME);

        // Build the div that holds supporter cards.
        const supporterCardHolderDiv: HTMLDivElement = document.createElement("div");
        supporterCardHolderDiv.classList.add(SupportersGroup.SUPPORTER_CARD_HOLDER_CLASSNAME);
        supporterCardHolderDiv.classList.add(`${SupportersGroup.SUPPORTER_CARD_HOLDER_CLASSNAME}-${this.name}`);

        // Loop through the supporters cards.
        // Add each card to the groupDiv.
        for (const i in this.cards) {
            supporterCardHolderDiv.appendChild(this.cards[i].build());
        }

        // Build the mainDiv.
        const groupDiv: HTMLDivElement = document.createElement("div");
        groupDiv.classList.add(SupportersGroup.MAIN_DIV_CLASSNAME);
        groupDiv.appendChild(nameElement);
        groupDiv.appendChild(descriptionElement);
        groupDiv.appendChild(supporterCardHolderDiv);

        // Append the groupDiv to the parent div.
        this.parentDiv.appendChild(groupDiv);
    }

}
