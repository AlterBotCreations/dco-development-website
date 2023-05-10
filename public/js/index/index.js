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
const supporterCard_1 = __importDefault(require("./classes/supporters section/supporterCard"));
const supportersGroup_1 = __importDefault(require("./classes/supporters section/supportersGroup"));
/** Builds the index pages's supporters section.
 *
 */
function buildSupportersSection() {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the supporters section
        const supportersSectionDiv = document.getElementById("supportersSection");
        if (supportersSectionDiv === null) {
            throw new Error("supporters section is null.");
        }
        // Create the groups.
        const group1 = new supportersGroup_1.default("Platinum", "Nothing would be possible without our greatest donators.", supportersSectionDiv);
        group1.add(new supporterCard_1.default("Yipman", "image", 10000));
        // Build the groups.
        group1.build();
    });
}
// Build the supporters section.
buildSupportersSection();
console.log("index running");
