import {checkForName} from './nameChecker.js'
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/Test')
    .then(res => res.json())
    .then(function(res) {
       // document.getElementById('results').innerHTML = res.message
        document.getElementById('results').innerHTML = res.message
    })
}
clearInterval.checkForName(formText)
export { handleSubmit }
