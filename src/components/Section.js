export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(cards, userId) {
    cards.forEach(card => {
      this._renderer(card, userId);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}