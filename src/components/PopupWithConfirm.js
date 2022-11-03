import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector)
    this._handleSubmitForm = handleSubmitForm;
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._submitButtonTextContent = this._submitButton.textContent;
  }

  open(cardId, element) {
    this._cardId = cardId;
    this._element = element;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();

    this._submitButton.addEventListener("click", () => {
      super._renderLoading(true, "Удаление...")
      this._handleSubmitForm(this._cardId, this._element)
        .then(() => this.close())
        .finally(() => super._renderLoading(false))
    })
  }
}