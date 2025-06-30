// Создаем переменную для хранения загруженных данных
let cachedData = null;

// Функция для загрузки данных
export async function loadData() {
	// Если данные уже загружены, возвращаем их
  if (cachedData) return cachedData;
	
	// Если данные еще не загружены, загружаем их
  try {
    const response = await fetch('products.json');
    cachedData = await response.json();
    return cachedData;
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    return null;
  }
}