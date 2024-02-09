const asyncHandler=require("express-async-handler")

const getGoals=asyncHandler(async(req,res)=>{
   res.status(200).json({message:"successss get"})
   })

const postGoals=asyncHandler(async(req,res)=>{
 res.status(200).json({message:"successss post"})
 })

const updateGoals=asyncHandler((req,res)=>{
   if(req.body.message){
      console.log(req.params);
      res.status(200).json({message:"successss update",id:req.params.id})
      console.log(req.body);
   }else{
      // res.status(400).json({message:"successss update",id:req.params.id})
      throw new Error("no data in request")
    }
   }
  )
 const deleteGoals=asyncHandler(async(req,res)=>{
res.status(200).json({message:"successss delete",id:req.params.id})
 })
         

module.exports={
   getGoals,
   postGoals,
   updateGoals,
   deleteGoals
}