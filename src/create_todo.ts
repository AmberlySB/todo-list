import {
  addTask,
  name,
  description,
  dueDate,
  priority,
  loadTodos,
  loadNewTodo,
} from "./dom";

export class Todo {
  name: string;
  description?: string;
  dueDate?: string;
  priority?: number;

  constructor(
    name: string,
    description?: string,
    dueDate?: string,
    priority?: number,
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const allTodos: Todo[] = [];

export const newTask = () => {
  addTask.addEventListener("click", () => {
    const nameValue = name.value;
    const descriptionValue = description.value;
    const dueDateValue = dueDate.value;
    const priorityValue = priority.value;
    const newTodo = new Todo(
      nameValue,
      descriptionValue,
      dueDateValue,
      Number(priorityValue),
    );
    allTodos.push(newTodo);
    loadNewTodo(allTodos);
    console.table(allTodos);
  });
};

// TODO: build function for editing todos
// build function for deleting todos
// ??? build function for unloading todos ???
// refactor todo class to include a property to represent the project it is associated with - set default to inbox
