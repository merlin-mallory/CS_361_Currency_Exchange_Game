const express = require("express");
const app = express();

async function numGenerator() {
    
}

app.get("/rates", (req, res) => {

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
}); 
