const userNameList = document.querySelector("#userNameList");
var localHistoryObject = JSON.parse(localStorage.getItem("user"))
console.log(localHistoryObject)
var users = document.createElement("p")
const userArray = Object.keys(localHistoryObject)
console.log(userArray) 

// function renderUser() {

//   for(let i = 0; i > localHistoryObject.length -1; i++)
// }

