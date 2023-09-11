const token = "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";
var punRoot = 'apple'

const ninjaKey = 'IohEAAZnqusKHO7llxCIdw==CwTa8bQlK72a3ruH'

var jokeDiv = document.querySelector('#jokeDiv');
var rndJokeDiv = document.querySelector('#rndJokeDiv')
var rndWordDiv = document.querySelector('#rndWordDiv')
var inputText = document.querySelector('#inputText')
var submitBtn = document.querySelector('#submitBtn')
var ranWordContainer = document.querySelector('#ranWordContainer')
var subRandomBtn = document.querySelector('#subRandomBtn')
var punContainer = document.querySelector('#punContainer')



var closeModal = document.querySelector('.close-modal')
var randomModal = document.querySelector('.randomModal')
// closeModal.addEventListener('click', function(event){
//     event.preventDefault()
//     randomModal.classList.add('hidden')
// })


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
            rndWordDiv.textContent = ''
            rndJokeDiv.textContent = ''
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
            "messages": [{"role": "assistant", "content": "Please, this word in a joke," + randomWord}]
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
    event.preventDefault();

// confetti effect
    var count = 200;
    var defaults = {
      origin: { y: 1.0 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    randomWordFunction()
})


function buttonClick(){
    submitBtn.addEventListener('click', function(event){
// confetti effects 
        var count = 200;
         var defaults = {
           origin: { y: 1.0 },
         };

         function fire(particleRatio, opts) {
           confetti(
             Object.assign({}, defaults, opts, {
               particleCount: Math.floor(count * particleRatio),
             })
           );
         }

         fire(0.25, {
           spread: 26,
           startVelocity: 55,
         });
         fire(0.2, {
           spread: 60,
         });
         fire(0.35, {
           spread: 100,
           decay: 0.91,
           scalar: 0.8,
         });
         fire(0.1, {
           spread: 120,
           startVelocity: 25,
           decay: 0.92,
           scalar: 1.2,
         });
         fire(0.1, {
           spread: 120,
           startVelocity: 45,
         });


         ranWordContainer.classList.add("hidden");
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
            "messages": [{"role": "assistant", "content": "Use " + jokeInput + " in a joke"}]
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

punContainer.addEventListener('click', function(event){
    event.preventDefault()
    punContainer.classList.add('hidden')
})

ranWordContainer.addEventListener('click', function(event){
    event.preventDefault()
   ranWordContainer.classList.add('hidden')
})
