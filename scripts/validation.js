const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  //Ошибка длины текста перекрывает нижний инпут, пришлось ввести такое условие, чтобы изменить размер шрифта 
  //и размер текста соответственноы
  if (errorElement.textContent.length > 30) {
    errorElement.classList.add('popup__input-error_font-size_small');
  } else {
    errorElement.classList.remove('popup__input-error_font-size_small');
  }
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const disableButton = (buttonElement) => {
  buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  }

const enableButton = (buttonElement) => {
  buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    enableButton(buttonElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElements = Array.from(formElement.querySelectorAll(config.submitButtonSelector));
  buttonElements.forEach((buttonElement) => {
    toggleButtonState(inputList, buttonElement);
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);

      buttonElements.forEach((buttonElement) => {
        toggleButtonState(inputList, buttonElement);
      });
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      preventDefaultFunction(evt);
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(config.fieldSelector));

    fieldsetList.forEach((formElement) => {
      setEventListeners(formElement);
    });
  });
};

// включение валидации вызовом enableValidation

enableValidation(config);

