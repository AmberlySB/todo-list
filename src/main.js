import "./style.css";
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
import { projects, inbox, subscribeProjects } from "./projects";
import {
  addToLocalStorage,
  consumeLocalStorage,
  removeFromLocalStorage,
  retrieveLocalStorage,
} from "./local_storage";

// console.log(retrieveInboxStorage());

projects.subscribe("add", closeProjectDialog);
projects.subscribe("add", loadNewProject);
projects.subscribe("add", subscribeProjects);
projects.subscribe("add", addToLocalStorage);
projects.subscribe("remove", deleteProjectElement);
projects.subscribe("remove", deleteMenuProject);
projects.subscribe("remove", removeFromLocalStorage);

inbox.subscribe("add", loadNewTodo);
inbox.subscribe("add", closeDialog);
inbox.subscribe("add", addToLocalStorage);
inbox.subscribe("update", closeEditDialog);
inbox.subscribe("update", editTodoElement);
inbox.subscribe("remove", deleteTodoElement);
inbox.subscribe("remove", removeFromLocalStorage);

retrieveLocalStorage();
consumeLocalStorage();
loadAllMenuProjects();

projects.subscribe("add", loadNewMenuProject);

// TODO: give functionality to sidebar links
// look into date-fns
// clear form after submission
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
