const quotes = ["Shiba Inu's are great!", "FlapJack is a funny dog"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const quoteLength = quotes.length

const finalRandomNum = getRandomInt(quoteLength)

//console.log(quotes.length)
console.log(quotes[finalRandomNum])