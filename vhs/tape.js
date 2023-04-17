function createTape(title,readyToPlay){
    // console.log(tape)
    var tape = {
       title: title,
       readyToPlay: readyToPlay || false,
    }
    return tape
}

function reset(tape){
    tape.readyToPlay = true
    return tape
}

function createCollection(tapes){
    collection = []
    if (!tapes.length){
        return "Your collection is empty"
    }
    for (var i=0;i<tapes.length;i++){
    collection.push(tapes[i].title)
    }
    console.log(collection)
    return collection
}

module.exports = {
    createTape,
    reset,
    createCollection
  }
