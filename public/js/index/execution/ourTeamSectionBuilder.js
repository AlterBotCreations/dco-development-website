"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const teamMemberCard_1 = require("../classes/our_team_section/teamMemberCard");
/** Builds the 'our team' section.
 *
 * @author Alter
 *
 */
class OurTeamSectionBuilder {
    /** Builds the 'our team' section.
     *
     */
    static build() {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the card holder.
            const cardHolderDivName = "teamMemberCardsHolder";
            const cardHolderDiv = document.getElementById(cardHolderDivName);
            // Add the cards.
            const cards = [
                new teamMemberCard_1.TeamMemberCard("Yipman", "test", "Project Lead"),
                new teamMemberCard_1.TeamMemberCard("Pagan", "test", "unsure"),
                new teamMemberCard_1.TeamMemberCard("Fluffy", "test", "Arma III Developer"),
                new teamMemberCard_1.TeamMemberCard("Tally", "test", "AI Developer\nArma III Developer"),
                new teamMemberCard_1.TeamMemberCard("Yipman", "test", "Project Lead"),
                new teamMemberCard_1.TeamMemberCard("Alter", "test", "Web Developer\nDiscord Bot Developer"),
            ];
            // Append the cards to the card holder div.
            for (const index in cards) {
                cardHolderDiv.appendChild(cards[index].build());
            }
        });
    }
}
exports.default = OurTeamSectionBuilder;
