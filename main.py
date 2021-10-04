#Jonathan Zavialov

from flask import *
from assets import readJson
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/aboutus")
def aboutus():
    return render_template("aboutus.html")

@app.route("/data")
def info():
	return json.dumps(readJson.read("assets/aboutus.json"))

app.run(host='0.0.0.0',port=80)
