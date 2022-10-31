export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(userId) {
    this._renderedItems
      .then(res => res.forEach(item => this._renderer(item, userId)));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}