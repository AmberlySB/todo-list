import { Collection } from "./collection";
import {
  closeDialog,
  closeEditDialog,
  deleteTodoElement,
  editTodoElement,
  loadNewTodo,
  projectFormValidator,
} from "./dom";

export let projectTitles = ["Inbox"];
export let projectDeleteId;

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
  console.log("refs: ", projectReferences);
  projects.add(newProject);
  console.log("projects :", projects.findAll());
  console.log(projectTitles);
}

export const deleteProject = (event) => {
  projectDeleteId = event.target.closest("div").id;
  projectTitles = projectTitles.filter(
    (title) => title !== event.target.previousSibling.textContent,
  );
  console.log(projectTitles);
  projects.remove(projectDeleteId);
};

export const swapSubs = (previous, active) => {
  projectReferences[projectTitles.indexOf(previous)].unsubscribe(
    "add",
    loadNewTodo,
  );
  projectReferences[projectTitles.indexOf(active)].subscribe(
    "add",
    loadNewTodo,
  );
  projectReferences[projectTitles.indexOf(previous)].unsubscribe(
    "remove",
    deleteTodoElement,
  );
  projectReferences[projectTitles.indexOf(active)].subscribe(
    "remove",
    deleteTodoElement,
  );
  projectReferences[projectTitles.indexOf(previous)].unsubscribe(
    "update",
    editTodoElement,
  );
  projectReferences[projectTitles.indexOf(active)].subscribe(
    "update",
    editTodoElement,
  );
};

export const subscribeProjects = () => {
  projectReferences.slice(1).forEach((project) => {
    project.subscribe("add", closeDialog);
    project.subscribe("update", closeEditDialog);
  });
};

export const projectReferences = [inbox];
