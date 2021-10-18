function getPricePerMonth(price) {
  let num = (price / 12).toString();
  num = num.slice(0, num.indexOf(".") + 3);
  return Number(num);
}

function toggleLinkAdress() {
  let currentLink = linkAdress.getAttribute("href");
  linkAdress.setAttribute(
    "href",
    `${
      currentLink === "https://google.com/"
        ? "https://apple.com/"
        : "https://google.com/"
    }`
  );
}

function toggleSubscriptionStyle(e) {
  let isInactive = e.currentTarget.classList.contains(
    "subscription__box_inactive"
  );
  if (isInactive) {
    let arr = getNodeList("[data-toggle]");
    arr.forEach((element) => {
      element.classList.toggle(`${element.id}_inactive`);
      if (element.classList.contains("subscription__price")) {
        element.childNodes[0].classList.toggle(
          "subscription__price_span_inactive"
        );
      }
    });
    toggleLinkAdress();
  }
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
    subscrMonth.style.fontSize = "1.7vh";
  }
})(window, document);

function getNodeList(attr) {
  return Array.from(document.querySelectorAll(attr));
}

function getAndFillData(obj) {
  let arr = getNodeList("[data-string]");
  arr.forEach((element) => {
    let tegAttribute = element.dataset.string;
    let content;
    if (tegAttribute.includes("3 DAYS")) {
      content = obj[tegAttribute] + "!";
    }
    if (tegAttribute.includes("{{price}}/")) {
      content = obj[tegAttribute].replace(
        "{{price}}/",
        `$${
          isElementHasAttr(element, "pricePerMonth")
            ? pricePerMonth
            : getPricePerMonth(pricePerYear)
        } `
      );
    }
    if (tegAttribute.includes("<strong>{{price}}")) {
      content = obj[tegAttribute].replace(
        "<strong>{{price}}</strong>",
        `<span id="subscription__price_span" class="subscription__price_span ${
          !isElementHasAttr(element, "monthPrice") &&
          "subscription__price_span_inactive"
        }">$${
          isElementHasAttr(element, "monthPrice") ? pricePerMonth : pricePerYear
        }</span> `
      );
    }
    element.innerHTML = content || obj[tegAttribute];
  });
}

function isElementHasAttr(el, attr) {
  return el.hasAttribute(attr);
}

annuallyMarkup.addEventListener("touchstart", toggleSubscriptionStyle);
monthlyMarup.addEventListener("touchstart", toggleSubscriptionStyle);
