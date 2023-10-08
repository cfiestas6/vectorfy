from flask import Flask, request, jsonify
from web3 import Web3, HTTPProvider
import json

app = Flask(__name__)

w3 = Web3(HTTPProvider('https://rpc.goerli.eth.gateway.fm'))

#pass to env ignore
PRIVATE_KEY = 'bc8ec2e35d0720582ab1005d940ca6943efee189fa47028feae7609e929c3061'
ADDRESS = w3.to_checksum_address('0x83f4AF64092488fcf8B695E8fD6C1DCEc25397D1')


def load_abi_from_file(filename):
    with open(filename, 'r') as file:
        data = json.load(file)
        return json.loads(data['result'])  # Extract ABI from the 'result' key and load it



contract_json = load_abi_from_file("../contracts/abi.json")


CONTRACT_ABI = contract_json

CONTRACT_ADDRESS = w3.to_checksum_address('0x18f5bf676f0acf700d216933068bdbbb2609ba6a')

contract = w3.eth.contract(address=CONTRACT_ADDRESS, abi=CONTRACT_ABI)

def get_gas_price_with_buffer(buffer_percent=10):
    current_gas_price = w3.eth.gasPrice
    buffer = current_gas_price * buffer_percent / 100
    return current_gas_price + buffer

@app.route('/authorize_release', methods=['POST'])
def authorize_release():
    offerId = request.json.get('offerId')
    nonce = w3.eth.getTransactionCount(ADDRESS)

    txn_dict = contract.functions.backendAuthorizeRelease(offerId).buildTransaction({
        'chainId': 5,
        'gas': 2000000,
        'gasPrice': get_gas_price_with_buffer(),
        'nonce': nonce,
    })

    signed_txn = w3.eth.account.signTransaction(txn_dict, PRIVATE_KEY)
    txn_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
    return jsonify({"txn_hash": txn_hash.hex()}), 200


@app.route('/slash_funds', methods=['POST'])
def slash_funds():
    offerId = request.json.get('offerId')
    amount = request.json.get('amount')
    nonce = w3.eth.getTransactionCount(ADDRESS)

    txn_dict = contract.functions.slashFunds(offerId, amount).buildTransaction({
        'chainId': 5, 
        'gas': 2000000,
        'gasPrice': get_gas_price_with_buffer(),
        'nonce': nonce,
    })

    signed_txn = w3.eth.account.signTransaction(txn_dict, PRIVATE_KEY)
    txn_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
    return jsonify({"txn_hash": txn_hash.hex()}), 200

if __name__ == '__main__':
    app.run()