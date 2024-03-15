import './style.css'
import { renderProjectList, setUpProject } from './project.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <form>
    <input placeholder='project id' type="text" id="project_id"Project id />
    <input placeholder='project name' type="text" id="project_name"Project name />
    <input placeholder='project description' type="text" id="project_description"Project description />
    <button id="setUpProject" type="button">Add project</button>
  </form>
  </div>
`
renderProjectList();
setUpProject(document.querySelector<HTMLButtonElement>('#setUpProject')!)

