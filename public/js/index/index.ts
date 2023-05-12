/** The main file for the index page.
 * 
 * @author Alter
 */

import { TeamMemberCard } from "./classes/our_team_section/teamMemberCard";
import SupporterCard from "./classes/supporters_section/supporterCard";
import SupportersGroup from "./classes/supporters_section/supportersGroup";

/** Builds the index page's 'our team' section.
 * 
 */
async function buildOurTeamSection() {

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

/** Builds the index pages's supporters section.
 *
 */
async function buildSupportersSection() {
    // Get the supporters section
    const supportersSectionDiv: HTMLDivElement | null = document.getElementById("supportersSection") as HTMLDivElement;
    if (supportersSectionDiv === null) {
        throw new Error("supporters section is null.");
    }

    // Create the groups.
    const group1: SupportersGroup = new SupportersGroup("Platinum", "Nothing would be possible without our greatest donators.", supportersSectionDiv)
    group1.add(new SupporterCard("Yipman", "image", 10000));

    const group2: SupportersGroup = new SupportersGroup("Bronze", "Bronze supporters.", supportersSectionDiv);
    group2.add(new SupporterCard("Alter", "", 1));
    group2.add(new SupporterCard("Alter", "", 1));
    group2.add(new SupporterCard("Alter", "", 1));
    group2.add(new SupporterCard("Alter", "", 1));
    group2.add(new SupporterCard("Alter", "", 1));
    group2.add(new SupporterCard("Alter", "", 1));

    const group3: SupportersGroup = new SupportersGroup("Gold", "test", supportersSectionDiv);
    group3.add(new SupporterCard("Test", "", 2));

    const group4: SupportersGroup = new SupportersGroup("Silver", "test", supportersSectionDiv);

    const group5: SupportersGroup = new SupportersGroup("Basic", "test", supportersSectionDiv);

    const group6: SupportersGroup = new SupportersGroup("Micro", "test", supportersSectionDiv);

    // Build the groups.
    group1.build();
    group2.build();
    group3.build();
    group4.build();
    group5.build();
    group6.build();

}

// Asynchronously build the webpage.
Promise.all([
    // Build the 'our team' section.
    buildOurTeamSection(),

    // Build the supporters section.
    buildSupportersSection()
]);