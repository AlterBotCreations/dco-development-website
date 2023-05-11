import StringTools from "../tools/stringTools";

/** For information card standardization.
 * 
 * @author Alter
 * 
 */
export abstract class InformationCard {

    /** The name of the card. */
    name: string;

    /** The link/path to the card's image. Can serve as a profile pic.*/
    imageLink: string = "./default_pfp.png"; // Default.

    /**
     * 
     * @param name The name on the card.
     * @param imageLink The image on the card.
     */
    constructor(name: string, imageLink: string) {
        // If the name is blank, throw an error.
        if (StringTools.isBlank(name)) {
            throw new Error(`name cannot be blank.`);
        } else if (StringTools.isBlank(imageLink)) {
            throw new Error(`imageLink cannot be blank.`);
        }

        this.name = name;
        this.imageLink = imageLink;
    }

    /** Returns the div that holds the card.
     * 
     */
    abstract build(): HTMLDivElement;

}