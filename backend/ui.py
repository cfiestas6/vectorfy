import streamlit as st
import requests
import json

st.title("CONTROL PANEL")

# Input fields for user to provide data
offer_id = st.text_input("Offer ID:")
amount = st.text_input("Amount (only required for slashing funds):")

# Buttons to invoke API methods
if st.button("Authorize Release"):
    # Prepare data for the request
    data = {"offerId": offer_id}
    # Send a POST request to the Flask app
    response = requests.post("http://localhost:5000/authorize_release", json=data)
    if response.ok:
        # Display transaction hash
        txn_hash = response.json().get("txn_hash", "N/A")
        st.write(f"Transaction Hash: {txn_hash}")
    else:
        st.write(f"Error: {response.text}")

if st.button("Slash Funds"):
    # Check if amount is provided
    if not amount:
        st.write("Error: Amount is required for slashing funds.")
    else:
        # Prepare data for the request
        data = {"offerId": offer_id, "amount": amount}
        # Send a POST request to the Flask app
        response = requests.post("http://localhost:5000/slash_funds", json=data)
        if response.ok:
            # Display transaction hash
            txn_hash = response.json().get("txn_hash", "N/A")
            st.write(f"Transaction Hash: {txn_hash}")
        else:
            st.write(f"Error: {response.text}")
