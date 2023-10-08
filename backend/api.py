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
        return json.load(file)

contract_json = load_abi_from_file("../contracts/abi.json")

CONTRACT_ABI = contract_json
CONTRACT_ADDRESS = w3.to_checksum_address('0x029B8699716eafC4734EFeC504b1A1a8b0cE27fc')

contract = w3.eth.contract(address=CONTRACT_ADDRESS, abi=CONTRACT_ABI)

def get_gas_price_with_buffer(buffer_percent=10):
    current_gas_price = w3.eth.gas_price  # This returns the gas price in Wei.
    buffer = current_gas_price * buffer_percent / 100
    gas_price_with_buffer = current_gas_price + buffer
    return int(gas_price_with_buffer)  # Ensure the result is an integer.

@app.route('/authorize_release', methods=['POST'])
def authorize_release():
    try:
        offerId = request.json.get('offerId')
        nonce = w3.eth.get_transaction_count(ADDRESS)

        txn_dict = contract.functions.backendAuthorizeRelease(offerId).build_transaction({
            'chainId': 5,
            'gas': 2000000,
            'gasPrice': get_gas_price_with_buffer(),
            'nonce': nonce,
        })

        signed_txn = w3.eth.account.sign_transaction(txn_dict, PRIVATE_KEY)
        txn_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        return jsonify({"txn_hash": txn_hash.hex()}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/slash_funds', methods=['POST'])
def slash_funds():
    try:
        offerId = request.json.get('offerId')
        amount = request.json.get('amount')
        nonce = w3.eth.get_transaction_count(ADDRESS)

        txn_dict = contract.functions.slashFunds(offerId, amount).build_transaction({
            'chainId': 5,
            'gas': 2000000,
            'gasPrice': get_gas_price_with_buffer(),
            'nonce': nonce,
        })

        signed_txn = w3.eth.account.sign_transaction(txn_dict, PRIVATE_KEY)
        txn_hash = w3.eth.send_raw_transaction(signed_txn.raw_transaction)
        return jsonify({"txn_hash": txn_hash.hex()}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run()