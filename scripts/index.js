const popupEdit = document.querySelector('#popupEdit');
const popupAdd = document.querySelector('#popupAdd');
const popupImage = document.querySelector('#popupOpenImg');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const closeButtonPopupAdd = document.querySelector('#popupAddCloseButton');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const srcInput = popupAdd.querySelector('#popupSrc');
const titleInput = popupAdd.querySelector('#popupPlaceName');
let nameInput = document.querySelector('#popupName');
let jobInput = document.querySelector('#popupAbout');
const elements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//открытие попапа
function openPopup (popup) {
  popup.classList.add('popup_opened');
}

//popupEdit
function openPopupEdit () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupEdit);
};
editButton.addEventListener('click', openPopupEdit);

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', () => {
  closePopup(popupEdit);
});


//сабмит формы редактирования профиля
let formElement = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  closePopup(popupEdit);
}

formElement.addEventListener('submit', formSubmitHandler); 
//popupEdit

//добавление карточек при загрузке страницы
function addCards(srcValue, titleValue) {
  const cardTemplate = document.querySelector('#cardTemplate').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const deleteButton = cardElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  })

  cardElement.querySelector('.element__img').src = srcValue;
  cardElement.querySelector('.element__title').textContent = titleValue;

  const likeButton = cardElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  const cardImg = cardElement.querySelector('.element__img');
  const cardTitle = cardElement.querySelector('.element__title')
  const popupImg = popupImage.querySelector('#popupImg');
  const imageDescription = popupImage.querySelector('.popup__description');
  cardImg.addEventListener('click', (evt) => {
    popupImg.src = cardImg.src;
    imageDescription.textContent = cardTitle.textContent;
    openPopup(popupImage);
  })

  elements.prepend(cardElement);
}

for (let i = 0; i < initialCards.length; i++) {
  addCards(initialCards[i].link, initialCards[i].name);
}
//добавление карточек при загрузке страницы

//добавление карточки 
function addCard () {
  addCards(srcInput.value, titleInput.value);
}

//сабмит формы добавления карточки
let popupAddForm = document.querySelector('#popupFormAdd');

function formSubmitHandlerPopupAdd(evt) {
  evt.preventDefault();
  addCard();
  srcInput.value = ''; 
  titleInput.value = '';
  closePopup(popupAdd);
}

popupAddForm.addEventListener('submit', formSubmitHandlerPopupAdd); 

//открытие попапа добавления карточки
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

//кнопка закрытия попапа добавления карточки
closeButtonPopupAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});
//добавление карточки 

//закрытие попапа с картинкой
const closeButtonPopupImage = popupImage.querySelector('#closeButtonPopupImage');
closeButtonPopupImage.addEventListener('click', () => {
  closePopup(popupImage)
});
