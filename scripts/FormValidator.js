export class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._config = config;
  }

  //показ/скрытие ошибки
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.toggle('popup__input-error_font-size_small', errorElement.textContent.length > 30)
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  //проверка валидации => показ/скрытие ошибки
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //активность кнопки
  _disableButton(buttonElement) {
    buttonElement.classList.add(this._config.inactiveButtonClass);
    buttonElement.disabled = true;
  }

  _enableButton(buttonElement) {
    buttonElement.classList.remove(this._config.inactiveButtonClass);
    buttonElement.disabled = false;
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement);
    } else {
      this._enableButton(buttonElement);
    }
  }

  //поверка валидации => активность кнопки
  _setEventListeners() {
    const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    const buttonElements = Array.from(this._form.querySelectorAll(this._config.submitButtonSelector));
    buttonElements.forEach((buttonElement) => {
      this._toggleButtonState(inputList, buttonElement);
    });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);

        buttonElements.forEach((buttonElement) => {
          this._toggleButtonState(inputList, buttonElement);
        });
      });
    });
  }

  // включение валидации enableValidation
  _enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));
    formList.forEach(() => {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      const fieldsetList = Array.from(this._form.querySelectorAll(this._config.fieldSelector));

      fieldsetList.forEach(() => {
        this._setEventListeners();
      });
    });
  }
}
