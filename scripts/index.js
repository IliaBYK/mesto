const popUp = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('#popupName')
let jobInput = document.querySelector('#popupAbout')


function openPopup () {
  popUp.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
};
editButton.addEventListener('click', openPopup);

function closePopup () {
  popUp.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);



let formElement = document.querySelector('.popup__submit-button');
  // Находим поля формы в DOM

    // Обработчик «отправки» формы, хотя пока
    // она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
      // Так мы можем определить свою логику отправки.
      // О том, как это делать, расскажем позже.

      // Получите значение полей jobInput и nameInput из свойства value
  nameInput.value = profileName.textContent;
      // Выберите элементы, куда должны быть вставлены значения полей
  jobInput.value = profileAbout.textContent;
      // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
