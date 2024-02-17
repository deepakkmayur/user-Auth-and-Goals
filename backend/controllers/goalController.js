const asyncHandler=require("express-async-handler")
const goalModel=require("../models/goalModel")

const getGoals=asyncHandler(async(req,res)=>{

  const goals=await goalModel.find()
  console.log(goals);
   res.status(200).json({message:"successss get",goals})
   })

const postGoals=asyncHandler(async(req,res)=>{
   const createGoal=await goalModel.create({text:req.body.text})

//  res.status(200).json({message:"successss post",createGoal})
 res.status(200).json(createGoal)
 })

const updateGoals=asyncHandler(async(req,res)=>{
   // const modifyGoal =await goalModel.updateOne({_id:req.params.id},{$set:{text:req.body.text}})  
   //  res.status(200).json(modifyGoal)
   const goal=await goalModel.findById({_id:req.params.id})
 if(!goal){
   throw new Error("no goals found")
 }else{
   // const modifyGoal =await goalModel.updateOne({_id:req.params.id},{$set:{text:req.body.text}})  
   const modifyGoal =await goalModel.findByIdAndUpdate({_id:req.params.id},{text:req.body.text}) 
   console.log(modifyGoal); 
   res.status(200).json(modifyGoal)
 }
}
  )


 const deleteGoals=asyncHandler(async(req,res)=>{
   const goal=await goalModel.findById({_id:req.params.id})
   if(!goal){
      res.status(400).json({message:"no goals found"})
   }else{
      const removeGoal=await goalModel.deleteOne({_id:req.params.id})
      // const removeGoal=await goalModel.findOneAndDelete({_id:req.params.id})
      res.status(200).json({message:"successss delete",removeGoal})
   }
 })
         

module.exports={
   getGoals,
   postGoals,
   updateGoals,
   deleteGoals
}