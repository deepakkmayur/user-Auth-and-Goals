const express=require("express")
const tokenVerify=require("../middleware/authMiddleware")
const router=express.Router()


const {registerUser,loginUser,getUser} =require("../controllers/userController")


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/",tokenVerify,getUser)


module.exports=router