import "./style.css";
import { openDialog, closeDialog } from "./dom";
import { newTask, loadProjects } from "./create_todo";

openDialog();
closeDialog();
newTask();
loadProjects();
