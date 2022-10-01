import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './utils.js';

const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const srcInput = popupAdd.querySelector('#popup-src');
const titleInput = popupAdd.querySelector('#popup-place-name');
const nameInput = document.querySelector('#popup-name');
const jobInput = document.querySelector('#popup-about');
const cardsContainer = document.querySelector('.elements');

const buttonPopupEditSubmit = popupEdit.querySelector('#popupEdit__submit-button');
const buttonSubmitAddCard = popupAdd.querySelector('#popupAdd-submitButton');

const popupEditForm = document.querySelector('#popupEditForm');
const popupAddForm = document.querySelector('#popupFormAdd');

//объект настроек
const configObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  fieldSelector: '.popup__set',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

//валидация
const editFormValidator = new FormValidator(popupEditForm, configObj);
const addFormValidator = new FormValidator(popupAddForm, configObj);

//вызов функции валидации
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const preparationCard = (list) => {
  const card = new Card(list, '#cardTemplate');

  return card.generateCard();
}

const renderCard = (list) => {
  cardsContainer.prepend(preparationCard(list));
}

//popupEdit
function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  editFormValidator.enableButton(buttonPopupEditSubmit);
  openPopup(popupEdit);
};
buttonEdit.addEventListener('click', openPopupEdit);

function closePopupEdit() {
  closePopup(popupEdit);
}

//сабмит формы редактирования профиля

function handleProfileFormSubmit() {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  closePopupEdit();
}

popupEditForm.addEventListener('submit', handleProfileFormSubmit);

//добавление карточек при загрузке страницы
initialCards.forEach((item) => {
  renderCard(item);
});


//добавление карточки 
function addCard() {
  const fields = {
    link: srcInput.value,
    name: titleInput.value,
  };
  renderCard(fields);
}

//закрытие попапа добавления карточки
function closePopupAdd() {
  closePopup(popupAdd);
}

//сабмит формы добавления карточки

function handlePopupAddFormSubmit() {
  addCard();
  popupAddForm.reset();
  addFormValidator.disableButton(buttonSubmitAddCard);
  closePopupAdd();
}

popupAddForm.addEventListener('submit', handlePopupAddFormSubmit);

//открытие попапа добавления карточки
function openPopupAdd() {
  openPopup(popupAdd);
}

buttonAdd.addEventListener('click', openPopupAdd); 

/*клик на оверлей*/

const popupElements = Array.from(document.querySelectorAll('.popup'));
popupElements.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target || evt.target.classList.contains('popup__close-button')) {
      closePopup(popupElement);
    }
  });
});
