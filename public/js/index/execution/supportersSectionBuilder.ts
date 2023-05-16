import SupporterCard from "../classes/supporters_section/supporterCard";
import SupportersGroup from "../classes/supporters_section/supportersGroup";

/** Builds the index pages's supporters section.
 * 
 */
export default class SupportersSectionBuilder {

    /** Builds the index pages's supporters section.
     *
     */
    static async build() {
        // Get the supporters section
        const supportersSectionDiv: HTMLDivElement | null = document.getElementById("supportersSection") as HTMLDivElement;
        if (supportersSectionDiv === null) {
            throw new Error("supporters section is null.");
        }

        // Create the groups.
        const group1: SupportersGroup = new SupportersGroup("Platinum", "Nothing would be possible without our greatest donators.")
        group1.add(new SupporterCard("Yipman", "image", 10000));

        const group2: SupportersGroup = new SupportersGroup("Bronze", "Bronze supporters.");
        group2.add(new SupporterCard("Alter", "", 1));
        group2.add(new SupporterCard("Alter", "", 1));
        group2.add(new SupporterCard("Alter", "", 1));
        group2.add(new SupporterCard("Alter", "", 1));
        group2.add(new SupporterCard("Alter", "", 1));
        group2.add(new SupporterCard("Alter", "", 1));

        const group3: SupportersGroup = new SupportersGroup("Gold", "test");
        group3.add(new SupporterCard("Test", "", 2));

        const group4: SupportersGroup = new SupportersGroup("Silver", "test");

        const group5: SupportersGroup = new SupportersGroup("Basic", "test");

        const group6: SupportersGroup = new SupportersGroup("Micro", "test");

        // Build the groups.
        const groupsToBeBuilt: HTMLDivElement[] = [
            group1.build(),
            group2.build(),
            group3.build(),
            group4.build(),
            group5.build(),
            group6.build(),
        ];

        // Append the groups to the parent div.
        groupsToBeBuilt.forEach(group => supportersSectionDiv.appendChild(group));
    }
}