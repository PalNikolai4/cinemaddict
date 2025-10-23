import {createElement} from '../render';

const createFilmCardTemplate = () => '';

class FilmCardView {
  getTemplate() {
    return createFilmCardTemplate();
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

export default FilmCardView;
