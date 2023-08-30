var jokeContainer = document.getElementById('jokeContainer')
var btn = document.getElementById('btn');
var lastJokeBtn = document.querySelector('#lastJokeBtn')
var saveBtn = document.querySelector('#saveBtn')
var lastJokeDiv = document.querySelector('#lastJoke')
var array = JSON.parse(localStorage.getItem('jokeHistory')) || [];
var deliveryArray = JSON.parse(localStorage.getItem('deliveryJokeHistory')) || [];

function makeJoke(){
    var url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

    

    fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            jokeContainer.textContent = ''
            var joke = document.createElement('p');
            var delivery = document.createElement('p');
            delivery.textContent = data.delivery
            joke.textContent = data.setup
            jokeContainer.append(joke)
            joke.append(delivery)

            jokeHistory = data.setup
            deliveryHistory = data.delivery
            saveToArray(jokeHistory)
            saveDeliveryToArray(deliveryHistory)
        })
}

// Saving joke to setup array
function saveToArray(joke) {
    if(!array.includes(joke)){
        array.push(joke);
        localStorage.setItem('jokeHistory', JSON.stringify(array));
    }
}
// saving joke to delivery array
function saveDeliveryToArray(joke) {
    if(!deliveryArray.includes(joke)){
        deliveryArray.push(joke);
        localStorage.setItem('deliveryJokeHistory', JSON.stringify(deliveryArray));
    }
}

// rendering last joke setup

var lastJokePara = document.createElement('p');
function renderHistory() {
    var localHistoryArray = JSON.parse(localStorage.getItem('jokeHistory'));
    
    lastJokePara.textContent = '';
    lastJokePara.textContent = localHistoryArray[array.length-2];
    lastJokeDiv.append(lastJokePara);
}

// render last joke delivery

var lastJokeDeliveryPara = document.createElement('p');
function renderDeliveryHistory() {
    var deliveryLocalHistoryArray = JSON.parse(localStorage.getItem('deliveryJokeHistory'));
    
    lastJokeDeliveryPara.textContent = '';
    lastJokeDeliveryPara.textContent = deliveryLocalHistoryArray[deliveryArray.length-2];
    lastJokeDiv.append(lastJokeDeliveryPara);
}

btn.addEventListener('click',function(event){
    event.preventDefault()
    makeJoke()
})

lastJokeBtn.addEventListener('click', function(event){
    event.preventDefault()
    // if(array.length>5){
    //     array.shift()
    // }
    
    renderHistory()
    renderDeliveryHistory()
})
