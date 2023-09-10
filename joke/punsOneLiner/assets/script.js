var jokeContainer = document.getElementById('jokeContainer')
var btn = document.getElementById('btn');
var lastJokeBtn = document.querySelector('#lastJokeBtn')
var saveBtn = document.querySelector('#saveBtn')
var lastJokeDiv = document.querySelector('#lastJoke')
var array = JSON.parse(localStorage.getItem('jokeHistory')) || [];


function makeJoke(){
    var url = 'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

    

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
    if(array.length>5){
        array.shift()
    }
    makeJoke()
})

lastJokeBtn.addEventListener('click', function(event){
    event.preventDefault()
    lastJoke.classList.remove('hidden')
    console.log(array)
    renderHistory()
    
})


// bubbles
function createBubble() {
  const section = document.querySelector("section");
  const createElement = document.createElement("span");
  var size = Math.random() * 60;

  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}

setInterval(createBubble, 50);