d3.select("#btn-predict").on("click", ()=>{
    // get values from html input fields 
    var budget = d3.select("#budget").node().value; 
    var runtime = d3.select("#runtime").node().value;
    var genre = d3.select("#genre").node().value;
    var language = d3.select("#language").node().value;
    console.log(budget,runtime,genre)
    // perform a POST request using D3 
    d3.json("/api/predict", {
        // perform a POST request 
        method: "POST",
        // pass the following values in the 'body' of the POST request 
        body: JSON.stringify({
            "budget": budget,
            "runtime": runtime,
            "genre": genre,
            "language": language
          }),
        // the headers contains metadata about the POST request. We want to say that the data sent is "json" data, so we set "Content-type": "application/json"
        headers: {
            "Content-type": "application/json"
        }
        

    }).then(response => { // when we receive the the response back, then we perform the steps below
        var prediction_output = d3.select("#prediction-output"); // select the area to put our predictions to
        console.log(response.prediction); // log out the result
        // if Good Movie
        if(response.prediction == 1){
            prediction_output.text("Good Movie"); 
        
        // if not Bad Movie
        } else { 
            prediction_output.text("Bad Movie:(");
        }
    });
})
