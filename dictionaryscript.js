var searchDictionary = $('#Dictionary');
var searchBtn = $('#search');
var defCont = $('.defContainer');
var fbeeURL = $('#gameURL');


searchBtn.on('click', function(event) {
    event.preventDefault();
    var input = searchDictionary.val();
    console.log(input);
    getApi();
});


function getApi() {
    //fetch request
    var input = searchDictionary.val();
    var requestUrl =`https://dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=303749c6-a0fc-48e0-9b98-5bedab74e635`;

    fetch(requestUrl)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var shortDef = data[0].shortdef;
        console.log(shortDef);
    
        $('.defCont').empty();
        var showWord = $('<h1></h1>').text(input);
        $('.wordOfTheDay').append(showWord);

        for(let i=0; i < shortDef.length; i++) {
            var element = $('<p></p>').text(shortDef[i]);
            $('.wordOfTheDay').append(element);
        }
    })
}

function getFreeBeeApi() {
    var fbeeURL = '/cgi-bin/today';
    //fetch request
    fetch(freebeeURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
})

}