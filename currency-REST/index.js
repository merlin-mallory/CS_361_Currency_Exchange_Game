const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const PORT = 3003
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Controller is running, listening on port "+ PORT)
	else
		console.log("Error occurred, controller can't start", error)
	}
)

let currencyArr  = {
    "EUR": 0.94,
    "JPY": 136.28,
    "CAD": 1.36
}

console.log("Starting arr:", currencyArr)

let currencyAdj = {
}

let currencyAfterAdj = {
    "EUR": 0.94,
    "JPY": 136.28,
    "CAD": 1.36
}

async function fetchAsync(){
    let response = await (fetch('http://localhost:3001/rates', {
        method: 'PUT',
        body: JSON.stringify(currencyArr),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        )

    let currencyAdj = await response.json()
    console.log("Here's the data from the microservice:", currencyAdj)
    adjustRates(currencyArr, currencyAdj)
    return currencyAfterAdj
}

fetchAsync()
    .then((data) => console.log("Here is the data after adjustment:", data))
    .catch((reason) => console.log("Message:", + reason.message))

function adjustRates(currencyArr, currencyAdj) {
    console.log("adjustRates triggered!")
    for (currency in currencyAdj){
        currencyAfterAdj[currency] = currencyAdj[currency] + currencyArr[currency]
    }
    console.log("currencyAfterAdj within adjustRates:", currencyAfterAdj)
}