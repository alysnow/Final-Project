// ----------------------------------------------------------------
// Create a function to build and generate the data table for the MovieBase Database HTML
// ----------------------------------------------------------------

var dataSet = [[7, "Adventure", 439, "$23,738,161,039.00", "$28,000,000.00", "$77,180,369,998.00", "$59,700,000.00", 10, 9, 6, 600, 23738, 28, 77180, 59], [2, "Family", 260, "$11,048,890,059.00", "$24,500,000.00", "$36,113,426,664.00", "$57,470,029.50", 8, 8, 6, 456, 11048, 24, 36113, 57], [15, "Fantasy", 232, "$11,039,073,847.00", "$25,000,000.00", "$34,328,096,420.00", "$49,813,196.00", 9, 9, 6, 585, 11039, 25, 34328, 49], [19, "TV Movie", 1, "$5,000,000.00", "$5,000,000.00", "$42,000,000.00", "$42,000,000.00", 5, 6, 6, 102, 5, 5, 42, 42], [5, "Action", 741, "$29,934,126,656.00", "$20,000,000.00", "$82,283,193,867.00", "$36,000,000.00", 8, 8, 6, 396, 29934, 20, 82283, 36], [6, "Animation", 141, "$5,967,983,384.00", "$23,000,000.00", "$20,830,507,010.00", "$36,754,634.00", 9, 9, 7, 491, 5967, 23, 20830, 36], [12, "Science Fiction", 290, "$12,701,705,758.00", "$20,000,000.00", "$35,486,481,131.00", "$35,109,301.50", 9, 8, 6, 512, 12701, 20, 35486, 35], [11, "Crime", 469, "$11,128,971,302.00", "$12,600,000.00", "$27,901,408,828.00", "$24,048,000.00", 8, 8, 6, 396, 11128, 12, 27901, 24], [4, "Thriller", 789, "$20,873,192,826.00", "$13,000,000.00", "$53,917,610,066.00", "$21,890,845.00", 8, 8, 6, 425, 20873, 13, 53917, 21], [13, "Mystery", 225, "$5,049,606,001.00", "$10,000,000.00", "$13,417,641,845.00", "$21,133,087.00", 9, 9, 6, 422, 5049, 10, 13417, 21], [0, "Comedy", 1028, "$19,614,445,621.00", "$8,000,000.00", "$62,580,263,721.00", "$18,809,184.00", 7, 7, 6, 233, 19614, 8, 62580, 18], [8, "Horror", 301, "$4,578,070,363.00", "$6,000,000.00", "$15,865,430,318.00", "$17,037,887.00", 8, 8, 6, 330, 4578, 6, 15865, 17], [16, "War", 100, "$2,673,133,410.00", "$12,578,174.00", "$4,991,586,809.00", "$15,007,337.00", 8, 7, 7, 258, 2673, 12, 4991, 15], [18, "History", 132, "$2,997,539,637.00", "$12,000,000.00", "$5,070,546,615.00", "$15,436,943.50", 8, 7, 7, 194, 2997, 12, 5070, 15], [3, "Romance", 571, "$8,944,336,886.00", "$5,500,000.00", "$30,094,559,216.00", "$14,016,568.00", 6, 7, 6, 155, 8944, 5, 30094, 14], [10, "Music", 100, "$1,315,399,141.00", "$6,000,000.00", "$4,287,089,768.00", "$14,025,692.00", 6, 6, 7, 111, 1315, 6, 4287, 14], [1, "Drama", 1531, "$25,733,940,425.00", "$6,000,000.00", "$69,516,699,191.00", "$11,293,663.00", 7, 7, 7, 206, 25733, 6, 69516, 11], [17, "Western", 43, "$819,744,461.00", "$3,800,000.00", "$2,208,937,320.00", "$9,000,000.00", 8, 7, 7, 206, 819, 3, 2208, 9], [9, "Documentary", 87, "$76,787,594.00", "$0.00", "$403,506,794.00", "$268,431.00", 2, 2, 7, 31, 76, 0, 403, 0], [14, "Foreign", 31, "$40,334,367.00", "$0.00", "$58,100,126.00", "$170,000.00", 1, 1, 5, 13, 40, 0, 58, 0]]

        $(document).ready(function() {
            $('#example').DataTable( {
                data: dataSet,
                columns: [
                    { title: "index" },
                    { title: "genres" },
                    { title: "movies_count" },
                    { title: "total_budget" },
                    { title: "median_budget" },
                    { title: "total_revenue" },
                    { title: "median_revenue" },
                    { title: "median_popularity" },
                    { title: "median_popularity2" },
                    { title: "median_rating" },
                    { title: "median_totalVotes" },
                    { title: "total_budget(million)" },
                    { title: "median_budget(million)" },
                    { title: "total_revenue(million)" },
                    { title: "median_revenue(million)" },
                ]
            } );
        } );

loadData()