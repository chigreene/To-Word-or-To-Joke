var jokeContainer = document.getElementById('jokeContainer')
var deliveryContainer = document.getElementById('deliveryContainer')
var btn = document.getElementById('btn');
var lastJokeBtn = document.querySelector('#lastJokeBtn')
var showPunchLineBtn = document.querySelector('#showPunchLineBtn')
var showPunchLine = document.querySelector('#showPunchLine')
var lastJokeDiv = document.querySelector('#lastJoke')
var array = JSON.parse(localStorage.getItem('setupHistory')) || [];
var deliveryArray = JSON.parse(localStorage.getItem('deliveryJokeHistory')) || [];

function makeJoke(){
    var url = 'https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    

    fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            jokeContainer.textContent = ''
            deliveryContainer.textContent = ''
            var joke = document.createElement('p');
            var delivery = document.createElement('p');
            delivery.textContent = data.delivery
            joke.textContent = data.setup
            jokeContainer.append(joke)
            deliveryContainer.append(delivery)

            setupHistory = data.setup
            deliveryHistory = data.delivery
            saveToArray(setupHistory)
            saveDeliveryToArray(deliveryHistory)
        })
}

// Saving joke to setup array
function saveToArray(joke) {
    if(!array.includes(joke)){
        array.push(joke);
        localStorage.setItem('setupHistory', JSON.stringify(array));
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
    var localHistoryArray = JSON.parse(localStorage.getItem('setupHistory'));
    
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

showPunchLineBtn.addEventListener('click', function(event){
    event.preventDefault()
    deliveryContainer.classList.remove('hidden')
})

btn.addEventListener('click',function(event){
    event.preventDefault()
    if(array.length>5){
        array.shift()
    }
    deliveryContainer.classList.add('hidden')
    makeJoke()
})



lastJokeBtn.addEventListener('click', function(event){
    event.preventDefault()
    deliveryContainer.classList.remove('hidden')
    renderHistory()
    renderDeliveryHistory()
})
