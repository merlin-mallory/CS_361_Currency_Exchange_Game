import fetch from "node-fetch"

const example = {
    "USD": 0.01,
    "EUR": -0.02,
    "JPY": -0.01,
    "CAD": 0.02
}

fetch('http://localhost:3000/rates', {
    method: 'PUT',
    body: JSON.stringify(example),
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => response.text())
    .then(text => console.log(text))