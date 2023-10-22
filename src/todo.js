import { activeProject, addTaskForm, editId, editTaskForm } from "./dom";
import { projectReferences, projectTitles } from "./projects";

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
  addTaskForm.reset();
}

export function editTask(event) {
  event.preventDefault();
  const editTaskName = this.editTaskName.value;
  const editDescription = this.editDescription.value;
  const editDueDate = this.editDueDate.value;
  const editPriority = this.editPriority.value;
  if (projectTitles.includes(activeProject)) {
    projectReferences[projectTitles.indexOf(activeProject)].update(
      editId,
      (el) => ({
        ...el,
        taskName: editTaskName,
        description: editDescription,
        dueDate: editDueDate,
        priority: Number(editPriority),
      }),
    );
  }
  editTaskForm.reset();
}

export const deleteTask = (event) => {
  deleteId = event.target.parentElement.parentElement.parentElement.id;
  if (projectTitles.includes(activeProject)) {
    projectReferences[projectTitles.indexOf(activeProject)].remove(deleteId);
  }
};

export const completeTask = (event) => {
  deleteId = event.target.parentElement.id;
  if (projectTitles.includes(activeProject)) {
    projectReferences[projectTitles.indexOf(activeProject)].remove(deleteId);
  }
};
