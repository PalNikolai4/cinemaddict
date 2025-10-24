import {render} from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import FilterView from './view/filter-view.js';
// import FooterStatisticView './view/footer-statistic-view.js' // ни модуль, ни компонент ещё не создал
import FilmsPresenter from './presenter/films-presenter.js';


const bodyElement = document.querySelector('body');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
// const siteFooterElement = bodyElement.querySelector('.footer'); // ни модуль, ни компонент ещё не создал
// const siteFooterStatisticElement = siteFooterElement.querySelector('.footer__statistics'); // ни модуль, ни компонент ещё не создал


render(new HeaderProfileView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
// render(new FooterStatisticView(), siteFooterStatisticElement); // ни модуль, ни компонент ещё не создал

const filmsPresenter = new FilmsPresenter();
filmsPresenter.init(siteMainElement);
