const mongoose=require("mongoose")

const goalSchema=mongoose.Schema({
   userId:{
      type:mongoose.Schema.Types.ObjectId, //tyoe of _id in mongodb databse 
      required:true,
      ref:"user"  // model name
   },
   text:{
      type:String,
      required:[true,"please add the text"]
   }
},{
   timestamps:true
})


const goalModel=mongoose.model("goal",goalSchema)



module.exports=goalModel