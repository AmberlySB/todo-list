import { Collection } from "./collection";
import { inbox, projectReferences, projectTitles, projects } from "./projects";

let counter = 0;
const inboxItems = [];
const projectItems = [];

export const addToLocalStorage = ({ _id, data }, { title }) => {
  localStorage.setItem(_id + "-" + title, JSON.stringify(data));
  counter++;
};

export const retrieveLocalStorage = () => {
  for (let i = 0; i < localStorage.length; i++) {
    console.log("ls key:", i, localStorage.key(i));
    if (localStorage.key(i).includes("Inbox")) {
      console.log(localStorage.key(i).includes("Inbox"));
      inboxItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    if (localStorage.key(i).includes("Projects")) {
      projectItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
};

export const consumeLocalStorage = () => {
  localStorage.clear();
  inboxItems.forEach((item) => inbox.add(item));
  projectItems.forEach((item) => {
    projectTitles.push(item.title);
    const newProject = Collection(item.title, item._id);
    projectReferences.push(newProject);
    projects.add(newProject);
  });
  console.log(inboxItems);
  console.log(projectItems);
  console.log(projectTitles);
  console.log(projectReferences);
};

export const removeFromLocalStorage = ({ _id }, { title }) => {
  localStorage.removeItem(_id + "-" + title);
};
