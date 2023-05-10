// Get the supporters section
const supportersSection: HTMLElement | null = document.getElementById("supportersSection");
if(supportersSection === null) {
    throw new Error("supporters section is null.");
}

console.log("index running")