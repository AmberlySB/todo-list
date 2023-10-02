import { addTask, name, description, dueDate, priority } from "./dom";

export class Todo {
  name: string;
  description: string;
  dueDate?: string;
  priority?: number;

  constructor(
    name: string,
    description: string,
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
    console.table(allTodos);
  });
};
