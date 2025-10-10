import FilmButtonMoreView from './view/show-more-button-view.js';
import { render } from './render.js';

const siteMainElement = document.querySelector('.main');
render(new FilmButtonMoreView(), siteMainElement);
