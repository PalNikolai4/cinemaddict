import {createElement} from '../render';
import createFilmCardInfoTemplate from './film-card-info-template';
import createFilmCardControlsTemplate from './film-card-controls-template';

const createFilmCardTemplate = () =>
  `<article class="film-card">
    ${createFilmCardInfoTemplate()}
    ${createFilmCardControlsTemplate()}
  </article>`;

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
