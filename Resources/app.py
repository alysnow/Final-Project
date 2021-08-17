from flask import Flask, jsonify, render_template, redirect
import sqlite3 as sql
from pandas.core.frame import DataFrame
from sqlalchemy import create_engine
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import os

app = Flask(__name__)

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


# Route to render index.html template using data from Mongo
@app.route("/raw_data_list")
def raw_list():
    raw_data_list = pd.read_csv("Resources/data/IMDB-Movie-Data.csv")
    print(raw_data_list)
    return jsonify(raw_data_list.values.tolist())

if __name__ == "__main__":
    app.run(debug=True)
