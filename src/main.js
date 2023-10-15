import "./style.css";
import {
  closeDialog,
  closeEditDialog,
  closeProjectDialog,
  deleteProjectElement,
  deleteTodoElement,
  editTodoElement,
  loadAllMenuProjects,
  loadNewMenuProject,
  loadNewProject,
  loadNewTodo,
} from "./dom";
import { projects, inbox, subscribeProjects } from "./projects";

loadAllMenuProjects();

projects.subscribe("add", loadNewMenuProject);
projects.subscribe("add", closeProjectDialog);
projects.subscribe("add", loadNewProject);
projects.subscribe("add", subscribeProjects);
projects.subscribe("remove", deleteProjectElement);

inbox.subscribe("add", loadNewTodo);
inbox.subscribe("add", closeDialog);
inbox.subscribe("update", closeEditDialog);
inbox.subscribe("update", editTodoElement);
inbox.subscribe("remove", deleteTodoElement);

// TODO: fix the delete project function such that when the project is deleted it's entry in projectTitles array is also removed
// look into date-fns
// clear form after submission
// give functionality to sidebar links
// figure out local storage

// <-| Here for reference to be deleted at later time |->

// let todo = inbox.add(thisTodo);
// console.table(todo.data);
// const foundTodo = inbox.find((el) => el.taskName.startsWith("rent"));
// console.table(foundTodo);
// todo = inbox.update(todo._id, (el) => ({ ...el, priority: 2 }));
// console.table(todo);
// console.table(inbox.findAll());
// inbox.subscribe("add", logTodo);
// let newTodo2 = inbox.add(newTodo);
