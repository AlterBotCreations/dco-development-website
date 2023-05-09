"use strict";
/** Creates a supporter card.
 *
 * @author Alter
 *
 */
class SupporterCard {
    /**
     *
     * @param name The name of the supporter.
     * @param imageLink The path or link to the supporter's image.
     * @param donationAmountUSD The donation amount of the supporter.
     */
    constructor(name, imageLink, donationAmountUSD) {
        // If the name is blank, throw an error.
        if (StringTools.isBlank(name)) {
            throw new Error(`name cannot be blank.`);
        }
        // If the imageLink is blank, throw an error.
        else if (StringTools.isBlank(imageLink)) {
            throw new Error(`imageLink cannot be blank.`);
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
    build() {
        // Create the html main div element.
        const div = document.createElement("div");
        // Set the div's class for styling.
        div.classList.add(SupporterCard.SUPPORTER_CARD_MAIN_DIV_CLASS);
        // Return the main div.
        return document.createElement("div");
    }
}
SupporterCard.SUPPORTER_CARD_MAIN_DIV_CLASS = "supporterCardMainDiv";
