import imp
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

import mysql.connector

#import sched, time

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="tfhft"
)


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


@app.get("/")
async def get():
    return HTMLResponse(html)

@app.get("/api/get_map_data")
async def get():
    conn = mydb.cursor()
    conn.execute("SELECT `objective_id`, `name`, `category`, `status`, `coalition`, `underAttack`, `numUnits`  FROM `ko_objectives` WHERE `serverid` = 5")
    myresult = conn.fetchall()
    return myresult



@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")




#mycursor = mydb.cursor()

#mycursor.execute("SELECT `objective_id`, `name`, `category`, `status`, `coalition`, `underAttack`, `numUnits`  FROM `ko_objectives` WHERE `serverid` = 4")

#myresult = mycursor.fetchall()


"""
s = sched.scheduler(time.time, time.sleep)

def update_map(sc): 
    print("Updating map")
    for x in myresult:
        print(x)
    sc.enter(60, 1, update_map, (sc,))


s.enter(60, 1, update_map, (s,))
s.run()

"""