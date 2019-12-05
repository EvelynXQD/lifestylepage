console.log("javascript");

const menuButton = document.querySelector(`.hamburger`);
const dropdown = document.querySelector(`.hamburger-container`);

menuButton.addEventListener(`click`, function(eventObj) {
  console.log("menu");

  eventObj.currentTarget.classList.toggle(`hamburger-expanded`);
  sidebar.classList.toggle(`hamburger-container-expanded`);

});
