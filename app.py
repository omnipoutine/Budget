
from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse



#CREATE FLASK APP
app = Flask(__name__)
#Create API Object
api = Api(app)

parser = reqparse.RequestParser()

parser.add_argument('userId', type=str, help='Id for logged in user.')
parser.add_argument('value', type=float, help='Value of amount to be taken from budget.')
#class Budget(Resource):
    #def get(self):
        #id = parser.parse_args()
        #return getBudget(args['userId'])

    #def post(self):
        #id = parser.parse_args()
        #return updateBudget(args['userId'], args['value'])

#class GetAllBudget(Resource):
    #def get(self):
        #Month
        #Daily

cnx = connection.MySQLConnection(user='PHPSCRIPT', password='1234',
                                 host='127.0.0.1:3306')    

#class Register(Resource):
    #def post(self):
        #Budget
        #Green Amount
        #Yellow Amount
        #Red Amount



     