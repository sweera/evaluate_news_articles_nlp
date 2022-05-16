projectData = {}
const dotenv = require('dotenv');
dotenv.config();
const BASE_URL = "https://api.meaningcloud.com/sentiment-2.1";
const textapi = process.env.API_KEY;
console.log("textapi",textapi)

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');
//const { default: dist } = require('-');
const bodyParser = require('body-parser')
const cors = require('cors');
const { text } = require('body-parser');

//console.log(textapi)
const app = express()
const fetch = require("node-fetch");
app.use(express.static('dist'))
//app.use(express.static(path.join('dist', "static")));
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}))

console.log(__dirname)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
   // res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080!')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

//GET request
app.get("/projectData", (req, res) => {
    res.send(projectData);
  });

//POST request

// app.post('checkUrl', async function(req,res){
//     const rdata = req.body.value;
//     const url = `${BASE_URL}?key=${textapi}&url=${rdata}&lang=en`
//     const nres = await fetch(url);
//     projectData = await nres.text();
//     res.send(projectData)
app.post("/addInfo", (req, res) => {
    projectData = req.body;
    res.send({ message: "Info received" });
    console.log(req);
  });
