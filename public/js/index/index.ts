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