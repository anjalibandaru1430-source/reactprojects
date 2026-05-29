from fastapi import FastAPI
app=FastAPI()
@app.post("/createuser")
def createuser():
    return{"message":"user created succesfully"}
@app.get("/readuser")
def readuser():
    return{"message":"user read successfully"}
@app.put("/updateuser")
def updateuser():
    return{"message":"user upadated successfully"}
@app.delete("/deleteuser")
def deleteuser():
    return{"message":"user deleted succesafully"}

'''
USAGE : create user
RESTAPI : http://127.0.0.1:8000/createuser
Method type  : POST
Required fields : none
Access type : Public

'''