const button = document.getElementById('select');
const textInput = document.getElementById('text'); // Поле ввода
const textEl = document.getElementById('textEl'); // Параграф для вывода

class Abiturient {
    constructor(names, age, region) {
        this.names = names;
        this.age = age;
        this.region = region;
    }

    inf() {
        // Сохраняем информацию в свойстве info объекта
        this.info = `Имя: ${this.names}, Возраст: ${this.age}, Регион: ${this.region}`;
        return this.info;
    }

    LogInfo() {
        button.addEventListener('click', () => {
            // Получаем значение из поля ввода
            const inputValue = textInput.value;
            
            // Если поле ввода пустое, используем данные из объекта
            if (!inputValue.trim()) {
                textEl.innerHTML = this.info || this.inf();
            } else {
                // Иначе выводим то, что ввел пользователь
                textEl.innerHTML = `Введено: ${inputValue}`;
                console.log(`Введено: ${inputValue}`);
            }
        });
    }
}

// Создаем объект с данными по умолчанию
let baseInfoAbiturient = new Abiturient('null',0, 'null');

// Вызываем методы
baseInfoAbiturient.inf(); // Создаем текстовое представление
baseInfoAbiturient.LogInfo(); // Назначаем обработчик клика