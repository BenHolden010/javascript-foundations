function createBarber(name, earnings, haircuts){
    // should create a barber with a name
    // should be able to have earnings and known haircuts
    // should default to no earnings and no haircuts if none provided
var name = {
    name: name,
    earnings: earnings || 0,
    haircuts: haircuts || []
}
return name
}
function giveCompliment(haircut){
    // should be able to offer a compliment
return `This ${haircut.style} looks great!`
}
function cutHair(name, haircut){
    // should be able to cut hair
    // should earn money for hair cuts
    name.haircuts.push(haircut)
    name.earnings += haircut.price
return name
}
function listStyles(sandy, hairLength){
    // should be able to list style options based on desired length
    var shortStyles = []
    for (var i = 0; i < sandy.haircuts.length; i++){
        if (sandy.haircuts[i].hairLength === hairLength){
            shortStyles.push(sandy.haircuts[i].style)
        }
    }
return shortStyles
}

module.exports = { 
    createBarber, 
    giveCompliment, 
    cutHair, 
    listStyles };