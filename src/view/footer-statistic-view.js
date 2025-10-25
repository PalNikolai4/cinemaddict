import {createElement} from '../render.js';

const createFooterStatisticTemplate = () => '<p>130 291 movies inside</p>';

class FooterStatisticView {
  getTemplate() {
    return createFooterStatisticTemplate();
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

export default FooterStatisticView;
