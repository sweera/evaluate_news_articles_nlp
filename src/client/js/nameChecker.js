function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
       alert("Welcome, Captain!")
       //document.getElementById('results').innerHTML = res.inputText
       //alert(inputText)
       console.log('hey')
    }
}

export { checkForName }
