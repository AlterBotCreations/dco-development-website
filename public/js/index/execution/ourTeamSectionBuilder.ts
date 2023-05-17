import { TeamMemberCard } from "../classes/our_team_section/teamMemberCard";
import TeamMemberCardGroup from "../classes/our_team_section/teamMemberCardGroup";

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
        const cardHolderDivName: string = "ourTeamSection";
        const cardHolderDiv: HTMLDivElement = document.getElementById(cardHolderDivName) as HTMLDivElement;

        // Create the developer team group.
        const devTeamGroup: TeamMemberCardGroup = new TeamMemberCardGroup(
            "Development Team",
            "People that directly interact with the programming of DCO projects.");

        // Add the card to the developer group.
        const devTeamCards = [
            new TeamMemberCard("Yipman", "", "DCO Project Lead"),
            new TeamMemberCard("Tally", "", "Programmer: DCO GPT & PlatoonFsm."),
            new TeamMemberCard("Fluffy", "", "Programmer: DCO Comsys"),
            new TeamMemberCard("Alter", "", "Programmer: DCO ECO & Webpage, Web Security"),
        ]
        devTeamGroup.cards = devTeamCards;

        // Create the contributors group.
        const contributorsGroup: TeamMemberCardGroup = new TeamMemberCardGroup("Contributors", "Testers, Advisors, Designers and More.");

        // Add the cards to the contributors group.
        const contributorsTeamCards = [
            new TeamMemberCard("Papareap", "", "Headless Client, Debug and Code Advisor"),
            new TeamMemberCard("MyPalDeebs", "", "Idea And Design"),
            new TeamMemberCard("Woody", "", "Military Advisor"),
            new TeamMemberCard("Pagan", "", "Promo, Feedback, Testing"),
            new TeamMemberCard("Karmakut", "", "Large Scale Testing And Promo"),
            new TeamMemberCard("Samin", "", "GPT Advice"),
            new TeamMemberCard("Bruno & Mcsellerie", "", "Long Term Testing & Moral Support"),
            new TeamMemberCard("Nursifer", "", "Nutritional Specialist"),
        ]
        contributorsGroup.cards = contributorsTeamCards;

        // Add the built groups to the div.
        cardHolderDiv.appendChild(devTeamGroup.build());
        cardHolderDiv.appendChild(contributorsGroup.build());
    }

}