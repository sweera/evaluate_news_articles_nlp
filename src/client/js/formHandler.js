import { checkForName } from "./nameChecker.js";
//UI Elements
// const agreement = document.getElementById("agreement");
// const confidence = document.getElementById("confidence");
// const irony = document.getElementById("irony");
// const model = document.getElementById("model");
// const scoreTag = document.getElementById("score_tag");
document.getElementById("submit").addEventListener("click", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  let url = document.getElementById("url").value;
  //const name = document.getElementById("name").value;
  //console.log(url);
  console.log(url);
  if (Client.checkForName(url)) {
    console.log("Form submitted");
    fetch("http://localhost:8080/projectData")
      .then((res) => res.json())
      .then(function (res) {
        updateUI(res);
      });
  } else {
    alert("Failed");
  }
  //return false;
}

//       subjectivity: allData.subjectivity
//   };
//   projectData = dataEntry;
//   console.log(projectData);
//   res.send(projectData);
// });
//Update UI
const updateUI = async () => {
  const request = await fetch("http://localhost:8080/projectData");
  try {
    const allData = await request.json();
    console.log(allData);
    // agreement.innerHTML = `<h4>${allData.agreement}</h4>`;
    // confidence.innerHTML = `<h4>${allData.confidence}</h4>`;
    // irony.innerHTML = `<h4>${allData.irony}</h4>;`
    // scoreTag.innerHTML = `<h4>${allData.scoreTag}</h4>`
    document.getElementById("model").innerHTML = `Model:${allData.model}`;
    document.getElementById("confidence").innerHTML = `Confidence:${allData.confidence}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${allData.score_tag}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${allData.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${allData.subjectivity}`;
  } catch (error) {
    console.log("error", error);
  }
};
//Client.checkForName(formText)
export { handleSubmit, updateUI };

///************************************************************************************************/////
// const submit = document.getElementById("submit");
// if(submit){
//   submit.addEventListener("click", handleSubmit);
// }
//const meaningUrl = BASE_URL + textapi + url;
// const meaningUrl = `${BASE_URL}&key=${textApi}&url=${url}&lang=en`;
//console.log(meaningUrl);
// getInformation(meaningUrl).then(function (data) {
//console.log(data);
// });}
//else{
//alert("Please enter a valid Url!");
// }
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
//}

//async function fetchResults(formText)
// console.log("::: Form Submitted :::")
// fetch('http://localhost:8080/Test')
// .then(res => res.json())
// .then(function(res) {
//    // document.getElementById('results').innerHTML = res.message
//     document.getElementById('results').innerHTML = res.message
// })
//GET function to get API data
// const getInformation = async (meaningUrl) => {
//   const res = await fetch(meaningUrl);
//   try {
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// Function to POST data
// const postData = async (url = "", data = {}) => {
//     const response = await fetch(url, {
//       method: "POST",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     try {
//       const newData = await response.json();
//       console.log(newData);
//       return newData;
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

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
// app.get('/projectData', async function(req, res){
//   const meaningUrl = `${BASE_URL}&key=${textapi}&url=${req.body.url}&lang=en`;
//   console.log(meaningUrl);
//   const allData = await fetch(meaningUrl).then((res) => res.json());
//   console.log(allData);
//   let dataEntry = {
//       model: allData.model,
//       score_tag: allData.score_tag,
//       irony: allData.irony,
//       agreement :allData.agreement,
//       confidence: allData.confidence,
//,{
//   method: "POST",
//   credentials: "same-origin",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({url: url}),
// }
