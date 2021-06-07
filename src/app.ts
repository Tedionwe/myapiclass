import express from "express";
import bodyParser from "body-parser";
import loginRoute from "./routes/auth"


const app = express()

app.use(bodyParser.json({type:"*/*"}));


app.get("/",(req, res)=>{
    res.send("Welcome to My Express Api");
})

//// All Routes
app.use(loginRoute);


const PORT = 8081;

app.listen(PORT,()=>{
    console.log("Server Running At http://127.0.0.1:"+PORT)
})