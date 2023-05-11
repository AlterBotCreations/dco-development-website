import { InformationCard } from "../informationCard";

/** Holds and displays information about a team member.
 * 
 * @author Alter
 */
export class TeamMemberCard extends InformationCard {

    /**
     * 
     * @param name 
     * @param imageLink 
     */
    constructor(name: string, imageLink: string) {
        super(name, imageLink);
    }

    build(): HTMLDivElement {
        return document.createElement("div");
    }
}