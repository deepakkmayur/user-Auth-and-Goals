 const env=require("../env")
 
 const errorHandler=(err,req,res,next)=>{
   const statusCode=res.statusCode?res.statusCode:500
 
   res.status(statusCode).json({message:err.message,stack:env.NODE_ENV==="developement"?err.stack:null})
}


module.exports={
   errorHandler
}



