import { projects, inbox, projectTitles, projectReferences } from "./projects";
import { editId } from "./dom";

export let deleteId;

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
  const projectValue = this.project.value;

  const newTodo = new Todo(
    taskName,
    descriptionValue,
    dueDateValue,
    Number(priorityValue),
  );
  if (projectTitles.includes(projectValue)) {
    projectReferences[projectTitles.indexOf(projectValue)].add(newTodo);
  }
}

export function editTask(event) {
  event.preventDefault();
  const editTaskName = this.editTaskName.value;
  const editDescription = this.editDescription.value;
  const editDueDate = this.editDueDate.value;
  const editPriority = this.editPriority.value;
  console.log(event.target);
  inbox.update(editId, (el) => ({
    ...el,
    taskName: editTaskName,
    description: editDescription,
    dueDate: editDueDate,
    priority: Number(editPriority),
  }));
}

export const deleteTask = (event) => {
  deleteId = event.target.parentElement.parentElement.parentElement.id;
  inbox.remove(deleteId);
};

export const completeTask = (event) => {
  deleteId = event.target.parentElement.id;
  inbox.remove(deleteId);
};
