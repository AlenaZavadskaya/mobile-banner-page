const restoreLink = document.querySelector(".header__restore");
const pageTitle = document.querySelector(".title");
const contentUnlim = document.querySelector("#unlim");
const contentExport = document.querySelector("#export");
const contentRecognize = document.querySelector("#rec");

const monthly = document.querySelector("#monthly");
const montlyPrice = document.querySelector("#priceM");
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

let userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
console.log(userLang);

function getLocalization(code = "en") {
  return fetch(`/localizations/${code}.json`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

let data = getLocalization(userLang);
data
  .then((res) => getData(res))
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

function getData(obj) {
  console.log(
    obj["Unlimited Access<br>to All Features"].split("<br>").join(" ")
  );
  restoreLink.textContent = obj["Restore"];
  pageTitle.textContent = obj["Unlimited Access<br>to All Features"].replace(
    "<br>",
    " "
  );
  contentUnlim.textContent = obj["Unlimited documents"];
  contentExport.textContent = obj["Count mode"];
  contentRecognize.textContent = obj["Text recognition (OCR)"];
  monthly.textContent = obj["Monthly"];
  montlyPrice.textContent = obj[
    "<strong>{{price}}</strong><br>per month"
  ].replace("<strong>{{price}}</strong><br>", "");
  subscrMonth.textContent = obj["3 DAYS FREE"];
  monthPerMonth.textContent = obj["{{price}}/month"];

  annually.textContent = obj["Annually"];
  discount.textContent = obj["-83%"];
  annuallyPrice.textContent = obj[
    "<strong>{{price}}</strong><br>per year"
  ].replace("<strong>{{price}}</strong><br>", "");
  subscrYear.textContent = obj["MOST POPULAR"];
  // yearPerMonth.textContent = obj[""];

  contin.textContent = obj["Continue"];
  info.textContent = obj["Auto-renewable. Cancel anytime."];
  term.textContent = obj["Terms of Use"];
  privacy.textContent = obj["Privacy Policy"];
}
