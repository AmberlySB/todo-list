const addTodo = document.getElementById("add-todo") as HTMLSpanElement;
const dialog = document.getElementById("dialog") as HTMLDialogElement;
const cancel = document.getElementById("cancel");

export const openDialog = () => {
  addTodo.addEventListener("click", () => {
    dialog.showModal();
  });
};

export const closeDialog = () => {
  cancel?.addEventListener("click", () => {
    dialog.close();
  });
};
