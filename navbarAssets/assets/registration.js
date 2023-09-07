const username = document.querySelector("#username")
const submitBtn = document.querySelector("#submit-btn")
const mostRecentUser = localStorage.getItem("mostRecentUser")

const user = JSON.parse(localStorage.getItem("user")) || []

const MAX_USERNAMES = 5

username.innerText = mostRecentUser

username.addEventListener("keyup", () => {
    submitBtn.disabled = !username.value

})

saveUserName = e => {
    e.preventDefault()

    const userEntry = {
        name: username.value
    }

    user.push(userEntry)

    user.splice(5)

    localStorage.setItem("user", JSON.stringify(user))
    window.location.assign("./members.html")

}