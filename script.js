"use strict";

const mainContainer = document.querySelector(".main-container");
const thankyouContainer = document.querySelector(".thankyou-container");
const ratings = document.querySelectorAll(".rating");
const ratingInfo = document.querySelector(".rating-info");
const submitButton = document.querySelector(".submit-button");

let ratingValue;

ratings.forEach((rating) => {
  rating.addEventListener("click", function (e) {
    e.preventDefault();

    const clicked = e.target;
    const siblings = e.target.closest(".ratings").querySelectorAll(".rating");

    siblings.forEach((el) => {
      el.classList.remove("rating--selected");
    });

    clicked.classList.add("rating--selected");
    ratingValue = clicked.textContent;
  });
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (ratingValue) {
    mainContainer.classList.add("hidden");
    thankyouContainer.classList.remove("hidden");

    ratingInfo.textContent = `You selected ${ratingValue} out of 5`;
    ratingInfo.innerHTML = `<p>You selected ${ratingValue} out of 5</p>`;
  }
});
