d3.select("#btn-predict").on("click", ()=>{
    // get values from html input fields 
    var budget = d3.select("#budget").node().value; 
    var runtime = d3.select("#runtime").node().value;
    var sequel = d3.select("#sequel").node().value; 
    var release_year = d3.select("#release_year").node().value; 
    var genre = d3.select("#genre").node().value;
    console.log(budget,sequel,runtime,release_year,genre)
    // perform a POST request using D3 
    d3.json("/api/predict", {
        // perform a POST request 
        method: "POST",
        // pass the following values in the 'body' of the POST request 
        body: JSON.stringify({
            "budget": budget,
            "runtime": runtime,
            "sequel": sequel,
            "release_year": release_year,
            "genre": genre
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
