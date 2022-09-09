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

const closePopupByEsc = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

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
  enableButton(buttonPopupEditSubmit);
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
const popupEditForm = document.querySelector('#popupEditForm');

function handleProfileFormSubmit(evt) {
  preventDefaultFunction(evt);

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  closePopupEdit();
}

popupEditForm.addEventListener('submit', handleProfileFormSubmit);
//popupEdit

//попап картинки 
const popupImg = popupImage.querySelector('#popupImg');
const imageDescription = popupImage.querySelector('.popup__description');

function openPopupImage(link, name) {
  popupImg.src = link;
  imageDescription.textContent = name;
  
  popupImg.alt = name;
  openPopup(popupImage);
}

//добавление карточек при загрузке страницы
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
}
//добавление карточек при загрузке страницы

//функция отрисовки карточки
function renderCard(srcValue, titleValue) {
  cardsContainer.prepend(createCard(srcValue, titleValue));
}

//добавление карточки 
function addCard() {
  renderCard(srcInput.value, titleInput.value);
}

//закрытие попапа добавления карточки
function closePopupAdd() {
  closePopup(popupAdd);
}

//сабмит формы добавления карточки
const popupAddForm = document.querySelector('#popupFormAdd');

function handlePopupAddFormSubmit(evt) {
  const buttonSubmitAddCard = popupAdd.querySelector('#popupAdd-submitButton');
  preventDefaultFunction(evt);
  addCard();
  popupAddForm.reset();
  disableButton(buttonSubmitAddCard);
  closePopupAdd();
}

popupAddForm.addEventListener('submit', handlePopupAddFormSubmit);

//открытие попапа добавления карточки
function openPopupAdd() {
  openPopup(popupAdd);
}

buttonAdd.addEventListener('click', openPopupAdd);

//добавление карточки 

//закрытие попапа с картинкой 
function closePopupImage() {
  closePopup(popupImage);
}

/*клик на оверлей*/

const popupElements = Array.from(document.querySelectorAll('.popup'));
popupElements.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target || evt.target.classList.contains('popup__close-button')) {
      closePopup(popupElement);
    }
  });
});
