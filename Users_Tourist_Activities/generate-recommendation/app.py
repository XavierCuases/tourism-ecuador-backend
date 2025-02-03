from flask import Flask, request, jsonify
from ariadne import graphql_sync
from src.schemas.recommendationSchema import schema

app = Flask(__name__)

@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GraphiQL</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/graphiql/1.4.7/graphiql.min.css">
    </head>
    <body>
        <div id="graphiql" style="height: 100vh;"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.14.0/umd/react.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.14.0/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/graphiql/1.4.7/graphiql.min.js"></script>
        <script>
            const graphQLFetcher = graphQLParams =>
                fetch('/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(graphQLParams),
                }).then(response => response.json());

            ReactDOM.render(
                React.createElement(GraphiQL, { fetcher: graphQLFetcher }),
                document.getElementById('graphiql')
            );
        </script>
    </body>
    </html>
    """

@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()
    success, result = graphql_sync(schema, data, context_value=request, debug=app.debug)
    status_code = 200 if success else 400
    return jsonify(result), status_code

@app.route('/')
def welcome():
    return "Welcome to the Recommendation Generator!" 

if __name__ == "__main__":
    app.run(debug=True)
