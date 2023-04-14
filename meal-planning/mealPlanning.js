function createMeal(meal, calorieGoal){
var meal = {
    type: meal,
    calorieGoal: calorieGoal,
    dishes: []
}
return meal
}

function addDish(meal, dish){
    // console.log(meal) { type: 'dinner', calorieGoal: 700, dishes: [] }
    // { type: 'lunch', calorieGoal: 400, dishes: [] }
    // console.log(dish) { name: 'garlic bread', calories: 200 }
    // { name: 'pizza', calories: 600 }
 if (dish.calories <= meal.calorieGoal){   
    meal.dishes.push(dish)
 }
 meal.calorieGoal -= dish.calories
    return meal
}

function calculateCalories(meal){
    var total = 0
for (var i = 0; i < meal.dishes.length; i++){
   total += meal.dishes[i].calories 
}
return `${meal.type} has a total of ${total} calories.`
}
module.exports = {
    createMeal,
    addDish, 
    calculateCalories
 }