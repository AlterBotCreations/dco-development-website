import SupporterCard from "./classes/supporters section/supporterCard";
import SupportersGroup from "./classes/supporters section/supportersGroup";

/** Builds the index pages's supporters section.
 *
 */
async function buildSupportersSection() {
    // Get the supporters section
    const supportersSectionDiv: HTMLElement | null = document.getElementById("supportersSection");
    if (supportersSectionDiv === null) {
        throw new Error("supporters section is null.");
    }

    // Create the groups.
    const group1: SupportersGroup = new SupportersGroup("Platinum", "Nothing would be possible without our greatest donators.", supportersSectionDiv as HTMLDivElement)
    group1.add(new SupporterCard("Yipman", "image", 10000));
    
    // Build the groups.
    group1.build();

}

// Build the supporters section.
buildSupportersSection();

console.log("index running")