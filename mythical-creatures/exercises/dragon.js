function createDragon(name, rider, temperment){
  // pseudocode - should be able to create a dragon with a name
  // should be able to have a different name
  // should have a rider
  // should be able to have a different rider
  // should have a temperment
  // should be able to have different temperments
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  }
  // console.log(dragon)
  return dragon
}

function greetRider(dragon){
  // pseudocode - should greet their rider
  return `Hi, ${dragon.rider}!`
}

function eat(dragon){
  // pseudocode - should start off having eaten 0 times
  // should start off being hungry
  // should be full after eating 3 times
dragon.timesEaten++ 
if (dragon.timesEaten === 3) {
dragon.hungry = false
} 
  return dragon
}


function findFireBreathers(allDragons){
  // pseudocode - should be a fireBreather if aggressive in temperment
  var fireBreathers = []
for (var i = 0; i < allDragons.length; i++) {
  if (allDragons[i].temperment === "aggressive") {
    fireBreathers.push(allDragons[i])
  }
}
return fireBreathers
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}