/** Holds supporter cards.
 * 
 * @author Alter
 * 
 */
class SupportersGroup {

    /** Holds the supporter cards. */
    cards: SupporterCard[];

    constructor() {
        this.cards = [];
    }

    /** Adds a supporter card to the supporters section.
     * 
     * @param card 
     */
    add(card: SupporterCard) {
        this.cards.push(card);
    }

}
