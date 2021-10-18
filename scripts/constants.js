const restoreLink = document.querySelector(".header__restore");
const pageTitle = document.querySelector(".title");
const subscrMonth = document.querySelector(".subscription__free");
const discount = document.querySelector(".subscription__discount");
const contin = document.querySelector(".button");
const annuallyMarkup = document.querySelector(".subscription__annually");
const monthlyMarup = document.querySelector(".subscription__monthly");
const linkAdress = document.querySelector("#link");
const content = document.querySelectorAll(".content__list-text ");

const pricePerMonth = 9.99;
const pricePerYear = 19.99;

const localizations = ["en", "es", "fr", "ja", "nl", "ru", "zh"];
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("lang");

let userLang =
  myParam || (navigator.language || navigator.userLanguage).slice(0, 2);
