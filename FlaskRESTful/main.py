from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)


cources = {
    1: {"name": "Python", "videos": 7},
    2: {"name": "JS", "content": "1"},
    3: {"delete": "deleted"}
}


class Trash(Resource):
    def get(self):
        return { "info": "Information!!", "num": 1 }


def UpdatePutCources(cource_id):
    parser = reqparse.RequestParser()
    parser.add_argument("name", type=str)
    parser.add_argument("size", type=int)
    cources[cource_id] = parser.parse_args()
    return cources


class Cources(Resource):
    def get(self, cource_id):
        if cource_id == 0:
            return cources
        else:
            return cources[cource_id]
        
    def delete(self, cource_id):
        del cources[cource_id]
        return cources

    def post(self, cource_id):
        UpdatePutCources(cource_id)

    def put(self, cource_id):
        UpdatePutCources(cource_id)


api.add_resource(Trash, "/api/trash")
api.add_resource(Cources, "/api/cources/<int:cource_id>")


if __name__ == "__main__":
    app.run(debug=True, port=3000, host="127.0.0.1")