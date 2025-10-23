import { createElement } from '../render';

const createFilmListContainerViewTemplate = () => `<div class="films-list__container"></div>`;

class FilmListContainerView {
  getTemplate() {
    return createFilmListContainerViewTemplate();
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

export default FilmListContainerView;
