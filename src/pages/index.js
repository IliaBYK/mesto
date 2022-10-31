import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { configObj, buttonAdd, buttonEdit, optionsApi } from '../utils/constants.js';

import './index.css';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const popupUpdateAvatar = document.querySelector('#popupUpdate');

const popupEditForm = popupEdit.querySelector('#popupEditForm');
const popupAddForm = popupAdd.querySelector('#popupFormAdd');
const popupUpdateAvatarForm = popupUpdateAvatar.querySelector('#popupUpdateForm')

const api = new Api(optionsApi);

//валидация
const editFormValidator = new FormValidator(popupEditForm, configObj);
const addFormValidator = new FormValidator(popupAddForm, configObj);
const updateFormValidator = new FormValidator(popupUpdateAvatarForm, configObj);

//вызов функции валидации
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const userInfo = new UserInfo({ nameSelector: '.profile__title', aboutSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' });
api.getServerUserInfo().then(res => {
  userInfo.setUserInfo(res.name, res.about);
  userInfo.setUserAvatar(res.avatar);
});

const popupConfirm = new PopupWithConfirm({popupSelector: '#popupConfirm', handleSubmitForm: (cardId, element) => {
  api.deleteCard(cardId)
    .then(() => element.remove())
    .catch(err => console.log(err));
  popupConfirm.close();
}})

popupConfirm.setEventListeners();


const popupImageAction = new PopupWithImage('.popup_action_open-img');
popupImageAction.setEventListeners();

const cardList = new Section({
  items: api.getInitialCards(), 
  renderer: (item, userId) => {
    userId = item.owner._id;
    cardList.addItem(createCard(item))
  }}, 
  '.elements'
);

cardList.renderItems();

const handleCardClick = (name, link) => {
  popupImageAction.open(name, link);
}

const handleLikeClick = (card) => {
  if(!card.isLiked) {
    api.putLike(card._cardId)
      .then(res => card.putLike(res))
      .catch(err => console.log(`Ошибка: ${err.status}`))
  } else {
  api.deleteLike(card._cardId)
    .then(res => card.deleteLike(res))
    .catch(err => console.log(`Ошибка: ${err.status}`))
  }
}

const heandleDeleteButtonClick = (cardId, element) => {
  popupConfirm.open(cardId, element);
} 

function createCard(data) {
  const createdCard = new Card(data, '#cardTemplate', handleCardClick, handleLikeClick, heandleDeleteButtonClick);
  return createdCard.generateCard();
}

const popupAdding = new PopupWithForm({popupSelector: '#popupAdd', handleSubmitForm: (items) => {
  api.postServerCard(items)
    .then((res) => {
    res.userId = res.owner._id;
    cardList.addItem(createCard(res))
  });
  popupAdding.close();
}})
popupAdding.setEventListeners();

const popupEditing = new PopupWithForm({popupSelector: '#popupEdit', handleSubmitForm: (items) => {
  api.setServerUserInfo(items);
  userInfo.setUserInfo(items.name, items.about);
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
  popupEditing.setInputValues(userInfo.getUserInfo());
  editFormValidator.resetValidation();
}

buttonEdit.addEventListener('click', openPopupEdit);

const popupAvatar = new PopupWithForm({ popupSelector: '#popupUpdate', handleSubmitForm: (items) => {
  userInfo.setUserAvatar(items.avatar);
  api.setUserAvatar(items);
  popupAvatar.close();
}})
popupAvatar.setEventListeners();

function openPopupAvatar() {
  popupAvatar.open();
}

document.querySelector('.profile__avatar-pen').addEventListener('click', openPopupAvatar);
