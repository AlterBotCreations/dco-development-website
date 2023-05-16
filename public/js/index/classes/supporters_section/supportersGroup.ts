import InformationCardGroup from "../informationCardGroup";
import SupporterCard from "./supporterCard";

/** Holds supporter cards.
 * 
 * @author Alter
 * 
 */
export default class SupportersGroup extends InformationCardGroup {

    /** The class name of the main div. */
    static readonly MAIN_DIV_CLASSNAME: string = "supportersGroupMainDiv";

    /** The class name of the div that holds the supporter cards. */
    static readonly SUPPORTER_CARD_HOLDER_CLASSNAME: string = "supportersGroupCardHolderDiv";

    /** The class name of the section's name html element. */
    static readonly NAME_ELEMENT_CLASSNAME: string = "supportersGroupName";

    /** The class name of the section's description html element.S */
    static readonly DESCRIPTION_ELEMENT_CLASSNAME: string = "supportersGroupDescription";

    /**
     * 
     * @param name The name of the section.
     * @param description The description of the section.
     * @param parentDiv The div to append this section to.
     */
    constructor(name: string, description: string) {
        super(name, description);
        this.cards = [];
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
    override build(): HTMLDivElement {

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

        return groupDiv;
    }

}
