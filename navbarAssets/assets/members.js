var userNameList = document.querySelector("#userNameList");
var localHistoryObject = JSON.parse(localStorage.getItem("user"))
console.log(localHistoryObject)





function renderUser() {
  for (let i = localHistoryObject.length -5 ; i < localHistoryObject.length ; i++) {
    
    var userName = document.createElement("p");
    userName.textContent = localHistoryObject[i].name;
    userNameList.append(userName);
  }
}
renderUser();
