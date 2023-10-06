import streamlit as st
import requests
import json
# Blockchain library

st.header("Example Chatbot")

if "messages" not in st.session_state:
    st.session_state["messages"] = [
            {
                "role": "assistant",
                "content": "How can I help you?"
            }
        ]

for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

if prompt := st.chat_input():
    st.session_state.messages.append(
            {
                "role": "user",
                "content": prompt
            })
    st.chat_message("user").write(prompt)
    # pk = "asdasd"
    # Call Sm

    res = requests.post('http://127.0.0.1:8000/', data=json.dumps({
        'query': prompt
    }))
    response = res.json()
    message = {
            "role": "assistant",
            "content": response['message']
        }
    st.session_state.messages.append(message)
    st.chat_message("assistant").write(message["content"])
