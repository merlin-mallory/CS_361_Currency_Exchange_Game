const express = require("express");
const app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());

// Generates random floats for each currency
async function numGenerator(currencies) {
    for (let currency in currencies) {
        let randomNum = Math.random() * (0.02 - (-0.02)) + (-0.02);
        currencies[currency] = randomNum
    }
    return currencies
}

// Handles incoming GET requests. 
// Calls the numGenerator function, passing in the JSON object in the request 
// Returns randomized floats in JSON 
app.get("/rates", (req, res) => {
    numGenerator(req.body)
        .then(currencies => {
            res.status(201).json(currencies)
        })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
}); 
