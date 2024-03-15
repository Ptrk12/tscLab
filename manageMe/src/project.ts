import { localStrgWorker } from "./storage/localStrgWorker";

export function setUpProject(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    const projectIdInput = document.querySelector<HTMLInputElement>('#project_id');
    const projectNameInput = document.querySelector<HTMLInputElement>('#project_name');
    const projectDescriptionInput = document.querySelector<HTMLInputElement>('#project_description');

    if (projectIdInput && projectNameInput && projectDescriptionInput) {
      const projectId = projectIdInput.value.trim();
      const projectName = projectNameInput.value.trim();
      const projectDescription = projectDescriptionInput.value.trim();

      if (projectId !== "" && projectName !== "" && projectDescription !== "") {
        const projectItem: projectType = {
          id: projectId,
          name: projectName,
          description: projectDescription
        };

        localStrgWorker.add(projectId, projectItem);
      } else {
        console.error('All fields must be filled!');
      }
    } else {
      console.error('Could not find input elements!');
    }
  });
}

export function renderProjectList() {
  const projects = localStrgWorker.getAllItems();
  console.log(projects);
  const projectListContainer = document.createElement('div');

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    const span = document.createElement('span')
    span.innerHTML = `ID: ${project.id}, Name: ${project.name}, Description: ${project.description}`;
    projectElement.appendChild(span);
    projectListContainer.appendChild(projectElement);
  });

  const appContainer = document.querySelector<HTMLDivElement>('#app');
  if (appContainer) {
    appContainer.appendChild(projectListContainer);
  }
}

renderProjectList();
