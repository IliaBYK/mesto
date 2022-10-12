import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, configObj, buttonAdd, buttonEdit, } from '../utils/constants.js';

import './index.css';

const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');

const buttonPopupEditSubmit = popupEdit.querySelector('#popupEdit__submit-button');
const buttonSubmitAddCard = popupAdd.querySelector('#popupAdd-submitButton');

const popupEditForm = popupEdit.querySelector('#popupEditForm');
const popupAddForm = popupAdd.querySelector('#popupFormAdd');

//валидация
const editFormValidator = new FormValidator(popupEditForm, configObj);
const addFormValidator = new FormValidator(popupAddForm, configObj);

//вызов функции валидации
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const userInfo = new UserInfo({ profileSelector: '.profile__title', aboutSelector: '.profile__subtitle' });
const popupImageAction = new PopupWithImage('.popup_action_open-img');
popupImageAction.setEventListeners();

const cardList = new Section({items: initialCards, 
  renderer: (item) => cardList.addItem(createCard(item))}, 
  '.elements'
);

cardList.renderItems();

function createCard(data) {
  const createdCard = new Card({ name: data.name, link: data.link},  '#cardTemplate', () => {
    popupImageAction.open(data.name, data.link)
  });
  return createdCard.generateCard();
}

const popupAdding = new PopupWithForm({popupSelector: '#popupAdd', handleSubmitForm: (items) => {
  cardList.addItem(createCard(items));
  popupAdding.close();
}})
popupAdding.setEventListeners();

const popupEditing = new PopupWithForm({popupSelector: '#popupEdit', handleSubmitForm: (items) => {
  userInfo.setUserInfo({profile: items.popupName, about: items.popupAbout});
  popupEditing.close();
}});
popupEditing.setEventListeners();

function openPopupAdd() {
  popupAdding.open();
  addFormValidator.disableButton();
}

buttonAdd.addEventListener('click', openPopupAdd);

function openPopupEdit() {
  popupEditing.open();
  editFormValidator.resetValidation();
}

buttonEdit.addEventListener('click', openPopupEdit);
