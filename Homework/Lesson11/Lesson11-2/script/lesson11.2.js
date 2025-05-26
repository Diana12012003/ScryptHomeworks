fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        let {recipes} = data;

document.write(`<div>`);
for (const recipe of recipes) {
    document.write(`<div>`);
    document.write(`<h1>${recipe.id}</h1>`);
    document.write(`<h2>${recipe.name}</h2>`);
    document.write(`<h3> ID користувача: ${recipe.userId}</h3>`);
    document.write(`<img src="${recipe.image}" alt="${recipe.name}" style="width: 200px">`);
    document.write(`<p>Кухня: ${recipe.cuisine}</p>`);
    document.write(`<p>Складність: ${recipe.difficulty}</p>`);
    document.write(`<p>Підготовка: ${recipe.prepTimeMinutes} хв</p>`);
    document.write(`<p>Час приготування: ${recipe.cookTimeMinutes} хв</p>`);
    document.write(`<p>Калорії на порцію: ${recipe.caloriesPerServing}</p>`);
    document.write(`<p>Оцінка: ${recipe.rating} (${recipe.reviewCount} відгуків)</p>`);
    document.write(`<p>Тип страви: ${recipe.mealType}</p>`);
    document.write(`<p>Теги: ${recipe.tags}</p>`);
    document.write(`<p>Порції: ${recipe.servings}</p>`);
    document.write(`<h3>Інгредієнти:</h3>`);
    for (const ingredient of recipe.ingredients) {
        document.write(`<li>${ingredient}</li>`);
    }
    document.write(`</ul>`);
    document.write(`<h3>Інструкція:</h3>`);
    for (const step of recipe.instructions) {
        document.write(`<li>${step}</li>`);
    }
    document.write(`</div>`);
}
document.write(`</div>`);
});
