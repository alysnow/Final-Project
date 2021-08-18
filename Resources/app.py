from flask import Flask, jsonify, render_template, redirect
import sqlite3 as sql
from pandas.core.frame import DataFrame
from sqlalchemy import create_engine
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import os


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
def data():
    return render_template("vis.html")

@app.route("/database")
def stats():
    return render_template("database.html")

@app.route("/team")
def about():
    return render_template("team.html")


#################################################
# Query the database and send the jsonified results (Pet Pals) (Query the model return the )

# @app.route("/send", methods=["GET", "POST"])
# def send():
#     if request.method == "POST":
#         name = request.form["petName"]
#         lat = request.form["petLat"]
#         lon = request.form["petLon"]

#         pet = Pet(name=name, lat=lat, lon=lon)
#         db.session.add(pet)
#         db.session.commit()
#         return redirect("/", code=302)

#     return render_template("predict.html")

#################################################

if __name__ == "__main__":
    app.run(debug=True)
