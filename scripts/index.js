const butEdit = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const butClose = document.querySelector(".popup__close");
const form = document.querySelector(".popup__form");
const inName = document.querySelector(".profile__name");
const inAbout = document.querySelector(".profile__job");
const inpName = document.querySelector("#name");
const inpAbout = document.querySelector("#about");

function openEdit() {
  inpName.value = inName.textContent;
  inpAbout.value = inAbout.textContent;
  popup.classList.toggle("popup__open");
}

butEdit.addEventListener("click", openEdit);
butClose.addEventListener("click", openEdit);

function saveChange(e) {
  e.preventDefault();
  inName.textContent = inpName.value;
  inAbout.textContent = inpAbout.value;
  openEdit();
}

form.addEventListener("submit", saveChange);
