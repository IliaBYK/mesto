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

const popupEditForm = document.forms['edit-profile'];
const popupAddForm = document.forms['add-card'];
const popupUpdateAvatarForm = document.forms['edit-avatar'];

const api = new Api(optionsApi);

//валидация
const editFormValidator = new FormValidator(popupEditForm, configObj);
const addFormValidator = new FormValidator(popupAddForm, configObj);
const updateFormValidator = new FormValidator(popupUpdateAvatarForm, configObj);

//вызов функции валидации
editFormValidator.enableValidation();
addFormValidator.enableValidation();
updateFormValidator.enableValidation();

const userInfo = new UserInfo({ nameSelector: '.profile__title', aboutSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' });

const popupConfirm = new PopupWithConfirm({popupSelector: '#popupConfirm', handleSubmitForm: (cardId, element) => {
  return api.deleteCard(cardId)
    .then(() => element.remove())
    .catch(err => console.log(err));
}})
popupConfirm.setEventListeners();

const popupImageAction = new PopupWithImage('.popup_action_open-img');
popupImageAction.setEventListeners();

Promise.all([api.getServerUserInfo(), api.getInitialCards()])
  .then(([serverUserInfo, cards]) => {
    userInfo.setUserInfo(serverUserInfo.name, serverUserInfo.about)
    userInfo.setUserAvatar(serverUserInfo.avatar);
    cardList.renderItems(cards, serverUserInfo._id);
  }).catch((err) => console.log(err));

const cardList = new Section({
  renderer: (card, userId) => {
    card.userId = userId;
    cardList.addItem(createCard(card))
  }
},
 '.elements'
);

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
  return api.postServerCard(items)
    .then((res) => {
    res.userId = res.owner._id;
    cardList.addItem(createCard(res))
  });
}})
popupAdding.setEventListeners();

const popupEditing = new PopupWithForm({popupSelector: '#popupEdit', handleSubmitForm: (items) => {
  return api.setServerUserInfo(items)
    .then(res => userInfo.setUserInfo(res.name, res.about))
    .catch(err => console.log(err));
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

const popupAvatar = new PopupWithForm({ popupSelector: '#popupUpdate', handleSubmitForm: (item) => {
  return api.setUserAvatar(item)
    .then(() => {userInfo.setUserAvatar(item.avatar)})
    .catch((err) => console.log(err))
}})
popupAvatar.setEventListeners();

function openPopupAvatar() {
  updateFormValidator.resetValidation();
  updateFormValidator.disableButton();
  popupAvatar.open();
}

document.querySelector('.profile__avatar-pen').addEventListener('click', openPopupAvatar);


api.getServerUserInfo().then(res => console.log(res))
