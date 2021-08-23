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

# Allow the use of POST request with methods=["POST"]
#################################################
@app.route("/api/predict", methods=["POST"])
def predict():
    if request.method == "POST":  # if the request method is POST
        x_values = request.get_json()  # get the json data
        scaler = pickle.load(open("scaler.pkl","rb"))  # load the model
        model = pickle.load(open("model_svc.pkl","rb"))  # load the model
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

        if genre == 'Documentary':
            Documentary = 1
        else:
            Documentary = 0

        if genre == 'Music':
            Music = 1
        else:
            Music = 0

        if genre == 'Crime':
            Crime = 1
        else:
            Crime = 0

        if genre == 'ScienceFiction':
            ScienceFiction = 1
        else:
            ScienceFiction = 0

        if genre == 'Mystery':
            Mystery = 1
        else:
            Mystery = 0

        if genre == 'Foreign':
            Foreign = 1
        else:
            Foreign = 0

        if genre == 'Fantasy':
            Fantasy = 1
        else:
            Fantasy = 0

        if genre == 'War':
            War = 1
        else:
            War = 0

        if genre == 'Western':
            Western = 1
        else:
            Western = 0

        if genre == 'History':
            History = 1
        else:
            History = 0

        if genre == 'TVMovie':
            TVMovie = 1
        else:
            TVMovie = 0
        print('1-everthing here is good')
        scaled_results = scaler.fit_transform(
            [[
                int(x_values['budget']),
                float(x_values['runtime']),
                int(x_values['sequel']),
                int(x_values['release_year']),
                Comedy,Drama,Family,Romance,Thriller,Action,Animation,Adventure,Horror,Documentary,Music,Crime,ScienceFiction,Mystery,Foreign,Fantasy,War,Western,History,TVMovie
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
