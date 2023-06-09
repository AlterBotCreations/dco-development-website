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
const supporterCard_1 = __importDefault(require("../classes/supporters_section/supporterCard"));
const supportersGroup_1 = __importDefault(require("../classes/supporters_section/supportersGroup"));
/** Builds the index pages's supporters section.
 *
 */
class SupportersSectionBuilder {
    /** Builds the index pages's supporters section.
     *
     */
    static build() {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the supporters section
            const supportersSectionDiv = document.getElementById("supportersSection");
            if (supportersSectionDiv === null) {
                throw new Error("supporters section is null.");
            }
            // Create the groups.
            const group1 = new supportersGroup_1.default("Platinum", "Nothing would be possible without our greatest donators.");
            group1.add(new supporterCard_1.default("Yipman", "", 10000));
            const group2 = new supportersGroup_1.default("Bronze", "Bronze supporters.");
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            group2.add(new supporterCard_1.default("Alter", "", 1));
            const group3 = new supportersGroup_1.default("Gold", "test");
            group3.add(new supporterCard_1.default("Test", "", 2));
            const group4 = new supportersGroup_1.default("Silver", "test");
            const group5 = new supportersGroup_1.default("Basic", "test");
            const group6 = new supportersGroup_1.default("Micro", "test");
            // Build the groups.
            const groupsToBeBuilt = [
                group1.build(),
                group2.build(),
                group3.build(),
                group4.build(),
                group5.build(),
                group6.build(),
            ];
            // Append the groups to the parent div.
            groupsToBeBuilt.forEach(group => supportersSectionDiv.appendChild(group));
        });
    }
}
exports.default = SupportersSectionBuilder;
