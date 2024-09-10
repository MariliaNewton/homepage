// const test = document.querySelector(".photo-container");
const cardAnimation = document.querySelector(".container-animation");

cardAnimation.addEventListener("mouseleave", () => {
  cardAnimation.classList.add("revert");
});
cardAnimation.addEventListener("mouseenter", () => {
  cardAnimation.classList.remove("revert");
});
