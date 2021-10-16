const yearPricePerMonth = getPricePerMonth(pricePerYear);

function getPricePerMonth(price) {
  let num = (price / 12).toString();
  num = num.slice(0, num.indexOf(".") + 3);
  return Number(num);
}

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

  montlyPrice.innerHTML = `<p id="priceM" class="subscription__price">
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
  annuallyPrice.innerHTML = `<p id="priceY" class="subscription__price subscription__price_inative">
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
