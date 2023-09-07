const userNameList = document.querySelector("#userNameList");
const usernames = JSON.parse(localStorage.getItem("usernames")) || [];

userNameList.innerHTML = 
usernames.map((username) => {
    return `<p class="text-gray-900 text-center mt-5 mr-10"><i class="fa-solid fa-user-secret fa-beat fa-xl mr-5"></i> ${username} </p>`;
  });

