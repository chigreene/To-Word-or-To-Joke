var jokeContainer = document.getElementById('jokeContainer')
var btn = document.getElementById('btn');
var lastJokeBtn = document.querySelector('#lastJokeBtn')
var lastJokeDiv = document.querySelector('#lastJoke')


function makeJoke(){
    var url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';

    

    fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data)
            jokeContainer.textContent = ''
            console.log(data)
            var joke = document.createElement('p');
            joke.textContent = data.joke
            jokeContainer.append(joke)
            jokeHistory = data.joke
            localStorage.setItem('jokeHistory', jokeHistory)
        })
}

var lastJokePara = document.createElement('p')

btn.addEventListener('click',function(){
        makeJoke()
})

lastJokeBtn.addEventListener('click', function(event){
    event.preventDefault()
    function lastJoke(){
        var lastJoke = localStorage.getItem('jokeHistory')
       
        lastJokePara.textContent = ''
        lastJokePara.textContent = lastJoke
        lastJokeDiv.append(lastJokePara)
    }
    lastJoke()
})
