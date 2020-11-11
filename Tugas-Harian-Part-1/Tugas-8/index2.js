var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

books.forEach(function(item, i) {
    readBooksPromise(9000,item)
    .then(function(fullfilled) {
        console.log(fullfilled)
    })
    .catch(function(error) {
        console.log(error)
    })
})