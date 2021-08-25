from flask import Flask, jsonify, render_template, redirect, request
import sqlite3 as sql
from pandas.core.frame import DataFrame
from sqlalchemy import create_engine
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import os
import pickle
from sklearn.svm import SVC 
import json

# Flask Setup
#################################################

app = Flask(__name__)

# Models Setup
#################################################


# Page routes - create route that renders index.html template
#################################################

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/team")
def about():
    return render_template("team.html")

@app.route("/data")
def data():
    return render_template("data.html")

@app.route("/vis")
def explore():
    return render_template("vis.html")

@app.route("/predict")
def stats():
    return render_template("predict.html")

# Allow the use of POST request with methods=["POST"]
#################################################
@app.route("/api/predict", methods=["POST"])
def predict():
    if request.method == "POST":  # if the request method is POST
        x_values = request.get_json()  # get the json data
        scaler = pickle.load(open("scaler.pkl","rb"))  # load the model
        model = pickle.load(open("model_svcrev.pkl","rb"))  # load the model Y on Revenue (>1700000, 1, 0)
        # model = pickle.load(open("model_svctot.pkl","rb"))  # load the model Y on Total Votes (>263, 1, 0)
        # model = pickle.load(open("model_svcpop.pkl","rb"))  # load the model Y on Popularity2 (>8, 1, 0)
        # model = pickle.load(open("model_svcrat.pkl","rb"))  # load the model Y on Rating (>6, 1, 0)
        genre = x_values['genre']

        if genre == 'Comedy':
            Comedy = 1
        else:
            Comedy = 0
        if genre == 'Drama':
            Drama = 1
        else:
            Drama = 0

        if genre == 'Family':
            Family = 1
        else:
            Family = 0

        if genre == 'Romance':
            Romance = 1
        else:
            Romance = 0

        if genre == 'Thriller':
            Thriller = 1
        else:
            Thriller = 0

        if genre == 'Action':
            Action = 1
        else:
            Action = 0

        if genre == 'Animation':
            Animation = 1
        else:
            Animation = 0

        if genre == 'Adventure':
            Adventure = 1
        else:
            Adventure = 0

        if genre == 'Horror':
            Horror = 1
        else:
            Horror = 0

        if genre == 'Music':
            Music = 1
        else:
            Music = 0

        if genre == 'Crime':
            Crime = 1
        else:
            Crime = 0

        if genre == 'Science Fiction':
            ScienceFiction = 1
        else:
            ScienceFiction = 0

        if genre == 'Mystery':
            Mystery = 1
        else:
            Mystery = 0

        if genre == 'Fantasy':
            Fantasy = 1
        else:
            Fantasy = 0

        if genre == 'War':
            War = 1
        else:
            War = 0

        if genre == 'History':
            History = 1
        else:
            History = 0


        language = x_values['language']

        if language == 'English':
            English = 1
        else:
            English = 0

        if language == 'Français':
            French = 1
        else:
            French = 0

        if language == 'Español':
            Spanish = 1
        else:
            Spanish = 0

        if language == 'Deutsch':
            German = 1
        else:
            German = 0

        if language == 'Pусский':
            Russian = 1
        else:
            Russian = 0

        print('1-everthing here is good')
        scaled_results = scaler.fit_transform(
            [[
                int(x_values['budget']),
                float(x_values['runtime']),
                Comedy,Drama,Family,Romance,Thriller,Action,Animation,Adventure,Horror,Music,Crime,ScienceFiction,Mystery,Fantasy,War,History,English,French,Spanish,German,Russian
            ]]
        )
        print('2-everthing here is good')
        prediction = model.predict(  # perform the prediction by passing in your x-values
            scaled_results
        )
        print('3-everthing here is good')
        print(prediction)

        # return the predicted result
        return {"prediction": str(prediction[0])}

#################################################

if __name__ == "__main__":
    app.run(debug=True)
