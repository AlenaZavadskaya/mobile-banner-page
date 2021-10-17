function getPricePerMonth(price) {
  let num = (price / 12).toString();
  num = num.slice(0, num.indexOf(".") + 3);
  return Number(num);
}

const yearPricePerMonth = getPricePerMonth(pricePerYear);

function getAndFillData(obj) {
  restoreLink.textContent = obj["Restore"];
  pageTitle.textContent = obj["Unlimited Access<br>to All Features"].replace(
    "<br>",
    " "
  );
  contentUnlim.textContent = obj["Unlimited documents"];
  contentExport.textContent = obj["Count mode"];
  contentRecognize.textContent = obj["Text recognition (OCR)"];
  monthly.textContent = obj["Monthly"];
  let textM = obj["<strong>{{price}}</strong><br>per month"].replace(
    "<strong>{{price}}</strong><br>",
    " "
  );

  monthlyPrice.innerHTML = `<p id="priceM" class="subscription__price">
      <span id="m-span" class="subscription__price_span">
        $${pricePerMonth}
      </span><br>
      ${textM}
    </p>`;

  subscrMonth.textContent = obj["3 DAYS FREE"] + "!";
  monthPerMonth.textContent = obj["{{price}}/month"].replace(
    "{{price}}/",
    `$${pricePerMonth} `
  );

  annually.textContent = obj["Annually"];
  discount.textContent = obj["-83%"];
  annuallyPrice.textContent = obj[
    "<strong>{{price}}</strong><br>per year"
  ].replace("<strong>{{price}}</strong><br>", "");
  let textY = obj["<strong>{{price}}</strong><br>per year"].replace(
    "<strong>{{price}}</strong><br>",
    " "
  );
  annuallyPrice.innerHTML = `<p id="priceY" class="subscription__price subscription__price_inactive">
      <span id="y-span" class="subscription__price_span subscription__price_span_inactive">
        $${pricePerYear}
      </span><br>
      ${textY}
    </p>`;
  subscrYear.textContent = obj["MOST POPULAR"];
  yearPerMonth.textContent = obj["{{price}}/month"].replace(
    "{{price}}/",
    `$${yearPricePerMonth} `
  );

  contin.textContent = obj["Continue"];
  info.textContent = obj["Auto-renewable. Cancel anytime."];
  term.textContent = obj["Terms of Use"];
  privacy.textContent = obj["Privacy Policy"];
}

function toggleSubscriptionYear() {
  annuallyMarkup.classList.remove("subscription_inactive");
  annuallyMarkup.classList.add("subscription_active");
  monthlyMarup.classList.add("subscription_inactive");
  discount.classList.remove("subscription__discount_inactive");
  annually.classList.remove("subscription__title_inactive");
  annuallyPrice.classList.remove("subscription__price_inactive");
  subscrYear.classList.remove("subscription__free_inactive");
  yearPerMonth.classList.remove("subscription__per-month_inactive");

  monthly.classList.add("subscription__title_inactive");
  monthlyPrice.classList.add("subscription__price_inactive");
  subscrMonth.classList.add("subscription__free_inactive");
  monthPerMonth.classList.add("subscription__per-month_inactive");

  linkAdress.setAttribute("href", "https://google.com/");
}

function toggleSubscriptionMonth() {
  annuallyMarkup.classList.add("subscription_inactive");
  monthlyMarup.classList.remove("subscription_inactive");
  monthlyMarup.classList.add("subscription_active");
  monthly.classList.remove("subscription__title_inactive");
  monthlyPrice.classList.remove("subscription__price_inactive");
  subscrMonth.classList.remove("subscription__free_inactive");
  monthPerMonth.classList.remove("subscription__per-month_inactive");

  discount.classList.add("subscription__discount_inactive");
  annually.classList.add("subscription__title_inactive");
  annuallyPrice.classList.add("subscription__price_inactive");
  subscrYear.classList.add("subscription__free_inactive");
  yearPerMonth.classList.add("subscription__per-month_inactive");
  linkAdress.setAttribute("href", "https://apple.com/");
}

(function reduceFont() {
  if (userLang === "nl") {
    pageTitle.style.maxWidth = "88%";
  } else if (userLang === "ru" || userLang === "fr") {
    pageTitle.style.fontSize = "3.7vh";
    pageTitle.style.maxWidth = "88%";
    Array.from(document.querySelectorAll(".content__list-text ")).forEach(
      (element) => {
        element.style.fontSize = "2vh";
      }
    );
    subscrMonth.style.fontSize = "3.5vw";
  }
})(window, document);

annuallyMarkup.addEventListener("touchstart", toggleSubscriptionYear);
monthlyMarup.addEventListener("touchstart", toggleSubscriptionMonth);
