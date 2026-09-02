function generatePortfolio() {

    const name =
        document.getElementById("name").value;

    const role =
        document.getElementById("role").value;

    const about =
        document.getElementById("about").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const location =
        document.getElementById("location").value;

    const skills =
        document.getElementById("skills").value;

    const project1 =
        document.getElementById("project1").value;

    const projectDesc1 =
        document.getElementById("projectDesc1").value;

    const project2 =
        document.getElementById("project2").value;

    const projectDesc2 =
        document.getElementById("projectDesc2").value;

    const github =
        document.getElementById("github").value;

    const linkedin =
        document.getElementById("linkedin").value;


    /* BASIC DETAILS */

    document.getElementById("previewName").textContent =
        name || "Your Name";

    document.getElementById("previewRole").textContent =
        role || "Your Professional Title";

    document.getElementById("previewAbout").textContent =
        about || "Your introduction will appear here.";

    document.getElementById("previewEmail").textContent =
        email || "example@gmail.com";

    document.getElementById("previewPhone").textContent =
        phone || "+91 9876543210";

    document.getElementById("previewLocation").textContent =
        "📍 " + (location || "Your Location");


    /* INITIAL */

    document.getElementById("previewInitial").textContent =
        name ? name.charAt(0).toUpperCase() : "A";


    /* SKILLS */

    const skillContainer =
        document.getElementById("previewSkills");

    skillContainer.innerHTML = "";

    if (skills.trim() !== "") {

        const skillList = skills.split(",");

        skillList.forEach(function(skill) {

            const span = document.createElement("span");

            span.textContent = skill.trim();

            skillContainer.appendChild(span);

        });

    } else {

        skillContainer.innerHTML = `
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
        `;

    }


    /* PROJECTS */

    document.getElementById("previewProject1").textContent =
        project1 || "Project Name";

    document.getElementById("previewProjectDesc1").textContent =
        projectDesc1 || "Project description";


    document.getElementById("previewProject2").textContent =
        project2 || "Project Name";

    document.getElementById("previewProjectDesc2").textContent =
        projectDesc2 || "Project description";


    /* SOCIAL LINKS */

    const githubLink =
        document.getElementById("previewGithub");

    const linkedinLink =
        document.getElementById("previewLinkedin");


    if (github) {

        githubLink.href =
            github.startsWith("http")
            ? github
            : "https://" + github;

    } else {

        githubLink.href = "#";

    }


    if (linkedin) {

        linkedinLink.href =
            linkedin.startsWith("http")
            ? linkedin
            : "https://" + linkedin;

    } else {

        linkedinLink.href = "#";

    }


    /* SUCCESS MESSAGE */

    alert("Your portfolio has been generated successfully!");

}


/* CLEAR FORM */

function clearForm() {

    document.querySelectorAll(
        ".builder input, .builder textarea"
    ).forEach(function(element) {

        element.value = "";

    });


    document.getElementById("previewName").textContent =
        "Your Name";

    document.getElementById("previewRole").textContent =
        "Your Professional Title";

    document.getElementById("previewAbout").textContent =
        "Your introduction will appear here.";

    document.getElementById("previewEmail").textContent =
        "example@gmail.com";

    document.getElementById("previewPhone").textContent =
        "+91 9876543210";

    document.getElementById("previewLocation").textContent =
        "📍 Your Location";

    document.getElementById("previewInitial").textContent =
        "A";

    document.getElementById("previewSkills").innerHTML = `
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
    `;

    document.getElementById("previewProject1").textContent =
        "Project Name";

    document.getElementById("previewProjectDesc1").textContent =
        "Project description";

    document.getElementById("previewProject2").textContent =
        "Project Name";

    document.getElementById("previewProjectDesc2").textContent =
        "Project description";

}