function getPageLanguage(lang) {
  return localizations.includes(lang) ? lang : "en";
}

function getLocalization(code) {
  return fetch(`/localizations/${code}.json`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

let data = getLocalization(getPageLanguage(userLang));
data
  .then((res) => getAndFillData(res))
  .catch((err) => {
    console.log(err);
  });
