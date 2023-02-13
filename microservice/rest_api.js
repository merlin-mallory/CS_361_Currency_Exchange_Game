import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());

// Generates random floats for each currency
async function numGenerator(currencies) {
    for (let currency in currencies) {
        let randomNum = Math.random() * (0.02 - (-0.02)) + (-0.02);
        currencies[currency] = randomNum
    }
    return currencies
}

// Handles incoming PUT requests. 
// Calls the numGenerator function, passing in the JSON object in the request 
// Returns randomized floats in JSON 
app.put("/rates", (req, res) => {
    numGenerator(req.body)
        .then(currencies => {
            res.status(201).json(currencies)
        })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
}); 
