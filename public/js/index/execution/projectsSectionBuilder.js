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
const projectCard_1 = __importDefault(require("../classes/projects_section/projectCard"));
/** Builds the projects section.
 *
 * @author Alter
 */
class ProjectsSectionBuilder {
    /** Builds the projects section.
     *
     * @author Alter
     */
    static build() {
        return __awaiter(this, void 0, void 0, function* () {
            // Build the projects section.
            // Get the div to append to.
            const divToAppendTo = document.getElementById("projectsCardHolder");
            // If the element is null, throw an error.
            if (divToAppendTo === null) {
                throw new Error(`divToAppendTo is null.`);
            }
            // Create the projectCards.
            const projectCardHTML = [
                new projectCard_1.default("DCO Operations", "", "A hardcore tactical realism milsim unit designed to test AI to its limits.").build(),
                new projectCard_1.default("DCO Platoon SFM", "", "Brings ARMA 3 to life with improvements the game's AI.").build(),
                new projectCard_1.default("The Command System", "", "A complete ARMA re-haul including multithreading, reworked AI, machine learning, commands, and animations.").build(),
                new projectCard_1.default("GPT Roleplay System", "", "Allows roleplaying with all AI in ARMA 3 using OpenAI's GPT-3.5 API. ").build(),
                new projectCard_1.default("Persistent Economy", "", "An interactive market system. ").build(),
            ];
            // Append the cards to the div.
            projectCardHTML.forEach(card => divToAppendTo.appendChild(card));
        });
    }
}
exports.default = ProjectsSectionBuilder;
