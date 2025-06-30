import { loadData } from "./loadData";
import { renderProducts } from "./renderProducts";

// Функция для загрузки начальных данных (По умолчанию Пермь)
export async function loadInitialData() {
	// Загружаем данные и если они успешно загрузились, отображаем их в виде карточек
  const data = await loadData();
  if (data) {
    renderProducts(Object.values(data));
  }
}