var searchDictionary = $('#Dictionary');
var searchBtn = $('#search');
var key = '303749c6-a0fc-48e0-9b98-5bedab74e635'



searchBtn.on("click", function (event) {
  event.preventDefault();
  var input = searchDictionary.val();
  console.log(input);

  function getApi() {
    //fetch request    
    var requestUrl =
      "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
      input +
      "?key=" +
      key;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data[0])
          console.log(data[0].def[0].sseq[0][0][1].dt[0][1]);
          // Assuming you have parsed the JSON data into a variable called 'data'
          var definitions = data[0].def.sseq;
          console.log(definitions)
          var resultArray = []

          for (var i = 0; i < definitions.length; i++) {
            var definition = definitions[i];
            console.log(definition)

            if (definition.sseq && Array.isArray(definition.sseq)) {
              for (var j = 0; j < definition.sseq.length; j++) {
                var subDefinition = definition.sseq[j];

                if (
                //   subDefinition[0] &&
                //   subDefinition[0][1] &&
                  subDefinition[0][1].dt
                ) {
                  var text = subDefinition[0][1].dt[0][1];
                  resultArray.push(text)
                  
                }
              }
              console.log(resultArray);
            }
          }
        })
  }
  getApi()
});