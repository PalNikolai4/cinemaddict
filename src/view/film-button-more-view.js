import { createElement } from '../render';

const createFilmButtonMoreTemplate = () => '<button class="films-list__show-more">Show more</button>';

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
