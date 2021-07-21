#!/usr/bin/env node
const yargs = require('yargs/yargs')
const readWriteQuote = require('./readWriteQuote')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

// generate a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const quotes = readWriteQuote.getQuotes()

// get length # of quote
const quoteLength = quotes.length

// generate a random number from total quote count
//const finalRandomNum = getRandomInt(quoteLength)

// get today's date
const d = new Date()
const dayNum = d.getDate()

// use modulus(mod) to generate a number for the quote it will get for the day
const finalRandomNum = dayNum % quoteLength

// grab the random quote from list for the day
const quoteValue = quotes[finalRandomNum]


if (argv.quote && argv.author) {
    console.log(`quote = ${argv.quote}\nauthor = ${argv.author}`)
    
    readWriteQuote.addQuote(argv.quote, argv.author)
    
} 
else {
    // automatically get a quote for the day

    console.log(`"${quoteValue.quote}" 
    \t-- ${quoteValue.author}`)
}
