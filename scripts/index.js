const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const profileForm = document.querySelector(".popup__form");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#about");

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
profileForm.addEventListener("submit", handleProfileFormSubmit);
