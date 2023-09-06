var randomWord = document.getElementById("random-word")

function getApi() {

    var requestUrl = "https://random-word-api.vercel.app/api?words=1&type=capitalized"

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        console.log(data)
        randomWord.textContent = ''
        var word = document.createElement('p');
            word.textContent = data.word
            randomWord.append(word)
    })

}

document.addEventListener("load", getApi)

getApi()