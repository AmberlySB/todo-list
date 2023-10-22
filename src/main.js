import {
  closeDialog,
  closeEditDialog,
  closeProjectDialog,
  deleteMenuProject,
  deleteProjectElement,
  deleteTodoElement,
  editTodoElement,
  loadAllMenuProjects,
  loadNewMenuProject,
  loadNewProject,
  loadNewTodo,
} from "./dom";
import { addToLocalStorage, retrieveLocalStorage } from "./local_storage";
import { inbox, projects, subscribeProjects } from "./projects";
import "./style.css";

projects.subscribe("add", closeProjectDialog);
projects.subscribe("add", loadNewProject);
projects.subscribe("add", subscribeProjects);
projects.subscribe("add", addToLocalStorage);
projects.subscribe("remove", deleteProjectElement);
projects.subscribe("remove", deleteMenuProject);
projects.subscribe("remove", addToLocalStorage);

inbox.subscribe("add", loadNewTodo);
inbox.subscribe("add", closeDialog);
inbox.subscribe("add", addToLocalStorage);
inbox.subscribe("update", closeEditDialog);
inbox.subscribe("update", editTodoElement);
inbox.subscribe("update", addToLocalStorage);
inbox.subscribe("remove", deleteTodoElement);
inbox.subscribe("remove", addToLocalStorage);

retrieveLocalStorage();
loadAllMenuProjects();

projects.subscribe("add", loadNewMenuProject);

// TODO: give functionality to sidebar links
// look into date-fns
