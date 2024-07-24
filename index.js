import 'dotenv/config'
import express from "express";
const app  = express()

// console.log(process.env)


app.listen(process.env.PORT||8000,()=>{
    console.log("Server listening at port ",process.env.PORT||8000)
})

