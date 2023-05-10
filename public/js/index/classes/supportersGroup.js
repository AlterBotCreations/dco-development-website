"use strict";
/** Holds supporter cards.
 *
 * @author Alter
 *
 */
class SupportersGroup {
    constructor() {
        this.cards = [];
    }
    /** Adds a supporter card to the supporters section.
     *
     * @param card
     */
    add(card) {
        this.cards.push(card);
    }
}
