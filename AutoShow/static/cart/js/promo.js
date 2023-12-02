function applyPromo() {
    const promoCodeInput = document.getElementById('promo');
    const promoCodeValue = promoCodeInput.value;

    if (!promoCodeValue) {
        alert('Введите промокод');
        return;
    }

    fetch('http://127.0.0.1:8000/cart/api/')
        .then(response => response.json())
        .then(data => {
            // Проходим по каждому элементу в полученном списке
            for (const promo of data) {
                if (promo.value === promoCodeValue) {
                    // Обработайте найденный промокод по вашему усмотрению
                    applyDiscount(promo.discount);
                    return; // Завершаем цикл после первого найденного совпадения
                }
            }

            // Если мы дошли сюда, значит промокод не был найден
            alert('Промокод не найден');
        })
        .catch(error => alert('Error: ' + error));
}

function applyDiscount(discount) {
    // Ваш код для применения скидки на клиентской стороне
    const total_price = document.querySelector('.total_price');

    old_price = total_price.textContent.replace("$", "");
    old_price = old_price.replace(",", ".");

    old_price = Number(old_price);

    let new_price = ((100 - discount) * old_price / 100).toString();
    total_price.textContent = "$" + new_price;
    alert(`Применена скидка ${discount}%`);
}
function updateCartTotal() { //доделать
    // Отправить запрос на сервер для обновления информации о корзине
    fetch('http://127.0.0.1:8000/cart/update_total/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ new_total: document.querySelector('.total_price').textContent }),
    })
        .then(response => response.json())
        .then(data => {
            // Обработать ответ от сервера, если необходимо
            console.log('Корзина обновлена:', data);
        })
        .catch(error => console.error('Ошибка при обновлении корзины:', error));
}
