import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openModal, closeModal, setOverlayListeners } from "./utils.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const editButton = document.querySelector(".profile__edit-button");

const profilePopup = document.querySelector("#profile-popup");
const profileCloseButton = profilePopup.querySelector(".popup__close");
const profileForm = document.querySelector("#form_edit-profile");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#about");

const elementsContainer = document.querySelector(".elements");

const addButton = document.querySelector(".profile__button");
const addCardPopup = document.querySelector(".popup_add-card");
const addCardCloseButton = document.querySelector(".popup__close_add-card");
const addCardForm = document.querySelector(".popup__form_add-card");

const titleInput = addCardForm.querySelector("#title");
const linkInput = addCardForm.querySelector("#link");

const imagePopup = document.querySelector(".popup_image");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close_image");

setOverlayListeners();

initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#element-template");
  elementsContainer.append(card.getView());
});

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openModal(profilePopup);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const title = titleInput.value;
  const link = linkInput.value;

  const card = new Card({ name: title, link: link }, "#element-template");

  elementsContainer.prepend(card.getView());

  closeModal(addCardPopup);
  evt.target.reset();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeModal(profilePopup);
}

editButton.addEventListener("click", openProfilePopup);

profileCloseButton.addEventListener("click", () => {
  closeModal(profilePopup);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", () => {
  openModal(addCardPopup);
});

addCardCloseButton.addEventListener("click", () => {
  closeModal(addCardPopup);
});

addCardForm.addEventListener("submit", handleAddCardSubmit);

imagePopupCloseButton.addEventListener("click", () => {
  closeModal(imagePopup);
});

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const forms = document.querySelectorAll(validationConfig.formSelector);

forms.forEach((form) => {
  const validator = new FormValidator(validationConfig, form);
  validator.enableValidation();
});
