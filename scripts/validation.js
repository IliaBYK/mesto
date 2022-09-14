//показ/скрытие ошибки
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.toggle('popup__input-error_font-size_small', errorElement.textContent.length > 30)
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

//проверка валидации => показ/скрытие ошибки
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//активность кнопки
const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

const enableButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
}

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
};

//поверка валидации => активность кнопки
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElements = Array.from(formElement.querySelectorAll(config.submitButtonSelector));
  buttonElements.forEach((buttonElement) => {
    toggleButtonState(inputList, buttonElement, config);
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, config);

      buttonElements.forEach((buttonElement) => {
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  });
};


// включение валидации enableValidation
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      preventDefaultFunction(evt);
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(config.fieldSelector));

    fieldsetList.forEach((formElement) => {
      setEventListeners(formElement, config);
    });
  });
};


const configObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  fieldSelector: '.popup__set',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

enableValidation(configObj);

