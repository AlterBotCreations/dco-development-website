"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringTools_1 = __importDefault(require("../tools/stringTools"));
/** Holds multiple information cards.
 *
 * @author Alter
 */
class InformationCardGroup {
    /**
     *
     * @param name The name of the card group.
     * @param description The description of card the group.
     */
    constructor(name, description) {
        // If the name is blank, throw an error.
        // If the description is blank, throw an error.
        if (stringTools_1.default.isBlank(name)) {
            throw new Error(name);
        }
        else if (stringTools_1.default.isBlank(description)) {
            throw new Error(description);
        }
        this.name = name;
        this.description = description;
        this.cards = [];
    }
}
exports.default = InformationCardGroup;
