import {checkForName} from './nameChecker.js'
//require('dotenv').config()

//const dotenv = require('dotenv');
//dotenv.config();
//const BASE_URL = "https://api.meaningcloud.com/sentiment-2.1?";
//const textApi = process.env.API_KEY;
//console.log(`Your api key is ${textApi}`);  // Used for testing API key entry

//console.log("textapi",textapi)
//UI Elements
const agreement = document.getElementById("agreement");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");
const model = document.getElementById("model");
const scoreTag = document.getElementById("score_tag");

function handleSubmit(event) {
    event.preventDefault();
    const url = document.getElementById("url").value;
    const name = document.getElementById("name").value;
    //console.log(url);
    console.log(name);
    if(url ==" "){
      //const meaningUrl = BASE_URL + textapi + url;
     // const meaningUrl = `${BASE_URL}&key=${textApi}&url=${url}&lang=en`;
      //console.log(meaningUrl);
     // getInformation(meaningUrl).then(function (data) {
        //console.log(data);
     // });}
    //else{
      alert("Please enter a valid Url!");
    }
    // // check what text was put into the form field
    // let formText = document.getElementById('url').value
    // Client.checkForName(formText)
    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/Test')
    // .then(res => res.json())
    // .then(function(res) {
    //    // document.getElementById('results').innerHTML = res.message
    //     document.getElementById('results').innerHTML = res.message
    // })
    // // if(Client.checkUrl(formText)){
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
//GET function to get API data
const getInformation = async (meaningUrl) => {
  const res = await fetch(meaningUrl);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// Function to POST data
    const postData = async (url = "", data = {}) => {
        const response = await fetch(url, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        try {
          const newData = await response.json();
          console.log(newData);
          return newData;
        } catch (error) {
          console.log("error", error);
        }
      };

//Function to get project data
// const getprojectData = async (url) => {
//   const res = await fetch(url);
//   try {
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

//Update UI
const updateUI = async () => {
  const request = await fetch("/all");
  try{
    const allData = await request.json();
    console.log(allData);
    agreement.innerHTML = `<h4>${allData.agreement}</h4>`;
    confidence.innerHTML = `<h4>${allData.confidence}</h4>`
  }
  catch(error){
    console.log("error", error);
  }
}
//Client.checkForName(formText)
export { handleSubmit,updateUI }
