export async function getProductsByCity(city) {
    try {
        const response = await fetch("./../../products.json");
        if (!response.ok) throw new Error('Ошибка загрузки файла');

        const data = await response.json();

        if (city === 'Пермь') {
            return data['Пермь'] || [];
        } 
				else if (city === 'Екатеринбург') {
            return data['Екатеринбург'] || [];
        } 
				else {
            throw new Error(`Нет данных для города: ${city}`);
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return [];
    }
}
