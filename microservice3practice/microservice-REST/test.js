// import fetch from "node-fetch"

const example = [
    {title: "One Piece", visual: "Visual1"},
    {title: "Naruto", visual: "Visual2"},
    {title: "Death Note", visual: "Visual3"},
    {title: "Demon Slayer", visual: "Visual4"},
    {title: "Bleach", visual: "Visual5"},
    {title: "Code Geass", visual: "Visual6"},
    {title: "Spy X Family", visual: "Visual7"},
    {title: "Pokemon", visual: "Visual8"},
    {title: "Sword Art Online", visual: "Visual9"},
    {title: "Hunter X Hunter", visual: "Visual10"}
]

fetch('http://localhost:3000/pick', {
    method: 'PUT',
    body: JSON.stringify(example),
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => response.text())
    .then(text => console.log(text))