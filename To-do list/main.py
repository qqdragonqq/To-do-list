from fastapi import FastAPI

app=FastAPI()

items=[]

@app.get('/')
def root():
    return {'name':'qqdragonqq'}

@app.post('/items')
def create_items(item: str):
    items.append(item)
    return items 