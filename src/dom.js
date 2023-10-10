import { newTask, editTask } from "./todo";

const addTodo = document.getElementById("add-todo");
const dialog = document.getElementById("dialog");
const cancel = document.getElementById("cancel");
const editCancel = document.getElementById("editCancel");
const form = document.getElementById("form");
const editForm = document.getElementById("editForm");
const project = document.getElementById("project");
const editProject = document.getElementById("editProject");
const todoList = document.getElementById("todoList");
const todoTemplate =
  document.getElementById("todoTemplate").content.firstElementChild;
const editDialog = document.getElementById("editDialog");

const projects = ["Inbox"];
export let elementId;

const openDialog = () => {
  dialog.showModal();
};
addTodo.addEventListener("click", openDialog);

export const closeDialog = () => {
  dialog.close();
};
cancel.addEventListener("click", closeDialog);

const openEditDialog = (event) => {
  elementId = event.target.parentElement.parentElement.id;
  console.log(elementId);
  editDialog.showModal();
};

export const closeEditDialog = () => {
  editDialog.close();
};
editCancel.addEventListener("click", closeEditDialog);

form.addEventListener("submit", newTask);
editForm.addEventListener("submit", editTask);

export const loadProjects = () => {
  projects.forEach((proj) => {
    const option = document.createElement("option");
    option.value = proj;
    option.textContent = proj;
    project.appendChild(option);
  });
  projects.forEach((proj) => {
    const option = document.createElement("option");
    option.value = proj;
    option.textContent = proj;
    editProject.appendChild(option);
  });
};

const createTodoElement = ({ _id, data }) => {
  const todoElement = todoTemplate.cloneNode(true);
  console.log(todoElement);
  todoElement.id = _id;
  todoElement.querySelector(".edit").addEventListener("click", openEditDialog);
  todoElement.querySelector(".taskName").textContent = data.taskName;

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

export const editTodo = ({ data }) => {
  const todoElement = document.getElementById(elementId);
  const taskName = todoElement.querySelector(".taskName");
  const descriptionSpacer = todoElement.querySelector(".descriptionSpacer");
  const description = todoElement.querySelector(".description");
  const dueDateSpacer = todoElement.querySelector(".dueDateSpacer");
  const dueDate = todoElement.querySelector(".dueDate");
  const priority = todoElement.querySelector(".priority");

  console.log(data);
  taskName.textContent = data.taskName;

  if (data.description === "") {
    descriptionSpacer.classList.add("hidden");
    description.classList.add("hidden");
  }
  if (data.description !== "") {
    if (description.classList.contains("hidden")) {
      descriptionSpacer.classList.remove("hidden");
      description.classList.remove("hidden");
    }
    description.textContent = data.description;
  }
  if (data.dueDate === "") {
    dueDateSpacer.classList.add("hidden");
    dueDate.classList.add("hidden");
  }
  if (data.dueDate !== "") {
    if (dueDate.classList.contains("hidden")) {
      dueDateSpacer.classList.remove("hidden");
      dueDate.classList.remove("hidden");
    }
    todoElement.querySelector(".dueDate").textContent = data.dueDate;
  }

  if (data.priority === 1) {
    priority.classList.remove(
      "border-orange-400",
      "border-blue-500",
      "border-slate-400",
    );
    priority.classList.add("border-red-500");
  } else if (data.priority === 2) {
    priority.classList.remove(
      "border-red-500",
      "border-blue-500",
      "border-slate-400",
    );
    priority.classList.add("border-orange-400");
  } else if (data.priority === 3) {
    priority.classList.remove(
      "border-red-500",
      "border-orange-400",
      "border-slate-400",
    );
    priority.classList.add("border-blue-500");
  } else {
    priority.classList.remove(
      "border-red-500",
      "border-orange-400",
      "border-blue-500",
    );
    priority.classList.add("border-slate-400");
  }
};
