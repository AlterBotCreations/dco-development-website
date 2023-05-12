"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationCard = void 0;
const stringTools_1 = __importDefault(require("../tools/stringTools"));
/** For information card standardization.
 *
 * @author Alter
 *
 */
class InformationCard {
    /**
     *
     * @param name The name on the card.
     * @param imageLink The image on the card.
     */
    constructor(name, imageLink) {
        /** The link/path to the card's image. Can serve as a profile pic.*/
        this.imageLink = "./default_pfp.png"; // Default.
        // If the name is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error(`name cannot be blank.`);
        }
        this.name = name;
        this.imageLink = imageLink;
    }
}
exports.InformationCard = InformationCard;
