const model=require("../Models/sigin_model");
const jwt=require("jsonwebtoken");
const handleuser=async (req,res)=>{
    try{
await model.create(req.body).then((a)=>console.log(a)).catch((err)=>console.log(err));
res.send("created succeful").status(201);
    }
    catch(err){
        console.log("error");
    }
}
const handleuserlogin= async (req,res)=>{
    try{
const {email}=req.body;        ///always req.body not req.body.email
const found=await model.find({email:email});        //return array
console.log(found);
if(found.length >=1){ //not found.length()
jwt.sign(email,process.env.secret_token,(err,token)=>{
    if(err) return;
    else{
        res.json({
            message:"succefull login",
            token:token
        })
    }
})
}
else{
    console.log("email not found");
    res.send("email not found");
}
    }catch(err){
        console.log("outer error");
    }
}
module.exports={handleuser,handleuserlogin};
