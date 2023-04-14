function issueCard(name, age){
    var card = {
        name: name,
        age: age,
        numBooksCheckedOut: 0,
        isChild: age<12
    }
    return card
}

function searchByAuthor(collection,name){
var authorResults = []
    for (var i = 0; i < collection.length; i++){
        if (collection[i].author === name){
        authorResults.push(collection[i])
    } 
}
console.log(authorResults.length === 0)
if (authorResults.length === 0) {
    return 'No book found for search criteria'
}
    return authorResults
}

module.exports = { 
    issueCard, 
    searchByAuthor
};