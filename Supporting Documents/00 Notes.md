# Notes

![quote.jpg](https://github.com/alysnow/Final-Project/blob/main/Images/notes.jpg)

- - -

## Completed

* Selected topic - IMDB Movies

* Found Dataset - https://grouplens.org/datasets/movielens/latest

* Considered possible predictions
** Movie recommender
** Movie revenue
** Movie predictor 'Good' or 'Bad'

* Sketched rough visual idea with the Wireframe Toolkit

* Submitted Proposal

* Extracted data and read csv

* Completed data preparation and preprocessing exported data to a new csv file (imdb_table.csv)

* Built a Multiple Linear Regression and a Support Vector Classification ML model

* Summarised data and relevant columns to plan machine learning, database tables and tableau visualisations

* Created dataframes and imported tables to sqlite database (imdb_movie.db)
    * Genre
    * IMDB_table (selected columns from entire dataset)
    * Movie Title
    * Popularity
    * Revenue

* Created tables for the predictor.html forms and user endpoint selection. (Available in imdb_movie.db and in csv files)
    * Genre
    * Movie Title
    * Popularity
    * Revenue

* Created and saved csv files for the Tableau visualisations
    * IMDB (Selected columns from entire dataset)
    * Company (id,revenue,company_name)
    * Country (id,revenue,country_name)
** genre (id,budget,genre_name)

* Created template HTML files and included @app.route in app.py file to navigate between HTML pages
    * index home page
    * prediction page (D3.js)
    * visualisation page (Tableau)
    * database page (JQuery Datatables)
    * team page

* Saved SVC model

* Set up Flask
    * save model file to app.py
    * set up endpoint @app.routes for dropdown request form and return prediction

* Build Form for index.html Prediction

* Created Visualisations within MovieBase_main.ipynb

* Deploy Web Application to Heroku
- - -

## Remaining Tasks

* Fix Model to ensure a Good and Bad Movie is returned from the prediction
* Update index.html page with carousel and member thumbnails
* Style Web Application and final touches (styles.css/bootstrap)
* Prepare 10 minute data deep dive or infastructure presentation
* Update README and clean up files for submission

- - -

## Dataset Overview

* The data includes cast, crew, keywords, budget, posters, release dates, languages, production companies, and countries.

* Data types present in dataset:
    * String
    * Numeric
    * Date
    * JSON

* Handling JSON dats. There are a number of attributes such as cast, crew, genres which represents important information about each movie. They are multivalued fields. Each value in these fields are a JSON object. Example. of genres. [{'id': 35, 'name': 'Comedy'}, {'id': 18, 'name': 'Drama'}, {'id': 10751, 'name': 'Family'}, {'id': 10749, 'name': 'Romance'}]

### Columns

The following are few important features present in dataset:

**id** - Integer unique id of each movie

**belongs_to_collection** - Contains the TMDB Id, Name, Movie Poster and Backdrop URL of a movie in JSON format. You can see the Poster and Backdrop Image like this: https://image.tmdb.org/t/p/original/. Example (Wonder Woman): https://image.tmdb.org/t/p/original/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg

**budget**:Budget of a movie in dollars. 0 values mean unknown.

**genres** : Contains all the Genres Name & TMDB Id in JSON Format

**homepage** - Contains the official homepage URL of a movie. Example: http://www.warnerbros.com/wonder-woman , this is the homepage of Wonder Woman movie.

**imdb_id**- IMDB id of a movie (string). You can visit the IMDB Page like this: https://www.imdb.com/title/tt0451279/

**original_language** - Two digit code of the original language, in which the movie was made. Like: en = English, fr = french. original_title - The original title of a movie. Title & Original title may differ, if the original title is not in English.

**overview** - Brief description of the movie.

**popularity** - Popularity of the movie in float.

**poster_path** - Poster path of a movie. You can see the full image like this: https://image.tmdb.org/t/p/original/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg

**production_companies** - All production company name and TMDB id in JSON format of a movie.

**production_countries** - Two digit code and full name of the production company in JSON format.

**release_date** - Release date of a movie in mm/dd/yy format.

**runtime** - Total runtime of a movie in minutes (Integer).

**spoken_languages** - Two digit code and full name of the spoken language.

**status** - Is the movie released or rumored?

**tagline** - Tagline of a movie

**title** - English title of a movie

**Keywords** - TMDB Id and name of all the keywords in JSON format.

**cast** - All cast TMDB id, name, character name, gender (1 = Female, 2 = Male) in JSON format

**crew** - Name, TMDB id, profile path of various kind of crew members job like Director, Writer, Art, Sound etc.

**revenue** - Total revenue earned by a movie in dollars.

**Additional Features**

**popularity2**

**rating**	

**totalVotes**


## Contributors

- [@Alysha](https://github.com/alysnow)
- [@Sam](https://github.com/SamanthaVanWyngaarden)
- [@Steph](https://github.com/sSalvs)
