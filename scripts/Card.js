import { closePopupByEsc } from './index.js';

export class Card {
  constructor(data, popup, templateSelector) {
    this._srcValue = data.link;
    this._titleValue = data.name;
    this._popup = popup;
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

    this._element.querySelector('.element__img').src = this._srcValue;
    this._element.querySelector('.element__img').alt = this._titleValue;
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
    this._popup.querySelector('.popup__img').src = this._srcValue;
    this._popup.querySelector('.popup__description').textContent = this._titleValue;
    this._popup.querySelector('.popup__img').alt = this._titleValue;

    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
  }

  _setEventListener() {
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._openPopup();
    })
  }
}
