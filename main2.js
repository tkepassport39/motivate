#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const quotes = require('./quotes.json')
const fs = require('fs');

const argv = yargs(hideBin(process.argv)).argv

// generate a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// get length # of quote
const quoteLength = quotes.length

// generate a random number from total quote count
const finalRandomNum = getRandomInt(quoteLength)

// grab the random quote from list
const quoteValue = quotes[finalRandomNum]

// debug
//console.log(quoteValue)

if (argv.quote && argv.author) {
    console.log(`quote = ${argv.quote}\nauthor = ${argv.author}`)
    // add a quote to the list
    const addQuote = {
        quote : argv.quote,
        author : argv.author
    }

    quotes.push(addQuote)
    console.log(quotes)

    const jsonString = JSON.stringify(quotes, null, 2)
    fs.writeFileSync('./quotes2.json', jsonString)
} 
else {
    // automatically get a quote for the day
    console.log(`Quote: ${quoteValue.quote}`)
    console.log(`Author: ${quoteValue.author}`)
}
