import { inbox } from "./main";

export class Todo {
  taskName;
  description;
  dueDate;
  priority;

  constructor(taskName, description, dueDate, priority) {
    this.taskName = taskName;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function newTask(event) {
  event.preventDefault();
  const taskName = this.taskName.value;
  const descriptionValue = this.description.value;
  const dueDateValue = this.dueDate.value;
  const priorityValue = this.priority.value;

  const newTodo = new Todo(
    taskName,
    descriptionValue,
    dueDateValue,
    Number(priorityValue),
  );
  inbox.add(newTodo);
}

export function editTask(event) {
  console.log(event.target.parentElement.parentElement.id);
  inbox.update(event.target.parentElement.parentElement.id, (el) => ({
    ...el,
    priority: 2,
  }));
}

// TODO: build function for editing todos
// build function for deleting todos
// ??? build function for unloading todos ???
// create form validation
// look into date-fns
// clear form after submission and close dialog on submission
// function to open/close sidebar
