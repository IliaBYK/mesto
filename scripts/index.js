const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const popupImage = document.querySelector('#popupOpenImg');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close-button');
const buttonPopupAddClose = document.querySelector('#popupAddCloseButton');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const srcInput = popupAdd.querySelector('#popupSrc');
const titleInput = popupAdd.querySelector('#popupPlaceName');
const nameInput = document.querySelector('#popupName');
const jobInput = document.querySelector('#popupAbout');
const cardsContainer = document.querySelector('.elements');

//открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//popupEdit
function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupEdit);
};
buttonEdit.addEventListener('click', openPopupEdit);

function closePopupEdit() {
  closePopup(popupEdit);
}

buttonClose.addEventListener('click', closePopupEdit);


//сабмит формы редактирования профиля
const formElement = document.querySelector('.popup__form');

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  closePopupEdit();
}

formElement.addEventListener('submit', handleProfileFormSubmit);
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
function addCard(srcValue, titleValue) {
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
  cardsContainer.prepend(addCard(srcValue, titleValue));
}

//добавление карточки 
function createCard() {
  renderCard(srcInput.value, titleInput.value);
}

//закрытие попапа добавления карточки
function closePopupAdd() {
  closePopup(popupAdd);
}

//сабмит формы добавления карточки
const popupAddForm = document.querySelector('#popupFormAdd');

function handlePopupAddFormSubmit(evt) {
  evt.preventDefault();
  createCard();
  popupAddForm.reset();
  closePopupAdd();
}

popupAddForm.addEventListener('submit', handlePopupAddFormSubmit);

//открытие попапа добавления карточки
function openPopupAdd() {
  openPopup(popupAdd);
}

buttonAdd.addEventListener('click', openPopupAdd);

//кнопка закрытия попапа добавления карточки
buttonPopupAddClose.addEventListener('click', closePopupAdd);
//добавление карточки 

//закрытие попапа с картинкой 
function closePopupImage() {
  closePopup(popupImage);
}

//закрытие попапа с картинкой
const buttonPopupImageClose = popupImage.querySelector('#closeButtonPopupImage');
buttonPopupImageClose.addEventListener('click', closePopupImage);

