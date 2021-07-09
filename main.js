const quotes = require('./quotes.json')
const yargs = require('yargs');
const { string } = require('yargs');
const { argv } = require('process');
const fs = require('fs');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const quoteLength = quotes.length

const finalRandomNum = getRandomInt(quoteLength)

const quoteValue = quotes[finalRandomNum]

//console.log(quotes.length)
//console.log(`"${quoteValue.quote}" - ${quoteValue.author}`)

//console.log(process.argv)

//console.log(yargs.argv)

yargs.command({
    command: 'add',
    describe: 'add a quote',
    builder: {
        quote: {
            describe: 'add a quote',
            type: 'string'
        },
        author:{
            describe: 'authors name',
            type: 'string'
        }
    },
    handler: function(argv){
        console.log("\nAdding a quote!", argv.quote)
        console.log("\nAdding an author!", argv.author)

        const addQuote = {
            quote : argv.quote,
            author : argv.author
        }

        quotes.push(addQuote)
        console.log(quotes)

        const jsonString = JSON.stringify(quotes, null, 2)
        fs.writeFileSync('./quotes2.json', jsonString)
    }
})
.parse()

