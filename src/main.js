import NewTaskButtonView from "./view/new-task-button-view.js";
import { render } from "./render.js";

const siteMainElement = document.querySelector('.main');
render(new NewTaskButtonView(), siteMainElement);
