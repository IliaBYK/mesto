const popUp = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const submitButton = document.querySelector('.popup__submit-button');

let userName = document.getElementById('popup__name');
let userAbout = document.getElementById('popup__about');

userName.value = profileName.textContent;
userAbout.value = profileAbout.textContent;


editButton.addEventListener('click', function () {
  popUp.classList.add('popup_opened');
});
closeButton.addEventListener('click', function () {
  popUp.classList.remove('popup_opened');
  userName.value = profileName.textContent;
  userAbout.value = profileAbout.textContent;
});

submitButton.addEventListener('click', function (){
  profileName.textContent = userName.value;
  profileAbout.textContent = userAbout.value;

  popUp.classList.remove('popup_opened');
});

let likeButtons = document.querySelectorAll('.element__like-button');

likeButtons.forEach(function(element) {
  element.addEventListener('click', function () {
  element.classList.toggle('element__like-button_active');
});
})





let imagesOfCaucasus = [
  'images/caucasusCherkessiya.jpg',
  'images/caucasusKabardino.jpg',
  'images/caucasusKarachaevo.jpg'
];

let imagesOfBaikal = [
  'images/baikalLake.jpg',
  'images/baikal-in-ice.jpg',
  'images/baikalSnow.jpg'
];

let imagesOfDombay = [
  'images/dombayCity.jpg',
  'images/dombayMountine.jpg',
  'images/dombayRock.jpg'
];

let imagesOfKamchatka = [
  'images/kamchatkaMountine.jpg',
  'images/kamchatkaPeninsula.jpg',
  'images/kamchatkaRock.jpg'
];

let imagesOfKareliya = [
  'images/kareliyaCave.jpg',
  'images/kareliyaKizhi.jpg',
  'images/kareliyaLake.jpg'
];

let imagesOfAltay = [
  'images/altayField.jpg',
  'images/altayGoldField.jpg',
  'images/altayTourists.jpg'
];



function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}



let caucasus = document.querySelector('#caucasus');
let kamchatka = document.querySelector('#kamchatka');
let dombay = document.querySelector('#dombay');
let baikal = document.querySelector('#baikal');
let kareliya = document.querySelector('#kareliya');
let altay = document.querySelector('#altay');

let i = 1;
caucasus.src = imagesOfCaucasus[0];
let imagesSlide = window.setInterval(function () {
  smoothly(caucasus, 'src', imagesOfCaucasus[i]);
  smoothly(kamchatka, 'src', imagesOfKamchatka[i]);
  smoothly(dombay, 'src', imagesOfDombay[i]);
  smoothly(baikal, 'src', imagesOfBaikal[i]);
  smoothly(altay, 'src', imagesOfAltay[i]);
  smoothly(kareliya, 'src', imagesOfKareliya[i]);
  i++;

  if (i == imagesOfCaucasus.length) {
    i = 0;
  }
}, 2000);

let images = document.querySelectorAll('.element__img');

images.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    function stopImagesSlide() {
      clearInterval(imagesSlide);
      imagesSlide = null;
    };
  });
})
