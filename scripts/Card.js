import { openPopup as openPopupFunc, closePopupByEsc, popupDescription, popupImage, popupImg } from './utils.js';

export class Card {
  constructor(data, templateSelector) {
    this._srcValue = data.link;
    this._titleValue = data.name;

    this._templateSelector = templateSelector;
  }

  _creatCard() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._creatCard();
    this._likeButton();
    this._deleteButton();
    this._setEventListener();

    const image = this._element.querySelector('.element__img');
    image.src = this._srcValue;
    image.alt = this._titleValue;
    this._element.querySelector('.element__title').textContent = this._titleValue;

    return this._element;
  }

  _deleteButton() {
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteCard();
    })
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _likeButton() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._toggleLikeButton();
    })
  }

  _toggleLikeButton() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _openPopup() {
    popupImg.src = this._srcValue;
    popupDescription.textContent = this._titleValue;
    popupImg.alt = this._titleValue;

    openPopupFunc(popupImage);
  }

  _setEventListener() {
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._openPopup();
    })
  }
}
