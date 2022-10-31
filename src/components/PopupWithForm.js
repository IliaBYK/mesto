import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._submitButtonTextContent = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      try {
        super._renderLoading(true);
        this._handleSubmitForm(this._getInputValues())
        this.close();
      } catch(err) { 
        console.log(err)
      } finally {
        this._renderLoading(false);
      };
    })
  }

  close() {
    if (!this._popup.classList.contains('popup-edit')) {
      this._form.reset();
    }
    super.close();
  }
}