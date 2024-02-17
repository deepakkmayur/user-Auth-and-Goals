const express=require("express")
const env=require("./env")
const goalRoute=require("./routes/goalRoutes")
const userRoute=require("./routes/userRoutes")
const {errorHandler}=require("./middleware/asyncHandler")
const dbConnect=require("./config/db") 

const app=express()
dbConnect()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/user",userRoute)
app.use("/",goalRoute)

app.use(errorHandler)

app.listen(env.PORT,()=>{
   console.log(`server listening on port : ${env.PORT}`);
})
