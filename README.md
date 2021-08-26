# Final-Project

![image](https://github.com/alysnow/Final-Project/blob/main/Images/readme.PNG)


## Overview

Ever thought about making your own film and curious how your movie would fare up in Hollywood? In this project we will be using a TMDB dataset which includes 3000 movies and data on cast, crew, keywords, budget, posters, release dates, languages, production companies, and countries to name a few. Our aim was to build a model with strong features to predict if a movie would be Good or Bad based on four key inputs being Budget, Runtime, Genre and Language and lets not forget the wide variety of data exploration and visuals we were keen to sink our teeth into with all we have learnt over the past six months in the bootcamp.

- - -

## Questions 

1. As a Movie Producer what key features make a good movie?
2. Do movies with higher budgets return more revenue?
3. Whats is the most popular Genre and returns the highest revenue

- - -

## Project structure
```
Final-Project
|__ .gitignore                                    # gitignore file
|__ Procfile                                      # Procfile file (Heroku)
|__ README.md                                     # README markdown
|__ requirements.txt                              # Requirements (Heroku)
| 
|__ Images/                                       # Contains png snippets
|
|__ Notebooks/
|   |__ archived/                                 # Contains archived notebooks from other datasets we explored
|   |__ MovieBase_json.ipynb                      # Notebook for converting csv to JSON
|   |__ MovieBase_main - Exploration.ipynb        # Data Exploration and Feature Engineering
|   |__ MovieBase_main - Exploration_notes.ipynb  # Notes on code 
|   |__ MovieBase_main - Models.ipynb             # Analysis notebook that contains charts 
|
|__ Resources/                                    # contains data, css, js and html files
|   |__ data/                                     # Data directory
|   |__ data summary.xlsx                         # Summary
|   |__ database_html.csv                         # CSV for data.html table #1
|   |__ databaseGenre_html.csv                    # CSV for data.html table #2
|   |__ imdb_movie.db                             # SQLite Database
|   |__ model_data.csv                            # Clean CSV for Model development
|   |__ tmdb_AdditionalFeatures.csv               # CSV with Additional Features
|   |__ tmdb_data.csv                             # Train CSV
|   |__ tmdb_test.csv                             # Test CSV
|   |__ static/                                   # Static directory
|      |__ css/                                   # css directory
|         |__ style.css                           # Style css file
|      |__ images/                                # Contains Web Application images
|      |__ js/                                    # Javascript directory
|         |__ data.js                             # Data html JavaScript
|         |__ predict.js                          # Model File Prediction JavaScript
|   |__ templates/                                # Templates directory
|      |__ data.html                              # Data html
|      |__ index.html                             # Index html
|      |__ predict.html                           # Predict html
|      |__ team.html                              # Team html
|      |__ vis.html                               # Visualisation html
|   |__ app.py                                    # Flask
|   |__ model_svcpop.pkl                          # SVC Model on Population
|   |__ model_svcrat.pkl                          # SVC Model on Ratings
|   |__ model_svcrev.pkl                          # SVC Model on Revenue
|   |__ model_svctot.pkl                          # SVC Model on Total Votes
|   |__ scaler.pkl                                # Scaler
|
|__ Supporting Documents/                         # contains supporting project documentation
|   |__ 00 Notes.md                               # Project Team notes
|   |__ 01 Project Description.md                 # Project Description
|   |__ 02 Requirements.md                        # Requirements
|   |__ 03 Grading Matrix.md                      # Grading Matrix
|   |__ 04 Schedule.md                            # Schedule
|   |__ 05 Project Proposal.md                    # Project Proposal
|   |__ Model_Comparison.pptx                     # Model Comparison

```

- - -

# Usage

Dependencies and Setup
```
# Jupyter Notebook

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os
import csv
import json
import plotly.express as px
import plotly.offline as py
import plotly.graph_objs as go
import plotly.tools as tls
%matplotlib inline
import matplotlib.pyplot as plt
import seaborn as sns
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
import warnings
warnings.filterwarnings("ignore")
import ast
from wordcloud import WordCloud
from collections import Counter
import pickle
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC 
from sklearn.metrics import classification_report
from sklearn import tree
from sklearn.ensemble import RandomForestClassifier


```
HTML
```

<!-- Required meta tags -->
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- CSS -->
<link href="./static/css/style.css" rel="stylesheet">
<script src="./static/css/style.css"></script>

<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- JQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>

<!-- JavaScript -->
<script src="./static/js/predict.js"></script>
<script src="./static/js/data.js"></script>

```
Requirements
```
Flask==2.0.1
Flask-SQLAlchemy==2.5.1
gunicorn==20.1.0
joblib==1.0.1
kiwisolver==1.3.1
MarkupSafe==2.0.1
matplotlib==3.4.3
numpy==1.21.2
pandas==1.3.2
pyparsing==2.4.7
python-dateutil==2.8.2
scikit-learn==0.24.2
scipy==1.7.1
SQLAlchemy==1.4.23

```

- - -

## Resources

|No|Source|Link|
|-|-|-|
|1|TMDB API |https://www.themoviedb.org/documentation/api|
|2|TMDB Box Office Prediction |https://www.kaggle.com/c/tmdb-box-office-prediction/data|

- - -

## Datasets

|No|Source|Link|
|-|-|-|
|1|tmdb_data.csv|https://github.com/alysnow/Final-Project/blob/main/Resources/data/tmdb_data.csv|
|2|tmdb_test.csv|https://github.com/alysnow/Final-Project/blob/main/Resources/data/tmdb_test.csv|
|3|tmdb_AdditionalFeatures.csv|https://github.com/alysnow/Final-Project/blob/main/Resources/data/tmdb_AdditionalFeatures.csv|

- - -

## ETL


### Extract

This dataset was collected from TMDB and extracted from Kaggle. Additionally, their is also an API via TMDB which provides access to data on many additional movies, actors and actresses, crew members, and TV shows.

Below provides an overview of few important features present in dataset:

|Feature|Feature Desccription|
|-|-|
|id|Integer unique id of each movie|
|belongs_to_collection|Contains the TMDB Id, Name, Movie Poster and Backdrop URL of a movie in JSON format. You can see the Poster and Backdrop Image like this: https://image.tmdb.org/t/p/original/. Example (Wonder Woman): https://image.tmdb.org/t/p/original/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg|
|budget|Budget of a movie in dollars. 0 values mean unknown.|
|genres|Contains all the Genres Name & TMDB Id in JSON Format|
|homepage|Contains the official homepage URL of a movie. Example: http://www.warnerbros.com/wonder-woman , this is the homepage of Wonder Woman movie.|
|imdb_id|IMDB id of a movie (string). You can visit the IMDB Page like this: https://www.imdb.com/title/tt0451279/|
|original_language|Two digit code of the original language, in which the movie was made. Like: en = English, fr = french.|
|original_title|The original title of a movie. Title & Original title may differ, if the original title is not in English.|
|overview|Brief description of the movie.|
|popularity|Popularity of the movie in float.|
|poster_path|Poster path of a movie. You can see the full image like this: https://image.tmdb.org/t/p/original/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg|
|production_companies|All production company name and TMDB id in JSON format of a movie.|
|production_countries|Two digit code and full name of the production company in JSON format.|
|release_date|Release date of a movie in mm/dd/yy format.|
|runtime|Total runtime of a movie in minutes (Integer).|
|spoken_languages|Two digit code and full name of the spoken language.|
|status|Is the movie released or rumored?|
|tagline|Tagline of a movie|
|title|English title of a movie|
|Keywords|TMDB Id and name of all the keywords in JSON format.|
|cast|All cast TMDB id, name, character name, gender (1 = Female, 2 = Male) in JSON format|
|crew|Name, TMDB id, profile path of various kind of crew members job like Director, Writer, Art, Sound etc.|
|revenue|Total revenue earned by a movie in dollars.|
|popularity2|Additional Popularity of the movie in float.|
|rating|Movie Rating in float|
|totalVotes|Total Votes in float|


### Transform

Our key focus was primarily on data cleaning, exploration and feature engineering to ensure we were able to build a model based on good features.

It was noted their were a number of columns which were in JSON format which contained key information like Genre, Language, Director, Lead Actors and their gender therefore we used a number of librares methods and functions to explore and feature engineer our data. 

For further information, you can view our jupyter notebooks in the following [link](https://github.com/alysnow/Final-Project/tree/main/Notebooks)


### Load

After the data was cleaned and transformed the data was initially loaded into a SQLite database and it was noted with the Machine learning Model we did not require to connect the database and rather trained the model on the data and built the flask and inputs in HTML using Javascript and D3.

- - -

## Machine Learning

The below correlation matrix provides an overview of the key features that have the strongest correlations.

![image](https://github.com/alysnow/Final-Project/blob/main/Images/CorrelationPlot.png)

### Y Axis

The following features were trialed for the Y-axis on a number of different models like Multiple Linear Regression, Support Vector Classification, Decision Tree and Random Forrest models:
* Average Revenue
* Total Votes
* Popularity Rating
* Average Rating
 
Ultimately after testing all features it was noted that revenue had the best correlation with budget.

### X Axis Features

The following features were trialed for thex-axis:
* Budget
* Runtime
* Genre
* Language

### Models

The first model we tried was a linear regression model, however the results were not what we hoped for. We next tried an SVC model, which had a much better result of 78.5%. We also tried a decision tree model and random forest model, however found that the SVC model was more appropriate for the website we had built and the questions we were asking.

![image](https://github.com/alysnow/Final-Project/blob/main/Images/modelcomparison.PNG)

- - -

## Deployment to Heroku:

Our webpage has been successfully deployed in Heroku via the following [MovieBase](https://moviebase007.herokuapp.com/) link. 

![image](https://github.com/alysnow/Final-Project/blob/main/Images/moviebase_heroku.PNG)

- - -

## Analysis


### Question 1: As a Movie Producer what key features make a good movie?

The following key features were noted for a "Good" movie.

### Budget 

Movies with higher budget proved to return a higher revenue and have more success

![image](https://github.com/alysnow/Final-Project/blob/main/Images/moviebase_heroku.PNG)

### Language

Movie released in English are predomitely more successful. Below is a wordcloud visual to show the most commom languages a movie is released in.

![image](https://github.com/alysnow/Final-Project/blob/main/Images/wordCloud_Language.png)

### Release Date

It was found Movies released in June and on a Wednesday appear to have the highest Revenue return. 

#### Month

![image](https://github.com/alysnow/Final-Project/blob/main/Images/RevenuevMonth.png)

#### Day of Week

![image](https://github.com/alysnow/Final-Project/blob/main/Images/RevenuevDOW.png)


### Question 2: Do movies with higher budgets return more revenu?

The data confirmed movies which have a higher budget returned a higher revenue. Below is a bar graph displaying the median Revenue per Genre versus the median Budget

![image](https://github.com/alysnow/Final-Project/tree/main/Images/RevenuevBudget.png)


### Question 3: Whats is the most popular Genre and which Genre returns the highest revenue?

From the previous bar char above where you can see the Revenue versus Budget the Genre Adventure was both showing as the highest budgeted and revenue and also had the highest votes and popularity score. Therefore is was confirmed movies with the Genre Adventure were the most popular with the highest revenue.

![image](https://github.com/alysnow/Final-Project/tree/main/Images/GenrePopularity.PNG)

- - -

## Further exploration

Further areas we would like to investigate and if we had more time we would like to further explore:

* Cast – do certain actresses or actors impact if a movie will be a good movie or a bad movie?
* Director – can the gender of the director impact its potential success?
* Where the movie was made – Does the country that make the movie influence how successful it will be, e.g. Australia vs America

- - -

## Conclusion

In conclusion we confirmed the higher the budget often means the higher revenue or rating. So the more money you spend, the more money you make.

For up and coming movie makers or directors who want to make their next big hit we believe a tool like our model could provide a good indication to decide what kind of movie they want to make and how it could fare up in holwood provided we expand on the moddel and interactive visualisations returned.

- - -

## Contributors

- [@Alysha](https://github.com/alysnow)
- [@Sam](https://github.com/SamanthaVanWyngaarden)
- [@Steph](https://github.com/sSalvs)
