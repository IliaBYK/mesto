export default class Card {
  constructor({name, link}, templateSelector, handleCardClick) {
    this._titleValue = name;
    this._srcValue = link;
    this._handleCardClick = handleCardClick;

    this._templateSelector = templateSelector;
  }

  _creatCard() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _toggleLikeButton() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _openPopupImage() {
      this._handleCardClick(this._titleValue, this._srcValue);
  }

  _setEventListener() {
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._openPopupImage();
    });
    
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._toggleLikeButton();
    });
  }

  generateCard() {
    this._element = this._creatCard();

    this._image = this._element.querySelector('.element__img');
    this._image.src = this._srcValue;
    this._image.alt = this._titleValue;
    this._element.querySelector('.element__title').textContent = this._titleValue;

    this._setEventListener();

    return this._element;
  }
}
