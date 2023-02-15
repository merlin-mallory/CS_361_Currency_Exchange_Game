const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

// Generates 5 unique random numbers in the range [1, 10]
function randomNumGenerator() {
    const randNumSet = new Set()
    while (randNumSet.size < 5){
        randNumSet.add(Math.floor(Math.random() * 10) +1)
    }
    console.log("Here's the list of unique random numbers between 1 and 10:")
    console.log([...randNumSet])
    return randNumSet
}

// Constructing a new object containing only the selected anime
async function pickAnime(receivedAnime) {
    console.log("Here's what we got:", receivedAnime)
    console.log("inside async")
    let pickedAnimeArr = []
    let pickIndexSet = new randomNumGenerator()
    // pickedAnimeArr.push(receivedAnime[0])
    for (let pickedIndex of pickIndexSet) {
        console.log("Picked index:", pickedIndex)
        pickedAnimeArr.push(receivedAnime[pickedIndex-1])
        console.log("Arr this iteration:", pickedAnimeArr)
    }
    console.log("final arr:", pickedAnimeArr)
    return pickedAnimeArr
}

app.put("/pick", (req, res) => {
    console.log("Pick is called!")
    pickAnime(req.body)
        .then(pickedAnimeArr => {
            res.status(201).json(pickedAnimeArr)
        })
})


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
