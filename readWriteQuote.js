const quotes = require('./quotes.json')
const fs = require('fs');

function getQuotes () {

    // returning a resolved promise
    return Promise.resolve(quotes)
}


function addQuote (quote, author) {
    
    return new Promise((resolve, reject) => {

        // add a quote to the list
        const addQuote = {
            quote,
            author
        }
        
        quotes.push(addQuote)
        console.log(quotes)

        const jsonString = JSON.stringify(quotes, null, 2)
        try{
            fs.writeFileSync('./quotes.json', jsonString)
            return resolve()
        }
        catch(err){
            // immediately exit by returning reject
            return reject(err)
        }
      });

}

module.exports = {getQuotes, addQuote}