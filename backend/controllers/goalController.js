const asyncHandler=require("express-async-handler")
const goalModel=require("../models/goalModel")
const userModel = require("../models/userModel")


const getGoals=asyncHandler(async(req,res)=>{
   const goals=await goalModel.find({userId:req.user.id})
   res.status(200).json({message:"successss get",goals})
})



const postGoals=asyncHandler(async(req,res)=>{
   const createGoal=await goalModel.create({text:req.body.text,userId:req.user.id})

//  res.status(200).json({message:"successss post",createGoal})
 res.status(200).json(createGoal)
 })

const updateGoals=asyncHandler(async(req,res)=>{
   const goal=await goalModel.findById(req.params.id)
 if(!goal){
   throw new Error("no goals found")
 }else{
   const user=await userModel.findById(req.user.id)
   if(!user){
      res.status(401)
     throw new Error("no user found")
   }
   // user._id will be in objectId , convert it to string to compare
if(user._id.toString()===goal.userId.toString()){
   const modifyGoal =await goalModel.findByIdAndUpdate({_id:req.params.id},{text:req.body.text},{ new: true })
   res.status(200).json(modifyGoal)
}else{
   res.status(400).json({message:"not authorized to edit"})
}
 }
}
  )


 const deleteGoals=asyncHandler(async(req,res)=>{
   const goal=await goalModel.findById({_id:req.params.id})
   if(!goal){
      res.status(400).json({message:"no goals found"})
   }

   const user=await userModel.findById(req.user.id)
   if(!user){
     res.status(401)
     throw new Error("no user found")
   }

   if(user._id.toString()===goal.userId.toString()){
      const removeGoal=await goalModel.deleteOne({_id:req.params.id})
      res.status(200).json({message:"successss delete",removeGoal})
   }else{
      res.status(400).json({message:"not authorized to edit"})
   }
 })
         

module.exports={
   getGoals,
   postGoals,
   updateGoals,
   deleteGoals
}