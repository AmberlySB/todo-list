import { Todo } from "./create_todo";

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

export const loadTodos = (arr: Todo[]) => {
  const todoList = document.getElementById("todo-list") as HTMLDivElement;
  arr.forEach((todo, index: number) => {
    const div = document.createElement("div");
    div.id = `todo-${index + 1}`;
    div.classList.add(
      "border-b",
      "grid",
      "grid-cols-[auto,_1fr]",
      "grid-rows-[auto]",
      "gap-x-2",
      "gap-y-0.5",
      "py-3",
    );
    todoList.appendChild(div);

    const spanOne = document.createElement("span");
    spanOne.id = `todo-${index + 1}-priority`;
    spanOne.classList.add(
      "rounded-3xl",
      "border-2",
      "h-4",
      "w-4",
      "inline-block",
      "place-self-center",
    );
    if (todo.priority === 1) {
      console.log(todo.priority);
      spanOne.classList.add("border-red-500");
    } else if (todo.priority === 2) {
      spanOne.classList.add("border-orange-500");
    } else if (todo.priority === 3) {
      spanOne.classList.add("border-blue-500");
    } else {
      spanOne.classList.add("border-slate-400");
    }
    div.appendChild(spanOne);

    const paragraphOne = document.createElement("p");
    paragraphOne.id = `todo-${index + 1}-name`;
    paragraphOne.textContent = `${todo.name}`;
    div.appendChild(paragraphOne);

    const spanTwo = document.createElement("span");
    spanTwo.id = `todo-${index + 1}-description-spacer`;
    div.appendChild(spanTwo);

    const paragraphTwo = document.createElement("p");
    paragraphTwo.id = `todo-${index + 1}-description`;
    paragraphTwo.textContent = `${todo.description}`;
    div.appendChild(paragraphTwo);

    if (todo.description === "") {
      spanTwo.classList.add("hidden");
      paragraphTwo.classList.add("hidden");
    }

    const spanThree = document.createElement("span");
    spanThree.id = `todo-${index + 1}-date-spacer`;
    div.appendChild(spanThree);

    const paragraphThree = document.createElement("p");
    paragraphThree.id = `todo-${index + 1}-date`;
    paragraphThree.classList.add("text-xs");
    paragraphThree.textContent = `${todo.dueDate}`;
    div.appendChild(paragraphThree);

    if (todo.dueDate === "") {
      spanThree.classList.add("hidden");
      paragraphThree.classList.add("hidden");
    }
  });
};

export const loadNewTodo = (arr: Todo[]) => {
  const todoList = document.getElementById("todo-list") as HTMLDivElement;
  const div = document.createElement("div");
  div.id = `todo-${arr.length}`;
  div.classList.add(
    "border-b",
    "grid",
    "grid-cols-[auto,_1fr]",
    "grid-rows-[auto]",
    "gap-x-2",
    "gap-y-0.5",
    "py-3",
  );
  todoList.appendChild(div);

  const spanOne = document.createElement("span");
  spanOne.id = `todo-${arr.length}-priority`;
  spanOne.classList.add(
    "rounded-3xl",
    "border-2",
    "h-4",
    "w-4",
    "inline-block",
    "place-self-center",
  );
  if (arr[arr.length - 1].priority === 1) {
    spanOne.classList.add("border-red-500");
  } else if (arr[arr.length - 1].priority === 2) {
    spanOne.classList.add("border-orange-500");
  } else if (arr[arr.length - 1].priority === 3) {
    spanOne.classList.add("border-blue-500");
  } else {
    spanOne.classList.add("border-slate-400");
  }
  div.appendChild(spanOne);

  const paragraphOne = document.createElement("p");
  paragraphOne.id = `todo-${arr.length}-name`;
  paragraphOne.textContent = `${arr[arr.length - 1].name}`;
  div.appendChild(paragraphOne);

  const spanTwo = document.createElement("span");
  spanTwo.id = `todo-${arr.length}-description-spacer`;
  div.appendChild(spanTwo);

  const paragraphTwo = document.createElement("p");
  paragraphTwo.id = `todo-${arr.length}-description`;
  paragraphTwo.textContent = `${arr[arr.length - 1].description}`;
  div.appendChild(paragraphTwo);

  if (arr[arr.length - 1].description === "") {
    spanTwo.classList.add("hidden");
    paragraphTwo.classList.add("hidden");
  }

  const spanThree = document.createElement("span");
  spanThree.id = `todo-${arr.length}-date-spacer`;
  div.appendChild(spanThree);

  const paragraphThree = document.createElement("p");
  paragraphThree.id = `todo-${arr.length}-date`;
  paragraphThree.classList.add("text-xs");
  paragraphThree.textContent = `${arr[arr.length - 1].dueDate}`;
  div.appendChild(paragraphThree);

  if (arr[arr.length - 1].dueDate === "") {
    spanThree.classList.add("hidden");
    paragraphThree.classList.add("hidden");
  }
};
