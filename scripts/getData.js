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
  .then((res) => getAndFillData(res))
  .catch((err) => {
    console.log(err);
  });
