function createEvent(title, month, day){
var event = {
    title: title,
    month: month,
    day: day
}
if ( day<1 || day>31){
    return `Error: ${day} is not a valid day`
}
return event
} 
function createCalendar(name, events){
calendar = {
    events: events,
    owner: name
}
return calendar
}
function reportMonthlyEvents(calendar, month){
    var monthlyEvents = []
    for (var i = 0; i < calendar.events.length; i++){
    if (calendar.events[i].month === month){
        monthlyEvents.push(calendar.events[i])
    }
}
return monthlyEvents
}

module.exports = { createEvent, createCalendar, reportMonthlyEvents };