import "./style.css";
import { loadNewTodo, closeDialog, loadProjects } from "./dom";
import { Collection } from "./collection";

loadProjects();

export const inbox = Collection("inbox");
// let todo = inbox.add(thisTodo);
// console.table(todo.data);
// const foundTodo = inbox.find((el) => el.taskName.startsWith("rent"));
// console.table(foundTodo);
// todo = inbox.update(todo._id, (el) => ({ ...el, priority: 2 }));
// console.table(todo);
// console.table(inbox.findAll());
// inbox.subscribe("add", logTodo);
// let newTodo2 = inbox.add(newTodo);
inbox.subscribe("add", loadNewTodo);
inbox.subscribe("add", closeDialog);
