const express = require('express')
const cors = require("cors")
const { connection } = require('./Config/connectDB')
const { userRouter } = require('./routes/user.routes')
require("dotenv").config() 

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

app.get("/", (req,res)=>{
    res.send("This is homePage and Server is running successfully")
})


app.listen(port, async()=>{
    try {
        await connection
        console.log(`connected to DB and server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})