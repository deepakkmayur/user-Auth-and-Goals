const express=require("express")
const env=require("./env")
const goalRoute=require("./routes/goalRoutes")
const {errorHandler}=require("./middleware/asyncHandler")


const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",goalRoute)

app.use(errorHandler)

app.listen(env.PORT,()=>{
   console.log(`server listening on port : ${env.PORT}`);
})
