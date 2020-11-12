// soal ke 1 

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

books.forEach(function(item, i) {
    readBooks(10000, item, function(bar) {
        console.log(bar)
    })
})

// soal ke 2
