import StringTools from "../tools/stringTools";
import { InformationCard } from "./informationCard";

/** Holds multiple information cards.
 * 
 * @author Alter
 */
export default abstract class InformationCardGroup {


    /** The title of the card group. */
    name: string;

    /** The description of the card group. */
    description: string;

    /** Holds information cards. */
    cards: InformationCard[];

    /**
     * 
     * @param name The name of the card group.
     * @param description The description of card the group.
     */
    constructor(name: string, description: string) {
        // If the name is blank, throw an error.
        // If the description is blank, throw an error.
        if (StringTools.isBlank(name)) {
            throw new Error(name);
        } else if (StringTools.isBlank(description)) {
            throw new Error(description);
        }


        this.name = name;
        this.description = description;
        this.cards = [];
    }

    /** Returns the div that holds the group.
    * 
    */
    abstract build(): HTMLDivElement;

}