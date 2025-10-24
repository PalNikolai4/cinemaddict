import {render} from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';

const siteMainElement = document.querySelector('.main');

render(new HeaderProfileView(), document.querySelector('.header'));
render(new FilterView(), siteMainElement);
