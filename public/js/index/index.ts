/** The main file for the index page.
 * 
 * @author Alter
 */
import OurTeamSectionBuilder from "./execution/ourTeamSectionBuilder";
import ProjectsSectionBuilder from "./execution/projectsSectionBuilder";
import SupportersSectionBuilder from "./execution/supportersSectionBuilder";

// Asynchronously build the webpage.
Promise.all([

    // Build the 'projects' section.
    ProjectsSectionBuilder.build(),

    // Build the 'our team' section.
    OurTeamSectionBuilder.build(),

    // Build the supporters section.
    SupportersSectionBuilder.build()
]);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);

// @ts-ignore
const analytics = getAnalytics(app);

