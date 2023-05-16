import InformationCardGroup from "../informationCardGroup";

/** Holds multiple team member cards.
 * 
 * @author Alter
 */
export default class TeamMemberCardGroup extends InformationCardGroup {

    /** The prefix of the html element class names in this class. */
    static readonly CLASS_PREFIX: string = "teamMemberCardGroup";

    /** The class name of the main div html element. */
    static readonly MAIN_DIV_CLASSNAME: string = `${this.CLASS_PREFIX}MainDiv`;

    /** The class name of the name html element. */
    static readonly NAME_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Name`;

    /** The class name of the description html element. */
    static readonly DESCRIPTION_ELEMENT_CLASSNAME: string = `${this.CLASS_PREFIX}Description`;

    /** The class name of the div that holds the information cards. */
    static readonly CARD_HOLDER_DIV_CLASSNAME: string = `${this.CLASS_PREFIX}CardHolderDiv`;

    /**
     * 
     * @param name The name of the team member card group.
     * @param description The description of the team member card group.
     */
    constructor(name: string, description: string) {
        super(name, description);
    }

    override build(): HTMLDivElement {

        // Build the name element.
        const nameElement: HTMLHeadingElement = document.createElement("h1");
        nameElement.classList.add(TeamMemberCardGroup.NAME_ELEMENT_CLASSNAME);
        nameElement.innerText = this.name;

        // Build the description element.
        const descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.classList.add(TeamMemberCardGroup.DESCRIPTION_ELEMENT_CLASSNAME);
        descriptionElement.innerText = this.description;

        // Build the card holder div.
        const cardHolderDivElement: HTMLDivElement = document.createElement("div");
        cardHolderDivElement.classList.add(TeamMemberCardGroup.CARD_HOLDER_DIV_CLASSNAME);
        this.cards.forEach(card => cardHolderDivElement.appendChild(card.build()));

        // Build the main div.
        const mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.classList.add(TeamMemberCardGroup.MAIN_DIV_CLASSNAME);
        mainDiv.appendChild(nameElement);
        mainDiv.appendChild(descriptionElement);
        mainDiv.appendChild(cardHolderDivElement);

        return mainDiv;
    }

}