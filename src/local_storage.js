import { Collection } from "./collection";
import { inbox, projectReferences, projectTitles, projects } from "./projects";

export const addToLocalStorage = () => {
  localStorage.setItem("Projects", projects.toJSON());
};

const recoveredProjects = [];

export const retrieveLocalStorage = () => {
  if (localStorage.getItem("Projects") !== null) {
    const parseProjects = JSON.parse(localStorage.getItem("Projects"));
    parseProjects.collection.forEach((item) => {
      recoveredProjects.push(JSON.parse(item.data));
    });

    recoveredProjects.forEach((project) => {
      if (project.title === "Inbox") {
        project.collection.forEach((item) => inbox.add(item.data));
      } else {
        projectTitles.push(project.title);
        const initProject = Collection(project.title, project._id);
        projectReferences.push(initProject);
        projects.add(initProject);
        project.collection.forEach((item) => initProject.add(item.data));
      }
    });
  }
};
