function createBirthday(name, month, day){
var birthday = {
    name: name,
    month: month,
    day: day
}
    return birthday
}

function celebrateBirthday(birthday){
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdays, givenMonth){
    var monthTotal = [];
    for (var i = 0; i < birthdays.length; i++){
    if (birthdays[i].month === givenMonth){
        monthTotal.push(birthdays[i])
    }
}
return monthTotal.length
}
module.exports = { createBirthday, celebrateBirthday, countBirthdays };