function checkForName(inputText) {
    //const regexPattern = "^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*";
    console.log("::: Running checkForName :::", inputText);
const regex = inputText.match("((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)");

if(regex == null) {
    alert("Please Enter A Valid URL")
} else {
    return true;
};

};
export { checkForName }
