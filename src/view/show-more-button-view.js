import { createElement } from '../render';

const createFilmButtonMoreTemplate = () => '<h1>HTML razmetka</h1>';

class FilmButtonMoreView {
  getTemplate() {
    return createFilmButtonMoreTemplate();
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

export default FilmButtonMoreView;
