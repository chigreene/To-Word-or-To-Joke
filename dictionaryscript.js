var searchDictionary = $('#Dictionary');
var searchBtn = $('#search');
var input = searchDictionary.value;


searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(input);
});


// function searchBarClck(event) {
//     event.preventDefault();
//     console.log(searchDictionary.val());

//     $('#search').val('');

// }

// searchDictionary.on('click', searchBarClck);


// function getApi() {
//     //fetch request
//     var requestUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key'

//     fetch(requestUrl)
//     .then(function (response) {
//         return response.json();
//     })
// }