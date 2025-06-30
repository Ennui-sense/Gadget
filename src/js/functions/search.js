import { getAllCards } from "./getAllCards";

const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button");

const productsNames = [];
searchInput.addEventListener("click", () => {
  const nameProducts = getAllCards().map((item) => item.querySelector(".catalog-cart__title"));

  nameProducts.forEach((item) => {
    productsNames.push(item.innerText);
  });
});

function contains(query) {
  return productsNames.filter((title) =>
    title.toLowerCase().includes(query.toLowerCase())
  );
}

const server = {
  search(query) {
    console.log(query);
    console.log(query ? contains(query) : []);

    return new Promise((resolve) => {
      setTimeout(() => resolve({ list: query ? contains(query) : [] }), 150);
    });
  },
};

function debounce(callee, timeoutMs) {
  return function perform(...args) {
    let previousCall = this.lastCall;

    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

function handleInput(e) {
  const { value } = e.target;

  server.search(value).then(function (response) {
    const { list } = response;

    const allCards = document.querySelectorAll('.catalog__cart');
    const allTitles = document.querySelectorAll('.catalog-cart__title');

    // Если поле поиска пустое — показываем ВСЕ карточки
    if (value === '') {
      allCards.forEach(card => card.style.display = 'flex')
      return;
    }

    // Если есть поисковый запрос:
    // 1. Создаем Set для быстрого поиска совпадений
    const matchingTitles = new Set(list.map(item => item.toLowerCase()));
    
    // 2. Сначала скрываем все карточки
    allCards.forEach(card => card.style.display = 'none');

    // 3. Показываем только совпадающие карточки
    allTitles.forEach(title => {
      const titleText = title.textContent.toLowerCase();
      if (matchingTitles.has(titleText)) {
        title.closest('.catalog-cart').style.display = 'flex';
      }
    });
  });
}

const debouncedHandle = debounce(handleInput, 250);
searchInput.addEventListener("input", debouncedHandle);
