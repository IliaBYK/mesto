export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _renderLoading(isLoading, isLoadingText = 'Сохранение...') {
    if(!this._submitButton) return;
    if (isLoading) {
      this._submitButton.textContent = isLoadingText;
    } else {
      this._submitButton.textContent = this._submitButtonTextContent;
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.currentTarget === evt.target || evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
}