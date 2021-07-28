const quotes = require('./quotes.json')
const fs = require('fs');

function getQuotes () {
    
    // returning a resolved promise
    return Promise.resolve(quotes)
}

function addQuote (quote, author) {
    // add a quote to the list
    const addQuote = {
        quote,
        author
    }
    
    quotes.push(addQuote)
    console.log(quotes)

    const jsonString = JSON.stringify(quotes, null, 2)
    fs.writeFileSync('./quotes.json', jsonString)
}

module.exports = {getQuotes, addQuote}