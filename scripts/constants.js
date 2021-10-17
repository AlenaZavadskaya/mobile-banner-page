const restoreLink = document.querySelector(".header__restore");
const pageTitle = document.querySelector(".title");
const contentUnlim = document.querySelector("#unlim");
const contentExport = document.querySelector("#export");
const contentRecognize = document.querySelector("#rec");
const monthly = document.querySelector("#monthly");
const monthlyPrice = document.querySelector("#priceM");
const subscrMonth = document.querySelector("#subM");
const monthPerMonth = document.querySelector("#m-per-m");
const annually = document.querySelector("#annually");
const discount = document.querySelector(".subscription__discount");
const annuallyPrice = document.querySelector("#priceY");
const subscrYear = document.querySelector("#subY");
const yearPerMonth = document.querySelector("#y-per-m");
const contin = document.querySelector(".button");
const info = document.querySelector(".footer__info");
const term = document.querySelector("#term");
const privacy = document.querySelector("#privacy");
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
