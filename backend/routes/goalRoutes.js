const express=require("express")
// const {getGoals}=require("../controllers/goalController")
const goalController=require("../controllers/goalController")
const tokenVerify=require("../middleware/authMiddleware")

const router=express.Router()


router.get("/goal",tokenVerify,goalController.getGoals)
router.post("/goal",tokenVerify,goalController.postGoals)
router.put("/goal/:id",tokenVerify,goalController.updateGoals)
router.delete("/goal/:id",tokenVerify,goalController.deleteGoals)


module.exports=router