function createHobbit(name, age) {
  // pseudocode -should make a hobbit with a name and age
  // should start out 0 years old if not specified
  // should return an object with defaults if nothing passed
 
  var hobbit = name
  hobbit = {
    name: name || 'unknown',
    age: age || 0,
    isAdult: age>=32,
    isOld: false,
    acquaintances: []
  }
  return hobbit
}
function celebrateBirthday(hobbit) {
  // pseudocode - should gain 1 year after every birthday
  // should be considered a child at the age of 32
  // should be considered an adult at 33
  // should be considered old at the age of 101
  hobbit.age++
  hobbit.isOld = hobbit.age>100 
  return hobbit
}

function getRing(hobbit) {
  // pseudocode - should be able to get the ring if its name is Frodo
  // should start with no acquaintances
  if ('Frodo' === hobbit.name){
    return `Here is the ring!`
  } else 
  return `You can\'t have it!`
}
function meetPeople(bilbo, people) {
  // pseudocode - should be able to meet people
  // should be able to meet several people at once
  // should be able to meet people on multiple occasions
  for (var i = 0; i < people.length; i++){
  bilbo.acquaintances.push(people[i])
  }
return bilbo
}
function findFriends(bilbo) {
  // pseudocode - should be able to identify which acquaintances are friends
  var friends = []
for (var i = 0; i < bilbo.acquaintances.length; i++){
if (bilbo.acquaintances[i].relationship === 'friend'){
friends.push(bilbo.acquaintances[i].name)
}
}
return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}