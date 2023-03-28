function createVampire() {
  // pseudocode - should create a vampire
  // should have a pet bat as a default
  // should be able to take an argument for pet
  // should be start with no ounces of blood drank
}
function drink() {
  // pseudocode - should drink 10 ounces of blood at a time
  // should no longer be thirsty after drinking 50 ounces
  // should not drink more ounces when not thirsty
  // should refuse blood from victim when not thirsty
}
function findBatLovers() {
  // pseudocode - should be able to find the vampires with bats
}
function encounterDeliciousVictim() {
  // pseudocode - should shout at victim when thirsty
}
function inquirePlace() {
  // pseudocode - should say if its been to a location
  // should say if its not been to a location
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}