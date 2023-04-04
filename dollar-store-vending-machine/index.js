function createItemStock(name, quantity, price){
    itemStock = {
        name: name || 'unknown',
        quantity: quantity || 0,
        price: price || 1.00
    }
    return itemStock
}

function makePurchase(selectedItem, moneyForPurchase){
    if (selectedItem.price > moneyForPurchase){
        return `Sorry, you need at least $${selectedItem.price} to make that purchase`
    } else if (selectedItem.quantity < 1){
        return 'Sorry, there are none left'
    } else 
    return `Here are your ${selectedItem.name}`
}

function collectChange(coins){
var Total = 0
const initialValue = 0;
const sumWithInitial = coins.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
)
return sumWithInitial
}

module.exports = {
    createItemStock, 
    collectChange,
    makePurchase
}
