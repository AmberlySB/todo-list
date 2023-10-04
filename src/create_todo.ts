import {
  addTask,
  name,
  description,
  dueDate,
  priority,
  loadTodos,
  loadNewTodo,
  getId,
} from "./dom";

const project = getId("project") as HTMLSelectElement;

const projects: string[] = ["Inbox"];
const allTodos: Todo[] = [];

export class Todo {
  name: string;
  project: string;
  description?: string;
  dueDate?: string;
  priority?: number;

  constructor(
    name: string,
    project: string,
    description?: string,
    dueDate?: string,
    priority?: number,
  ) {
    this.name = name;
    this.project = project;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export const newTask = () => {
  addTask.addEventListener("click", () => {
    const nameValue = name.value;
    const projectValue = project.value;
    const descriptionValue = description.value;
    const dueDateValue = dueDate.value;
    const priorityValue = priority.value;
    const newTodo = new Todo(
      nameValue,
      projectValue,
      descriptionValue,
      dueDateValue,
      Number(priorityValue),
    );
    allTodos.push(newTodo);
    loadNewTodo(allTodos);
    console.table(allTodos);
  });
};

export const loadProjects = () => {
  projects.forEach((proj) => {
    const option = document.createElement("option");
    option.value = proj;
    option.textContent = proj;
    project.appendChild(option);
  });
};

// TODO: build function for editing todos
// build function for deleting todos
// ??? build function for unloading todos ???
// refactor todo class to include a property to represent the project it is associated with - set default to inbox
// create form validation
// look into date-fns
// clear form after submission and close dialog on submission
