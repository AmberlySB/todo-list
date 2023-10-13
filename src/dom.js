import { newTask, editTask, deleteTask, deleteId, completeTask } from "./todo";
import { projectTitles, addNewProject, activeProject } from "./projects";

const addTodo = document.getElementById("add-todo");
const dialog = document.getElementById("dialog");
const cancel = document.getElementById("cancel");
const editCancel = document.getElementById("editCancel");
const addTaskForm = document.getElementById("form");
const editTaskForm = document.getElementById("editForm");
const project = document.getElementById("project");
const editProject = document.getElementById("editProject");
const todoList = document.getElementById("todoList");
const todoTemplate =
  document.getElementById("todoTemplate").content.firstElementChild;
const editDialog = document.getElementById("editDialog");
const menu = document.getElementById("menu");
const sideBar = document.getElementById("sideBar");
const content = document.getElementById("content");
const projectForm = document.getElementById("projectForm");
const projectDialog = document.getElementById("projectDialog");
const addProject = document.getElementById("addProject");
const projectCancelBtn = document.getElementById("projectCancelBtn");
const projectWrapper = document.getElementById("projectWrapper");
export const title = document.getElementById("title");

export let editId;

menu.addEventListener("click", () => {
  if (window.innerWidth >= 1280) {
    if (!sideBar.classList.contains("md:-translate-x-full")) {
      sideBar.classList.add("md:-translate-x-full");
      sideBar.classList.remove("md:translate-x-0");
      content.classList.remove("md:translate-x-80");
      content.classList.remove("md:w-[64%]");
      content.classList.remove("lg:w-3/4");
      content.classList.remove("xl:w-4/5");
    } else {
      sideBar.classList.remove("md:-translate-x-full");
      sideBar.classList.add("md:translate-x-0");
      content.classList.add("md:translate-x-80");
      content.classList.add("md:w-[64%]");
      content.classList.add("lg:w-3/4");
      content.classList.add("xl:w-4/5");
    }
  } else if (window.innerWidth >= 1024) {
    if (!sideBar.classList.contains("md:-translate-x-full")) {
      sideBar.classList.add("md:-translate-x-full");
      sideBar.classList.remove("md:translate-x-0");
      content.classList.remove("md:translate-x-80");
      content.classList.remove("md:w-[64%]");
      content.classList.remove("lg:w-3/4");
    } else {
      sideBar.classList.remove("md:-translate-x-full");
      sideBar.classList.add("md:translate-x-0");
      content.classList.add("md:translate-x-80");
      content.classList.add("md:w-[64%]");
      content.classList.add("lg:w-3/4");
    }
  } else if (window.innerWidth >= 768) {
    if (!sideBar.classList.contains("md:-translate-x-full")) {
      sideBar.classList.add("md:-translate-x-full");
      sideBar.classList.remove("md:translate-x-0");
      content.classList.remove("md:translate-x-80");
      content.classList.remove("md:w-[64%]");
    } else {
      sideBar.classList.remove("md:-translate-x-full");
      sideBar.classList.add("md:translate-x-0");
      content.classList.add("md:translate-x-80");
      content.classList.add("md:w-[64%]");
    }
  } else {
    if (!sideBar.classList.contains("translate-x-0")) {
      sideBar.classList.add("translate-x-0");
    } else {
      sideBar.classList.remove("translate-x-0");
    }
  }
});

const openDialog = () => dialog.showModal();
addTodo.addEventListener("click", openDialog);

export const closeDialog = () => dialog.close();
cancel.addEventListener("click", closeDialog);

const openEditDialog = (event) => {
  editId = event.target.parentElement.parentElement.parentElement.id;
  console.log(editId);
  editDialog.showModal();
};

export const closeEditDialog = () => editDialog.close();
editCancel.addEventListener("click", closeEditDialog);

const openProjectDialog = () => projectDialog.showModal();
addProject.addEventListener("click", openProjectDialog);

export const closeProjectDialog = () => projectDialog.close();
projectCancelBtn.addEventListener("click", closeProjectDialog);

addTaskForm.addEventListener("submit", newTask);
editTaskForm.addEventListener("submit", editTask);
projectForm.addEventListener("submit", addNewProject);

export function projectFormValidator() {
  const projectError = document.getElementById("projectError");
  if (projectTitles.includes(this.projectName.value)) {
    projectError.textContent = "This Project Already Exists!";
    return "error";
  } else {
    projectError.textContent = "";
  }
}

export const loadNewMenuProject = () => {
  const option = document.createElement("option");
  option.value = projectTitles[projectTitles.length - 1];
  option.textContent = projectTitles[projectTitles.length - 1];
  project.appendChild(option);
};

export const loadAllMenuProjects = () => {
  projectTitles.forEach((proj) => {
    const option = document.createElement("option");
    option.value = proj;
    option.textContent = proj;
    project.appendChild(option);
  });
  projectTitles.forEach((proj) => {
    const option = document.createElement("option");
    option.value = proj;
    option.textContent = proj;
    editProject.appendChild(option);
  });
};

const createProjectElement = ({ _id, data }) => {
  const div = document.createElement("div");
  div.id = _id;
  div.textContent = data.title;
  return div;
};

export const loadNewProject = (_, { collection }) => {
  projectWrapper.replaceChildren(
    ...collection.slice(1).map(createProjectElement),
  );
};

const createTodoElement = ({ _id, data }) => {
  const todoElement = todoTemplate.cloneNode(true);
  console.log(todoElement);
  todoElement.id = _id;
  todoElement
    .querySelector(".priority")
    .addEventListener("click", completeTask);
  todoElement.querySelector(".edit").addEventListener("click", openEditDialog);
  todoElement.querySelector(".delete").addEventListener("click", deleteTask);
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
  if (title.textContent === activeProject) {
    todoList.replaceChildren(...collection.map(createTodoElement));
  }
};

export const editTodoElement = ({ data }) => {
  const todoElement = document.getElementById(editId);
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

export const deleteTodo = () => {
  todoList.removeChild(document.getElementById(deleteId));
};
