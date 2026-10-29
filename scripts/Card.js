import { openImagePopup } from "./utils.js";

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  #getTemplate() {
    const template = document.querySelector(this._templateSelector);
    return template.content.querySelector(".element").cloneNode(true);
  }

  #handleLikeButtonClick(evt) {
    evt.target.classList.toggle("element__like-button_active");
  }

  #handleDeleteButtonClick(evt) {
    const card = evt.target.closest(".element");
    card.remove();
  }

  #handleImageClick() {
    openImagePopup(this._link, this._name);
  }

  #setEventListeners(cardElement) {
    const image = cardElement.querySelector(".element__image");
    const likeButton = cardElement.querySelector(".element__like-button");
    const deleteButton = cardElement.querySelector(".element__delete-button");

    image.addEventListener("click", () => {
      this.#handleImageClick();
    });

    likeButton.addEventListener("click", (evt) => {
      this.#handleLikeButtonClick(evt);
    });

    deleteButton.addEventListener("click", (evt) => {
      this.#handleDeleteButtonClick(evt);
    });
  }

  getView() {
    const cardElement = this.#getTemplate();

    const image = cardElement.querySelector(".element__image");
    const title = cardElement.querySelector(".element__description");

    image.src = this._link;
    image.alt = this._name;
    title.textContent = this._name;

    this.#setEventListeners(cardElement);

    return cardElement;
  }
}
