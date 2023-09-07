const router=require("express").Router()
const User=require("../modals/user")
router.get("/register",async(req,res)=>{
 const user=await new User({username:"john",
    email:"muhaiminasif8@gmail.com",
    password:"123456",
})
 await user.save()
 res.send("okay")
});
module.exports=router