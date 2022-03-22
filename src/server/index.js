const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');
const { default: dist } = require('-');

var textapi = process.env.API_KEY

const app = express()

app.use(express.static('dist'))
//app.use(express.static(path.join('dist', "static")));


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
   // res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
