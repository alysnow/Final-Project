from flask import Flask, jsonify, render_template, redirect, request
import sqlite3 as sql
from pandas.core.frame import DataFrame
from sqlalchemy import create_engine
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import os
import pickle

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

@app.route("/predict")
def data():
    return render_template("predict.html")

@app.route("/vis")
def vis():
    return render_template("vis.html")

@app.route("/database")
def stats():
    return render_template("database.html")

@app.route("/team")
def about():
    return render_template("team.html")


#################################################
# Query the database and send the jsonified results (Pet Pals) (Query the model return the )

@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        print(request.form)
        name = request.form["movieform"]
        print(movieform)
        budget = request.form["budget"]
        # sequel = request.form["runtime"]
        # budget = request.form["sequel"]
        # budget = request.form["release_year"]
        genre = request.form["genre"]

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

        print(genre)

        ## Dropdown returns the seleted value in the request.genre

        inputs = [[budget,Comedy,Drama,Family,Romance,Thriller,Action,Animation,Adventure,Horror,Documentary,Music,Crime,ScienceFiction,Mystery,Foreign,Fantasy,War,Western,History,TVMovie]]

        # scaler = pickle.load ('scaler.pkl')
        # model = pickle.load ('model_svc.pkl')

        # inputs_scaled = scaler.transform(inputs)

        # prediction = model.predict(inputs_scaled)

        # print(prediction)

        return redirect("/", code=302)

    return render_template("predict.html")

#################################################

if __name__ == "__main__":
    app.run(debug=True)
