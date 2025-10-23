import render from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import FilmCardView from './view/films-view.js';

import FilmButtonMoreView from './view/film-button-more-view.js';


const siteMainElement = document.querySelector('.main');

render(new HeaderProfileView(), document.querySelector('.header'));
// render(new FilterView(), siteMainElement);
// render(new SortView(), siteMainElement);
// render(new FilmCardView(), siteMainElement);

// render(new FilmButtonMoreView(), siteMainElement);
