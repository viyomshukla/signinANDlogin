const e=require("express");
const middle=require("../Middleware/getdetail_middleware")
const controller=require("../Controllers/signin_controller");
const router=e.Router();
router.post("/sigin",controller.handleuser);
router.post("/login",controller.handleuserlogin);
router.get("/getdetail",middle.verify);
module.exports=router;