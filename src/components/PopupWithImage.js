import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._img = this._popup.querySelector('.popup__img');
    this._description = this._popup.querySelector('.popup__description');
  }

  open(titleValue, srcValue) {
    this._img.src = srcValue;
    this._description.textContent = titleValue;
    this._img.alt = titleValue;

    super.open();
  }
}