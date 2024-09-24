
document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
}

// Закрытие модального окна при нажатии на элемент с классом "close"
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}

// Закрытие модального окна, если кликнули вне его
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}

// Отправка данных на сервер
document.getElementById('submitData').onclick = function() {
    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const field3 = document.getElementById('field3').value;

    // Проверка, что все поля заполнены
    if (!field1 || !field2 || !field3) {
        alert('Пожалуйста, заполните все поля.');
        return; // Завершение функции, если поля не заполнены
    }

    // Отправка данных на сервер
    fetch('/add_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ field1, field2, field3 })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Сообщение об успешном добавлении данных
        document.getElementById('myModal').style.display = 'none'; // Закрыть модальное окно
        // Очистка полей ввода
        document.getElementById('field1').value = '';
        document.getElementById('field2').value = '';
        document.getElementById('field3').value = '';
    })
    .catch(error => console.error('Ошибка:', error));
 };

// Запрос данных с сервера
document.getElementById('getDataButton').onclick = function() {
    const field = prompt("Введите значение поля 1 для вывода данных:");
    if (!field) {
        alert('Пожалуйста, введите значение поля.');
        return; // Завершение функции, если значение не введено
    }

    fetch(`/get_data/${field}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                alert('Нет данных для данного значения.');
            } else {
                console.log(data); // Вывод данных в консоль
                alert(JSON.stringify(data)); // Вывод данных в виде строки
            }
        })
        .catch(error => console.error('Ошибка:', error));
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// Открытие модального окна
btn.onclick = function() {
  modal.style.display = "block";
}

// Закрытие при нажатии на крестик
span.onclick = function() {
  modal.style.display = "none";
}

// Закрытие при клике вне окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
