import { newTask, editTask } from "./todo";

const addTodo = document.getElementById("add-todo");
const dialog = document.getElementById("dialog");
const cancel = document.getElementById("cancel");
const form = document.getElementById("form");
const project = document.getElementById("project");
const todoList = document.getElementById("todoList");
const todoTemplate =
  document.getElementById("todoTemplate").content.firstElementChild;

const projects = ["Inbox"];

const openDialog = () => {
  dialog.showModal();
};
addTodo.addEventListener("click", openDialog);

export const closeDialog = () => {
  dialog.close();
};
cancel.addEventListener("click", closeDialog);

form.addEventListener("submit", newTask);

export const getId = (id) => {
  return document.getElementById(id);
};

export const loadProjects = () => {
  projects.forEach((proj) => {
    const option = document.createElement("option");
    option.value = proj;
    option.textContent = proj;
    project.appendChild(option);
  });
};

export const createTodoElement = ({ _id, data }) => {
  const todoElement = todoTemplate.cloneNode(true);
  console.log(todoElement);
  todoElement.id = _id;
  todoElement.querySelector(".taskName").textContent = data.taskName;
  todoElement.querySelector(".edit").addEventListener("click", editTask);

  if (data.description === "") {
    todoElement.querySelector(".descriptionSpacer").classList.add("hidden");
    todoElement.querySelector(".description").classList.add("hidden");
  }
  if (data.description !== "") {
    todoElement.querySelector(".description").textContent = data.description;
  }
  if (data.dueDate === "") {
    todoElement.querySelector(".dueDateSpacer").classList.add("hidden");
    todoElement.querySelector(".dueDate").classList.add("hidden");
  }
  if (data.dueDate !== "") {
    todoElement.querySelector(".dueDate").textContent = data.dueDate;
  }

  if (data.priority === 1) {
    todoElement.querySelector(".priority").classList.add("border-red-500");
  } else if (data.priority === 2) {
    todoElement.querySelector(".priority").classList.add("border-orange-500");
  } else if (data.priority === 3) {
    todoElement.querySelector(".priority").classList.add("border-blue-500");
  } else {
    todoElement.querySelector(".priority").classList.add("border-slate-400");
  }

  return todoElement;
};

export const loadNewTodo = (_, { collection }) => {
  todoList.replaceChildren(...collection.map(createTodoElement));
};
