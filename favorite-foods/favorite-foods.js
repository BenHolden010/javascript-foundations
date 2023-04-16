function createFavoriteFood(food){
    // console.log(favoriteFood.dish) === pizza
    var favoriteFood = {
        name: food.dish,
        ingredients: food.ingredients,
        isSpicy: food.isSpicy,
        timesOrdered: 0,
    }
return favoriteFood
}

function commentOnSpiciness(dish){
    if (dish.isSpicy){
        return 'Wow, this Pho is so spicy!'
    } else
    return 'Phew, this Lasagna is not very spicy.'
}

function orderFood(favoriteFood){
    favoriteFood.timesOrdered += 1
    return favoriteFood
}

function createShoppingList(foods) {
    // foods === [
//   {
//     name: 'Pizza',
//     ingredients: [ 'Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms' ],
//     isSpicy: false,
//     timesOrdered: 0
//   },
//   {
//     name: 'Smoothie',
//     ingredients: [ 'Banana', 'Strawberry', 'Blueberry', 'Milk', 'Honey' ],
//     isSpicy: false,
//     timesOrdered: 0
//   }
// ]
    console.log(foods)
    var list = []
    for (var i = 0; i < foods.length; i++){
      for (var j = 0; j < foods[i].ingredients.length; j++){
        list.push(foods[i].ingredients[j])
      }
    }
    return list
}

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};