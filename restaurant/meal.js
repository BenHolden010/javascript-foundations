function createMeal(name, specialRequests, tableNumber) {
    var meal = {
        name: name,
        specialRequests: specialRequests,
        tableNumber: tableNumber,
        complete: false
    }
    return meal
}

function getMade(meal){
    meal.complete = true
    return meal
}

function announceMeal(meal){
    if (meal.complete){
        return 'Order up - Chips & Queso for table 4!'
    } else 
    return 'This Margarita pizza is not completed yet'
}

function createOrder(order){
    console.log(order)
    var order = {
        tableNumber: order.tableNumber,
        meals: order.meals,
        completedMeals: [],
    }
    return order
}

function cookMeal(order, meal){
    if (meal.tableNumber === order.tableNumber)
order.completedMeals.push(meal.name)
return order
}

function listOrders(order){
order.specialRequests = []
for (var i = 0; i < order.meals.length; i++){
order.specialRequests.push(order.meals[i].name)
}
return order.specialRequests
}
module.exports = {
    createMeal,
    getMade,
    createOrder,
    cookMeal, 
    listOrders, 
    announceMeal
 };
