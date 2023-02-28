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