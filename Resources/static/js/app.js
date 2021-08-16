// ----------------------------------------------------------------
// Create functions to build and generate the visualisations on the statistics HTML
// ----------------------------------------------------------------

let _ = window._;

function init() {
    // d3.select #selDataset in HTML then iterate through data and append Country to the dropdown.
    var dropdown = d3.select('#selDataset');
    d3.json('/unique_countries').then((data) => {
        data.forEach((country) => {
            dropdown.append('option').text(country).property('value', country.Country);
            console.log(country.Country);
        })
        // For the initialisation demographic table, use index 11 which is Australia. Not too few / many data points.
        var sampleCountry = data[0][0];
        console.log(sampleCountry);
        buildList(sampleCountry);
    })
}

function buildList(sampleCountry) {
    d3.json('/top_rated').then((data) => {
        // empty array to store each dictionary which is matched by the if statement below
        var list_distilleries = [];
        data.forEach((distillery) => {
            if (distillery.Country === sampleCountry) {
                // append to array
                list_distilleries.push(distillery);
                }
        })
        // successfully appended each dictionary to the list_distilleries
        console.log(list_distilleries);
        getData(list_distilleries);
    })
}

function getData(list_distilleries) {
    // create empty arrays to store the result of each component of the dictionary for the purpose of plots
    var dist_name = [];
    var dist_avg_rating = [];
    var dist_votes = [];
    var dist_whiskies = [];

    list_distilleries.forEach((distillery) => {
        dist_name.push(distillery.Name);
        dist_avg_rating.push(distillery.avg_rating);
        dist_votes.push(distillery.num_votes);
        dist_whiskies.push(distillery.num_whiskies);
    })
    // determine other characteristics of data
    // number of distilleries:
    dist_num = dist_name.length;
    // Investigate use of Lodash in conjunction to require.js
    // const _ = requirejs("lodash")
    var sum_votes = _.sum(dist_votes);
    var sum_whiskies = _.sum(dist_whiskies);

    console.log(dist_name);
    console.log(dist_avg_rating);
    console.log(dist_votes);
    console.log(dist_whiskies);
    console.log(dist_num);
    console.log(sum_votes);
    console.log(sum_whiskies);

    results = {
        distillery_name: dist_name,
        number_distilleries: dist_num,
        total_votes: sum_votes,
        number_whiskies: sum_whiskies,
        distillery_avg_rating: dist_avg_rating,
        distillery_votes: dist_votes,
        distillery_num_whiskies: dist_whiskies
    }

    results_table = {
        "Number of Distilleries": dist_num,
        "Total Number of Votes": sum_votes,
        "Total Number of Whiskies": sum_whiskies,
    }

    // charting elements
    barChart(results);
    bubbleChart(results);
    whiskyTable(results_table);
}

init();

// d3.selectAll("#selDataset").on("change", optionChanged);

// CREATE CHANGE CONDITION
function optionChanged(sampleCountry) {
    d3.selectAll('h5').remove();
    // var sampleCountry = d3.select("#selDataset").node().value;
    buildList(sampleCountry);
};

// BUBBLE CHART
function bubbleChart(results) {
    // create variables which are called from the pull data above
    var ratings = results.distillery_avg_rating;
    var num_whiskies = results.distillery_num_whiskies;
    var distillery_names = results.distillery_name;
    var traceBUBBLE = {
        x: num_whiskies,
        y: ratings,
        mode: 'markers',
        marker: {
            size: 20,
            color: ratings,
            // https://plotly.com/javascript/colorscales/
            colorscale: 'Jet',
            line: {
                width: 1.5,
                color: 'Black'
            }
        },
        text: distillery_names
    };
    var dataBUBBLE = [traceBUBBLE];
    var layoutBUBBLE = {
        title: "<b>Number of Whiskies vs. Avg. Rating Per Country</b>",
        xaxis: {title: "<b>Number of Whiskies</b>"},
        yaxis: {title: "<b>Avg. Rating</b>"},
        height: 500,
        width: 1000
    };
    // PLOT BUBBLE CHART ON ID "BUBBLE"
    Plotly.newPlot("bubble", dataBUBBLE, layoutBUBBLE);
}

// BAR CHART
function barChart(results){
    // create variables which are called from the pull data above
    var distillery_names = results.distillery_name.slice(0,10).reverse();
    var ratings = results.distillery_avg_rating.slice(0,10).reverse();
    var traceBAR = {
        x: ratings,
        y: distillery_names,
        text: distillery_names,
        marker: {
            color: ratings,
            colorscale: 'Jet'
        },
        type: 'bar',
        orientation: 'h'
    };
    var dataBAR = [traceBAR];
    var layoutBAR = {
        title: "<b>Top 10 Whiskies Per Country by Avg. Rating</b>",
        xaxis: {
            automargin: true,
            title: {
                text: "<b>Avg. Rating</b>",
                standoff: 5
            }
        },
        yaxis: {
            automargin: true,
            title: {
                text: "<b>Top Whiskies</b>",
                standoff: 5
            }
        },
        yAxis: {tickmode: 'linear'},
        margin: {
            l: 100,
            r: 100,
            t: 50,
            b: 50
        }
    };
    Plotly.newPlot('bar',dataBAR, layoutBAR);
}

// WHISKY INFO TABLE
function whiskyTable(results_table) {
    // console.log(sampleMetadata);
      // Use d3 to select the required panel
      var whiskyData = d3.select("#sample-metadata");
  
      // Clear the existing data in the html
      whiskyData.html("");
  
      // Use `Object.entries` to add each key and value pair to the panelData
      Object.entries(results_table).forEach(([key, value]) => {
        whiskyData.append('p').text(`${key}: ${value}`);
      });
};
