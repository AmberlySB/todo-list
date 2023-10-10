import { inbox } from "./main";
import { elementId } from "./dom";

class Todo {
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
  event.preventDefault();
  const editTaskName = this.editTaskName.value;
  const editDescription = this.editDescription.value;
  const editDueDate = this.editDueDate.value;
  const editPriority = this.editPriority.value;
  console.log(event.target);
  inbox.update(elementId, (el) => ({
    ...el,
    taskName: editTaskName,
    description: editDescription,
    dueDate: editDueDate,
    priority: Number(editPriority),
  }));
}
