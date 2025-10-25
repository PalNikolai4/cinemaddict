import {render} from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
import FooterStatisticView from './view/footer-statistic-view.js';
import FilmsPresenter from './presenter/films-presenter.js';

const bodyElement = document.querySelector('body');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
const siteFooterElement = bodyElement.querySelector('.footer');
const siteFooterStatisticElement = siteFooterElement.querySelector('.footer__statistics');

render(new HeaderProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
render(new FooterStatisticView(), siteFooterStatisticElement);

const filmsPresenter = new FilmsPresenter();
filmsPresenter.init(siteMainElement);
