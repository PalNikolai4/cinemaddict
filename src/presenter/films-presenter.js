import { render } from '../render.js';
import {FILM_COUNT} from '../const.js';

import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';

class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmListComponent = new FilmListView();
  filmListContainerComponent = new FilmListContainerView();

  init = (container) => {
    this.container = container;

    render(new SortView(), this.container);
    render(this.filmsComponent, this.container);
    render(this.filmListComponent, this.filmsComponent.getElement());


    render(this.filmListContainerComponent, this.filmListComponent.getElement());
    for (let i = 0; i < FILM_COUNT; i++) {
      render(new FilmCardView(), this.filmListContainerComponent.getElement());
    }
    render(new FilmButtonMoreView(), this.filmListComponent.getElement());

    // render(new FilmDetailsView(), this.container.parentElement);
  };
}

export default FilmsPresenter;
