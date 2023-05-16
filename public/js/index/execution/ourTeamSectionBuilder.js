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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teamMemberCard_1 = require("../classes/our_team_section/teamMemberCard");
const teamMemberCardGroup_1 = __importDefault(require("../classes/our_team_section/teamMemberCardGroup"));
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
            const cardHolderDivName = "ourTeamSection";
            const cardHolderDiv = document.getElementById(cardHolderDivName);
            // Create the developer team group.
            const devTeamGroup = new teamMemberCardGroup_1.default("Development Team", "People that directly interact with the programming of DCO projects.");
            // Add the card to the developer group.
            const devTeamCards = [
                new teamMemberCard_1.TeamMemberCard("Yipman", "", "DCO Project Lead"),
                new teamMemberCard_1.TeamMemberCard("Tally", "", "Programmer: DCO GPT & PlatoonFsm."),
                new teamMemberCard_1.TeamMemberCard("Fluffy", "", "Programmer: DCO Comsys"),
                new teamMemberCard_1.TeamMemberCard("Alter", "", "Programmer: DCO ECO & Webpage, Web Security"),
            ];
            devTeamGroup.cards = devTeamCards;
            // Create the contributors group.
            const contributorsGroup = new teamMemberCardGroup_1.default("Contributors", "Testers, Advisors, Designers and More.");
            // Add the cards to the contributors group.
            const contributorsTeamCards = [
                new teamMemberCard_1.TeamMemberCard("Papareap", "", "Headless Client, Debug and Code Advisor"),
                new teamMemberCard_1.TeamMemberCard("MyPalDeebs", "", "Idea And Design"),
                new teamMemberCard_1.TeamMemberCard("Woody", "", "Military Advisor"),
                new teamMemberCard_1.TeamMemberCard("Pagan", "", "Promo, Feedback, Testing"),
                new teamMemberCard_1.TeamMemberCard("Karmakut", "", "Large Scale Testing And Promo"),
                new teamMemberCard_1.TeamMemberCard("Samin", "", "GPT Advice"),
                new teamMemberCard_1.TeamMemberCard("Bruno & Mcsellerie", "", "Long Term Testing & Moral Support"),
                new teamMemberCard_1.TeamMemberCard("Nursifer", "", "Nutritional Specialist"),
            ];
            contributorsGroup.cards = contributorsTeamCards;
            console.log(contributorsGroup.build());
            // Add the built groups to the div.
            cardHolderDiv.appendChild(devTeamGroup.build());
            cardHolderDiv.appendChild(contributorsGroup.build());
        });
    }
}
exports.default = OurTeamSectionBuilder;
