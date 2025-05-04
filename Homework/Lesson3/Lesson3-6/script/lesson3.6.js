let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://images.silpo.ua/products/744x744/cfe16bc8-dbc8-4dd8-a6ff-d1547cf33a6f.png'
    },
];
for (let product of products) {
    document.write(`<div class="product-card">
                            <h2>${product.title} - ${product.price} UAH</h2>
                            <img src="${product.image}" alt="" style="width: 200px; height: 200px">

                    </div>`);
}