from flask import Flask, render_template
import pymongo
import requests

app = Flask(__name__)
client = pymongo.MongoClient("localhost", 27017)
db = client["comentarios"]
collection = db["quantidade"]

@app.rout('/', methods=['GET'])
def enviar_index():
    return render_template('index.html')

@app.route('/clicks', methods=['POST'])
def receber_cliques():
    dados = request.get_json()
    
    if "clicks" in dados:
        numero_de_clicks = dados["clicks"]
        print(numero_de_clicks)
        resposta = {"mensagem": "Dados de cliques recebidos com sucesso!"}
        return jsonify(resposta)
    else:
        resposta = {"erro": "Dados inválidos"}
        return jsonify(resposta), 400  


    