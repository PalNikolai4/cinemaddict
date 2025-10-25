import {createElement} from '../render';
import {createFilmDetailsInfoTemplate} from './film-details-info-template';
import {createFilmDetailsControlsTemplate} from './film-details-controls-template';
// import {createFilmDetailsCommentsTemplate} from './film-details-comments-template.js'
// import {createFilmDetailsNewCommentTemplate} from './film-details-new-comment-template.js'

const createFilmDetailsTemplate = () =>
  `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        ${createFilmDetailsInfoTemplate()}
        ${createFilmDetailsControlsTemplate}
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>
          ${createFilmDetailsCommentsTemplate}
          ${createFilmDetailsNewCommentTemplate}
        </section>
      </div>
    </form>
  </section>`;

class FilmDetailsView {
  getTemplate() {
    return createFilmDetailsTemplate();
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

export default FilmDetailsView;
