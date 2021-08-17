// ----------------------------------------------------------------
// Create a function to build and generate the data table for the MovieBase Database HTML
// ----------------------------------------------------------------
function loadData() {
    d3.json("/raw_data_list").then((dataSet) => {
        // console.log(dataSet)

        $(document).ready(function() {
            $('#rawData').DataTable( {
                data: dataSet,
                columns: [
                    { title: "Rank" },
                    { title: "Title" },
                    { title: "Genre" },
                    { title: "Genre1" },
                    { title: "Genre2" },
                    { title: "Genre3" },
                    { title: "Description" },
                    { title: "Director" },
                    { title: "Actors" },
                    { title: "Year" },
                    { title: "Runtime (Minutes)" },
                    { title: "Rating" },
                    { title: "Revenue (Millions)" },
                    { title: "Metascore" }
                ]
            });
        });
})

}

loadData()