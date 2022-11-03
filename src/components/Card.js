export default class Card {
  constructor(data, templateSelector, handleCardClick, handleLikeClick, heandleDeleteButtonClick) {
    this._titleValue = data.name;
    this._srcValue = data.link;
    this._owner = data.owner;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
    this._userId = data.userId;
    this.isLiked = false;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._heandleDeleteButtonClick = heandleDeleteButtonClick;
    this._templateSelector = templateSelector;
  }

  _creatCard() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  getId() {
    return this._cardId;
  }

  putLike(card) {
    this._likeButton.classList.add('element__like-button_active');
    this._counter.textContent = card.likes.length;
    this.isLiked = true;
  }

  deleteLike(card) {
    this._likeButton.classList.remove('element__like-button_active');
    this._counter.textContent = card.likes.length;
    this.isLiked = false;
  }

  _openPopupImage() {
      this._handleCardClick(this._titleValue, this._srcValue);
  }

  _setEventListener() {
    this._likeButton = this._element.querySelector('.element__like-button');
    if (this.isLiked) {
      this._likeButton.classList.add('element__like-button_active');
    }

    this._image.addEventListener('click', () => {
      this._openPopupImage();
    });

    this._deleteButton.addEventListener('click', () => {
      this._heandleDeleteButtonClick(this._cardId, this._element);
    });

    this._likeButton.addEventListener('click', () => this._handleLikeClick(this));
  }

  generateCard() {
    this._element = this._creatCard();

    this._likes.forEach((guest) => {
      if (guest._id === this._userId) {
        this.isLiked = true;
      }
    });

    this._counter = this._element.querySelector('.element__like-counter');
    this._deleteButton = this._element.querySelector('.element__delete-button');
    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
    }

    this._image = this._element.querySelector('.element__img');
    this._image.src = this._srcValue;
    this._image.alt = this._titleValue;
    this._element.querySelector('.element__title').textContent = this._titleValue;
    this._counter.textContent = this._likes.length;

    this._setEventListener();

    return this._element;
  }
}
