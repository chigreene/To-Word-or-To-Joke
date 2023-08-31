const key = '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'
const token = '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'
var punRoot = 'apple'

const ninjaKey = 'IohEAAZnqusKHO7llxCIdw==CwTa8bQlK72a3ruH'

var jokeDiv = document.querySelector('#jokeDiv');
var rndJokeDiv = document.querySelector('#rndJokeDiv')
var rndWordDiv = document.querySelector('#rndWordDiv')
var inputText = document.querySelector('#inputText')
var submitBtn = document.querySelector('#submitBtn')
var ranWordContainer = document.querySelector('#ranWordContainer')
var subRandomBtn = document.querySelector('#subRandomBtn')

modal
var closeModal = document.querySelector('.close-modal')
var randomModal = document.querySelector('.randomModal')
closeModal.addEventListener('click', function(event){
    event.preventDefault()
    randomModal.classList.remove('hidden')
})


var randomWord = ''

function randomWordFunction(){
    var url = 'https://api.api-ninjas.com/v1/randomword'
    
    fetch(url,{
        headers: { 'X-Api-Key': ninjaKey}
    })
        .then(function (response){
            return response.json()
        })
        .then (function(data){
            console.log(data.word)
            ranWordContainer.classList.remove('hidden')
            var ranWord = document.createElement('p')
            var randomWord = data.word;
            ranWord.textContent = 'Random Word: ' + data.word
            rndWordDiv.append(ranWord)
            
            fetch ('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "assistant", "content": "Please, make a pun with this word" + randomWord}]
            })
            }) .then(function (response){
                    return response.json()
            }) .then(function (data){
                    
                    var joke = document.createElement('p');
                    rndJokeDiv.textContent = '';
                    joke.textContent = data.choices[0].message.content;
                    rndJokeDiv.append(joke);
                console.log(data)
        })

        })
}

subRandomBtn.addEventListener('click', function(event){
    event.preventDefault
    randomWordFunction()
})


function buttonClick(){
    submitBtn.addEventListener('click', function(event){
        event.preventDefault()
        var jokeInput = inputText.value
        console.log(jokeInput)
        
        fetch ('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "assistant", "content": "Use " + jokeInput + " in a pun"}]
            })
        }) .then(function (response){
                return response.json()
        }) .then(function (data){
                punContainer.classList.remove('hidden')
                var joke = document.createElement('p');
                jokeDiv.textContent = '';
                joke.textContent = data.choices[0].message.content;
                jokeDiv.append(joke);
            console.log(data)
        })

    })
}
buttonClick()


