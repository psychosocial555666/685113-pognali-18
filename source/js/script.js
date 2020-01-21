var pageHeader = document.querySelector(".page-header")
var toogleOpened = document.querySelector(".toogle-opened")
var toogleClosed = document.querySelector(".toogle-closed")
var profilePopup = document.querySelector(".profile-popup")
var rateOpen = document.querySelector(".profile__rates")
var rateClose = document.querySelector(".profile-popup-close")

pageHeader.classList.remove("menu-opened")

toogleOpened.addEventListener("click", function (evt){
  evt.preventDefault();
  pageHeader.classList.add("menu-opened")
})

toogleClosed.addEventListener("click", function (evt){
  evt.preventDefault();
  pageHeader.classList.remove("menu-opened")
})

rateOpen.addEventListener("click", function (evt){
  evt.preventDefault();
  profilePopup.classList.remove("profile-popup-closed")
})

rateClose.addEventListener("click", function (evt){
  evt.preventDefault();
  profilePopup.classList.add("profile-popup-closed")
})
