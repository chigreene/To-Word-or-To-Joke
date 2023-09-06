var jokeContainer = document.getElementById('jokeContainer')
var btn = document.getElementById('btn');
var lastJokeBtn = document.querySelector('#lastJokeBtn')
var saveBtn = document.querySelector('#saveBtn')
var lastJokeDiv = document.querySelector('#lastJoke')
var array = JSON.parse(localStorage.getItem('jokeHistory')) || [];


function makeJoke(){
    var url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';

    

    fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            jokeContainer.textContent = ''
            var joke = document.createElement('p');
            joke.textContent = data.joke
            jokeContainer.append(joke)
            jokeHistory = data.joke
            saveToArray(jokeHistory)
        })
}

function saveToArray(joke) {
    if(!array.includes(joke)){
        array.push(joke);
        localStorage.setItem('jokeHistory', JSON.stringify(array));
    }
}
var lastJokePara = document.createElement('p');
function renderHistory() {
    var localHistoryArray = JSON.parse(localStorage.getItem('jokeHistory'));
    
    lastJokePara.textContent = '';
    lastJokePara.textContent = localHistoryArray[array.length-2];
    lastJokeDiv.append(lastJokePara);
}



btn.addEventListener('click',function(event){
    event.preventDefault()
    if(array.length>1){
        array.shift()
    }
    makeJoke()
})

lastJokeBtn.addEventListener('click', function(event){
    event.preventDefault()
    lastJoke.classList.remove("hidden");
    console.log(array)
    renderHistory()
    
})
