from flask import Flask
from src.controllers.preferencesController import graphql_playground, graphql_server

app = Flask(__name__)

@app.route("/graphql", methods=["GET"])
def playground():
    return graphql_playground()

@app.route("/graphql", methods=["POST"])
def server():
    return graphql_server()

@app.route('/')
def welcome():
    return "Welcome to the Preferences Update Service!"

if __name__ == "__main__":
    app.run(debug=True, port=5001)
