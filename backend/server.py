from flask import Flask

app = Flask(__name__)

@app.route("/members", methods=['GET'])
def members():
    return {
        "members": ["Alpha", "Beta", "Charlie"]
        }
   
if __name__ == "__main__":
    app.run(debug = True, host="0.0.0.0")