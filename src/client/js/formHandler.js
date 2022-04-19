import {checkForName} from './nameChecker.js'
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

export { handleSubmit }
