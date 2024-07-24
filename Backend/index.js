import 'dotenv/config'
import express from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app  = express()

app.use(cookieParser())
app.use(cors({origin:"http://localhost:5173",credentials: true}))



// console.log(process.env)

app.get('/login',(req,res)=>{
    try {
        res.cookie("name","michael singh").json({message:"user logged in"})
        
    } catch (error) {
        console.log(error)
    }
})

app.get('/logout',(req,res,next)=>{
  try {
      let token = req.cookies?.name
      console.log(token)
      if(!token){
        return  res.json({message:"Not logged in"})
      }
      next()
  } catch (error) {
    console.log(error)
  }

},(req,res)=>{
    try {
        return res.clearCookie("name").json("Logged out successfully")
    } catch (error) {
        console.log(error)
    }
})


app.listen(process.env.PORT||8000,()=>{
    console.log("Server listening at port ",process.env.PORT||8000)
})

