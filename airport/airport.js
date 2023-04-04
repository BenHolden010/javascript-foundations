function createAirport(airport, airlines, availableGates){
// pseudocode - should create an airport
var airport = {
name: airport,
airlines: airlines,
availableGates: availableGates
}
return airport
}
function welcomeGuests(airport){
  // should welcome people to the airport
return `Welcome to ${airport.name}!`
}
function landPlanes(airport, planesLanded){
  // should keep track of open gates
  // should not be able to occupy more gates than available
  var gatesNotAvailable = Math.abs(airport.availableGates)-1
airport.availableGates -= planesLanded
if (airport.availableGates > 0 ){
return `Success! Current availability is ${airport.availableGates}.`
} else 
airport.availableGates = 0
return `Oh no! Not enough gates available. Current overflow is ${gatesNotAvailable}.`
}
function checkAirlineLocations(allAirports, airline){
//  should be able to tell you where an airline flies to
carriers = []
for (var i = 0; i < allAirports.length; i++){
  for(var j = 0; j < allAirports[i].airlines.length; j++){
  if (allAirports[i].airlines[j] === airline){
    carriers.push(allAirports[i].name)
  }
}
}
return carriers
}


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
