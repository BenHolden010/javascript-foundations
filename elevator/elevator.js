function createElevator(building, floors, currentFloor, passengers){
    var elevator = {
        building: building,
        floors: floors,
        currentFloor: currentFloor,
        passengers: passengers,
    }
    return elevator
}

function changeFloors(elevator, floor){
    if (elevator.floors < floor){
      return `Floor ${floor} does not exist!`
    } else if (elevator.currentFloor === floor){
        return `You\'re already on floor ${floor}!`
    } else {
    return `Taking you to floor ${floor}!`
    }
}

function dropOffPassenger(elevator, passenger){
for (var i = 0; i < elevator.passengers.length; i++){
    if (elevator.passengers[i] === passenger){
        elevator.passengers.splice(i,1)
    }
}
return elevator.passengers
}

module.exports = {
     createElevator,
     changeFloors,
     dropOffPassenger
 };
