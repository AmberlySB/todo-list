const addTodo = document.getElementById("add-todo") as HTMLSpanElement;
const dialog = document.getElementById("dialog") as HTMLDialogElement;
const cancel = document.getElementById("cancel") as HTMLButtonElement;
export const addTask = document.getElementById("add-task") as HTMLButtonElement;
export const name = document.getElementById("name") as HTMLInputElement;
export const description = document.getElementById(
  "description",
) as HTMLInputElement;
export const dueDate = document.getElementById("date") as HTMLInputElement;
export const priority = document.getElementById(
  "priority",
) as HTMLSelectElement;

export const openDialog = () => {
  addTodo.addEventListener("click", () => {
    dialog.showModal();
  });
};

export const closeDialog = () => {
  cancel.addEventListener("click", () => {
    dialog.close();
  });
};
