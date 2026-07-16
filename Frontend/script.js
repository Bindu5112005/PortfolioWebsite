async function loadProjects() {
    try {
        const response = await fetch("/projects");
        const projects = await response.json();

        const container = document.getElementById("project-list");
        container.innerHTML = "";

        projects.forEach(project => {
            container.innerHTML += `
                <div class="project">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p><strong>Technology:</strong> ${project.technology}</p>
                    <a href="${project.github_link}" target="_blank">View GitHub</a>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

loadProjects();