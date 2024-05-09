const express = require('express')
var places = require("./places.json");
const path = require('path');
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
 res.send(places)
	// res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
