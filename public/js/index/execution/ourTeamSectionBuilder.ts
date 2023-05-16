import { TeamMemberCard } from "../classes/our_team_section/teamMemberCard";

/** Builds the 'our team' section.
 * 
 * @author Alter
 * 
 */
export default class OurTeamSectionBuilder {

    /** Builds the 'our team' section.
     * 
     */
    static async build() {

        // Get the card holder.
        const cardHolderDivName: string = "teamMemberCardsHolder";
        const cardHolderDiv: HTMLDivElement = document.getElementById(cardHolderDivName) as HTMLDivElement;

        // Add the cards.
        const cards = [
            new TeamMemberCard("Yipman", "test", "Project Lead"),
            new TeamMemberCard("Pagan", "test", "unsure"),
            new TeamMemberCard("Fluffy", "test", "Arma III Developer"),
            new TeamMemberCard("Tally", "test", "AI Developer\nArma III Developer"),
            new TeamMemberCard("Yipman", "test", "Project Lead"),
            new TeamMemberCard("Alter", "test", "Web Developer\nDiscord Bot Developer"),
        ]

        // Append the cards to the card holder div.
        for (const index in cards) {
            cardHolderDiv.appendChild(cards[index].build());
        }
    }

}