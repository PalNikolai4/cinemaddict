import { createElement } from "../render";

const createNewTaskButtonTemplate = () => {
  return '<button class="control__button">+ ADD NEW TASK</button>';
}

class NewTaskButtonView {
  getTemplate() {
    return createNewTaskButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export default NewTaskButtonView;
