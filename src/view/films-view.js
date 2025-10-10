import { createElement } from '../render';

const createFilmsViewTemplate = () => '<section class="films"></section>';

class FilmsView {
  getTemplate() {
    return createFilmsViewTemplate();
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

export default FilmsView;
