import ProjectCard from "../classes/projects_section/projectCard";

/** Builds the projects section.
 * 
 * @author Alter
 */
export default class ProjectsSectionBuilder {


    /** Builds the projects section.
     * 
     * @author Alter
     */
    static async build() {

        // Build the projects section.

        // Get the div to append to.
        const divToAppendTo: HTMLElement | null = document.getElementById("projectsCardHolder");

        // If the element is null, throw an error.
        if (divToAppendTo === null) {
            throw new Error(`divToAppendTo is null.`);
        }

        // Create the projectCards.
        const projectCardHTML: HTMLDivElement[] = [
            new ProjectCard("DCO Operations", "", "A hardcore tactical realism milsim unit designed to test AI to its limits.").build(),

            new ProjectCard("DCO Platoon SFM", "", "Brings ARMA 3 to life with improvements the game's AI.").build(),

            new ProjectCard("The Command System", "", "A complete ARMA re-haul including multithreading, reworked AI, machine learning, commands, and animations.").build(),

            new ProjectCard("GPT Roleplay System", "", "Allows roleplaying with all AI in ARMA 3 using OpenAI's GPT-3.5 API. ").build(),

            new ProjectCard("Persistent Economy", "", "An interactive market system. ").build(),
            
        ];

        // Append the cards to the div.
        projectCardHTML.forEach(card => divToAppendTo.appendChild(card));

    }

}