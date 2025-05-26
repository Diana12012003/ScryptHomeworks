fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        let { carts } = data;

        document.write(`<div>`);
        for (const cart of carts) {

            document.write(`<hr>`);
            document.write(`<div>`);
            document.write(`<p>Кошик ID: ${cart.id}</p>`);
            document.write(`<p>Користувач ID: ${cart.userId}</p>`);
            document.write(`<p>Кількість товарів: ${cart.totalProducts}</p>`);
            document.write(`<p>Загальна кількість: ${cart.totalQuantity}</p>`);
            document.write(`<p>Сума без знижки: ${cart.total} грн</p>`);
            document.write(`<p>Сума зі знижкою: ${cart.discountedTotal} грн</p>`);
            document.write(`<hr>`);

            for (const product of cart.products) {
                document.write(`<div>`);
                document.write(`<img src="${product.thumbnail}" alt="${product.title}" style="width:120px; height:auto;">`);
                document.write(`<div>`);
                document.write(`<p>ID: ${product.id}</p>`);
                document.write(`<p>Назва: ${product.title}</p>`);
                document.write(`<p>Ціна: ${product.price} грн</p>`);
                document.write(`<p>Кількість: ${product.quantity}</p>`);
                document.write(`<p>Сума без знижки: ${product.total} грн</p>`);
                document.write(`<p>Знижка: ${product.discountPercentage}%</p>`);
                document.write(`<p>Ціна після знижки: ${product.discountedTotal} грн</p>`);
                document.write(`</div>`);
                document.write(`</div>`);
            }

            document.write(`</div>`);
        }
        document.write(`</div>`);
    });


