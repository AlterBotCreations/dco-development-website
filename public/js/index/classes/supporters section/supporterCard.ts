import StringTools from "../../tools/stringTools";

/** Creates a supporter card.
 * 
 * @author Alter
 * 
 */
export default class SupporterCard {

    /** The class name of the main div. */
    static readonly MAIN_DIV_CLASSNAME: string = "supporterCardMainDiv";

    /** The class name of the name element. */
    static readonly NAME_ELEMENT_CLASSNAME: string = "supporterCardName";

    /** The class name of the image element. */
    static readonly IMAGE_ELEMENT_CLASSNAME: string = "supporterCardImage";

    /** The name of the supporter. */
    name: string;

    /** The link/path to the supporter's image. Can serve as a profile pic.*/
    imageLink: string = "./default_pfp.png"; // Default.

    /** The amount the supporter donated in USD */
    donationAmountUSD: number;

    /**
     * 
     * @param name The name of the supporter.
     * @param imageLink The path or link to the supporter's image.
     * @param donationAmountUSD The donation amount of the supporter.
     */
    constructor(name: string, imageLink: string, donationAmountUSD: number) {
        // If the name is blank, throw an error.
        if (StringTools.isBlank(name)) {
            throw new Error(`name cannot be blank.`);
        }

        // If the donation amount is less than 1, throw an error.
        else if (donationAmountUSD <= 0) {
            throw new Error(`Invalid donationAmountUSD: ${donationAmountUSD}`);
        }

        this.name = name;
        this.imageLink = imageLink;
        this.donationAmountUSD = donationAmountUSD;
    }

    /** Returns a div that contains the entire card.
     * 
     */
    build(): HTMLDivElement {

        // Build the name element.
        const nameElement: HTMLHeadingElement = document.createElement("h3");
        nameElement.innerText = this.name;
        nameElement.classList.add(SupporterCard.NAME_ELEMENT_CLASSNAME);

        // Build the image element.
        const imageElement: HTMLImageElement = document.createElement("img");
        imageElement.src = this.imageLink;
        imageElement.alt = "image";
        imageElement.classList.add(SupporterCard.IMAGE_ELEMENT_CLASSNAME)

        // Build the html main div element.
        const div = document.createElement("div");
        div.classList.add(SupporterCard.MAIN_DIV_CLASSNAME);
        div.appendChild(imageElement);
        div.appendChild(nameElement);

        // Return the main div.
        return div;
    }

}