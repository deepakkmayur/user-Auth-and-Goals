const express=require("express")
// const {getGoals}=require("../controllers/goalController")
const goalController=require("../controllers/goalController")

const router=express.Router()


router.get("/goal",goalController.getGoals)
router.post("/goal",goalController.postGoals)
router.put("/goal/:id",goalController.updateGoals)
router.delete("/goal/:id",goalController.deleteGoals)


module.exports=router