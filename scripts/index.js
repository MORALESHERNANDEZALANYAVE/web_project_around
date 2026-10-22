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

const imagePopup = document.querySelector(".popup_image");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close_image");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

function openModal(modal) {
  modal.classList.add("popup_opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_opened");
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

function openImagePopup(link, name) {
  imagePopupImage.src = link;
  imagePopupImage.alt = name;
  imagePopupCaption.textContent = name;

  openModal(imagePopup);
}

function handleDeleteButtonClick(evt) {
  const card = evt.target.closest(".element");
  card.remove();
}

function createCard(name, link) {
  const card = document.createElement("div");
  card.classList.add("element");

  const image = document.createElement("img");
  image.classList.add("element__image");
  image.src = link;
  image.alt = name;

  image.addEventListener("click", () => {
    openImagePopup(link, name);
  });

  const cardContent = document.createElement("div");
  cardContent.classList.add("element__cards");

  const title = document.createElement("h2");
  title.classList.add("element__description");
  title.textContent = name;

  const likeButton = document.createElement("button");
  likeButton.classList.add("element__like-button");
  likeButton.type = "button";

  likeButton.addEventListener("click", handleLikeButtonClick);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("element__delete-button");
  deleteButton.type = "button";

  deleteButton.addEventListener("click", handleDeleteButtonClick);

  cardContent.append(title, likeButton);
  card.append(image, cardContent, deleteButton);

  return card;
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData.name, cardData.link);
  elementsContainer.append(cardElement);
});

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openModal(profilePopup);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const title = evt.target.elements.title.value;
  const link = evt.target.elements.link.value;

  const newCard = createCard(title, link);
  elementsContainer.prepend(newCard);

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
