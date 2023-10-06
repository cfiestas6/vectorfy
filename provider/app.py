from fastapi import FastAPI
from pydantic import BaseModel
from langchain.llms import Ollama

class Prompt(BaseModel):
    query: str

app = FastAPI()

@app.post("/")
async def root(prompt: Prompt):
    llm = Ollama(model="llama2")
    res = llm.predict(prompt.query)
    return {"message": res}
