function createIngredient(name, price){
    var ingredient = {
        name: name || 'unknown',
        price: price || 0.00,
    }
    return ingredient
}

function createTaco(name, ingredients){
    var taco = {
        name: name || 'custom',
        ingredients: ingredients || [],
    }
    return taco
}

function addIngredientToTaco(taco, ingredient) {
    taco.ingredients.push(ingredient)
    return taco
}

function calculatePrice(taco) {
    price = 0
    for (var i = 0; i < taco.ingredients.length; i++){
        price += taco.ingredients[i].price
    }
    return price
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice 
}
