import { Collection } from "./collection";
import { loadNewTodo, projectFormValidator } from "./dom";

export const projectTitles = ["Inbox"];

export const projects = Collection("Projects");

export const inbox = Collection("Inbox");
projects.add(inbox);

export function addNewProject(event) {
  event.preventDefault();
  if (projectFormValidator.call(this) === "error") {
    return;
  }
  const newProjectName = this.projectName.value;
  projectTitles.push(newProjectName);
  let newProject = newProjectName.toLowerCase();
  newProject = Collection(newProjectName);
  projectReferences.push(newProject);
  console.log(projectReferences);
  projects.add(newProject);
  console.log("projects :", projects.findAll());
  console.log(projectTitles);
}

// export const subscribeProjects = () => {
//   projectReferences
//     .slice(1)
//     .forEach((project) => project.subscribe("add", loadNewTodo));
// };

export const projectReferences = [inbox];
