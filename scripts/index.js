import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const popupImage = document.querySelector('#popupOpenImg');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const srcInput = popupAdd.querySelector('#popup-src');
const titleInput = popupAdd.querySelector('#popup-place-name');
const nameInput = document.querySelector('#popup-name');
const jobInput = document.querySelector('#popup-about');
const cardsContainer = document.querySelector('.elements');

const popupEditForm = document.querySelector('#popupEditForm');
const popupAddForm = document.querySelector('#popupFormAdd');

export const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

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
editFormValidator._enableValidation();
addFormValidator._enableValidation();

//открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

//popupEdit
function openPopupEdit() {
  const buttonPopupEditSubmit = popupEdit.querySelector('#popupEdit__submit-button');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  editFormValidator._enableButton(buttonPopupEditSubmit);
  openPopup(popupEdit);
};
buttonEdit.addEventListener('click', openPopupEdit);

function closePopupEdit() {
  closePopup(popupEdit);
}

const preventDefaultFunction = (evt) => {
  evt.preventDefault();
}

//сабмит формы редактирования профиля

function handleProfileFormSubmit(evt) {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  closePopupEdit();
}

popupEditForm.addEventListener('submit', handleProfileFormSubmit);
//popupEdit

//попап картинки 

/*function openPopupImage(link, name) {
  popupImage.image.src = link;
  popupImage.imageDescription.textContent = name;
  
  popupImage.image.alt = name;
  const popup = new Popup(popupImage.popup, popupImage.image);
}

openPopupImage(srcInput, titleInput);*/


/*//добавление карточек при загрузке страницы
function createCard(srcValue, titleValue) {
  const cardTemplate = document.querySelector('#cardTemplate').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = cardElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  })
  const cardImg = cardElement.querySelector('.element__img');
  const cardTitle = cardElement.querySelector('.element__title');
  cardImg.src = srcValue;
  cardTitle.textContent = titleValue;
  //вот строчка, которая передает в alt заголовок карточки
  cardImg.alt = cardTitle.textContent;

  const likeButton = cardElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  cardImg.addEventListener('click', () => openPopupImage(srcValue, titleValue));
  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  renderCard(initialCards[i].link, initialCards[i].name);
}*/


//добавление карточек при загрузке страницы
initialCards.forEach((item) => {
  const card = new Card(item, popupImage, '#cardTemplate');
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);
});


//добавление карточки 
function addCard() {
  const fields = {
    link: srcInput.value,
    name: titleInput.value,
  };
  const card = new Card(fields, popupImage, '#cardTemplate');
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);
}

//закрытие попапа добавления карточки
function closePopupAdd() {
  closePopup(popupAdd);
}

//сабмит формы добавления карточки

function handlePopupAddFormSubmit() {
  const buttonSubmitAddCard = popupAdd.querySelector('#popupAdd-submitButton');
  addCard();
  popupAddForm.reset();
  addFormValidator._disableButton(buttonSubmitAddCard);
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
