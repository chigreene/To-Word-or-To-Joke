// dictionary api




// joke api

var jokeContainer = document.getElementById('jokeContainer')
var btn = document.getElementById('btn');


function makeJoke(){
    var url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';

    fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data)
            var joke = document.createElement('p');
            var jokeDelivery = document.createElement('p');
            joke.textContent = data.joke
            jokeContainer.append(joke)
            
        })
}
btn.addEventListener('click',makeJoke)