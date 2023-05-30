"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** The main file for the index page.
 *
 * @author Alter
 */
const ourTeamSectionBuilder_1 = __importDefault(require("./execution/ourTeamSectionBuilder"));
const projectsSectionBuilder_1 = __importDefault(require("./execution/projectsSectionBuilder"));
const supportersSectionBuilder_1 = __importDefault(require("./execution/supportersSectionBuilder"));
// Asynchronously build the webpage.
Promise.all([
    // Build the 'projects' section.
    projectsSectionBuilder_1.default.build(),
    // Build the 'our team' section.
    ourTeamSectionBuilder_1.default.build(),
    // Build the supporters section.
    supportersSectionBuilder_1.default.build()
]);
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXqUY_fD6p0ct3I7MZuRk7zOWEQoXzqps",
    authDomain: "dco-website-fde31.firebaseapp.com",
    projectId: "dco-website-fde31",
    storageBucket: "dco-website-fde31.appspot.com",
    messagingSenderId: "614023010855",
    appId: "1:614023010855:web:a62dc753cb5484fb8c0c02",
    measurementId: "G-L0CXEWP4DT"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
// @ts-ignore
const analytics = (0, analytics_1.getAnalytics)(app);
