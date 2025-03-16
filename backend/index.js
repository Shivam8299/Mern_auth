import express from 'express'
import 'dotenv/config'
import db from "./db/connectDb.js"
import authRoute from "./routes/authRoute.js"

const app = express();

// middlewares 

app.use('/api/auth',authRoute)

//db connection
db()


const port = process.env.PORT || 4000;

app.get("/",(req, res)=>{
    res.send("Hello from Server Side")
})

app.listen(port,()=>{
    console.log(`server is running on port  ${port} `)
})

