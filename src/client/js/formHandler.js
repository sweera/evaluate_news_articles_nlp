import {checkForName} from './nameChecker.js'

//UI Elements
const agreement = document.getElementById("agreement");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");
const model = document.getElementById("model");
const scoreTag = document.getElementById("score_tag");
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/Test')
    .then(res => res.json())
    .then(function(res) {
       // document.getElementById('results').innerHTML = res.message
        document.getElementById('results').innerHTML = res.message
    })
    // if(Client.checkUrl(formText)){
    //     fetchResults(formText)
    // }
    // else{
    //     Client.handleError();
    // }
}

//async function fetchResults(formText)
    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/Test')
    // .then(res => res.json())
    // .then(function(res) {
    //    // document.getElementById('results').innerHTML = res.message
    //     document.getElementById('results').innerHTML = res.message
    // })
Client.checkForName(formText)
export { handleSubmit }
