"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberCard = void 0;
const informationCard_1 = require("../informationCard");
/** Holds and displays information about a team member.
 *
 * @author Alter
 */
class TeamMemberCard extends informationCard_1.InformationCard {
    
    /**
     *
     * @param name
     * @param imageLink
     */
    constructor(name, imageLink) {
        super(name, imageLink);
    }
    build() {
        return document.createElement("div");
    }
}
exports.TeamMemberCard = TeamMemberCard;
