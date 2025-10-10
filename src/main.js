import { render } from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import FilmButtonMoreView from './view/film-button-more-view.js';

render(new HeaderProfileView(), document.querySelector('.header'));
render(new FilmButtonMoreView(), document.querySelector('.main'));
