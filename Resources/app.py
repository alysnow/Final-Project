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

@app.route("/recommendation")
def data():
    return render_template("recommendation.html")

@app.route("/database")
def stats():
    return render_template("database.html")

@app.route("/team")
def about():
    return render_template("team.html")

if __name__ == "__main__":
    app.run(debug=True)
