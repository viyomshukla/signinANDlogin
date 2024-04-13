const jwt=require("jsonwebtoken");
exports.verify=(req,res,next)=>{
const token=req.headers['authorization'];
console.log(token);
const extracted_token=token.split(' ')[1];
//console.log(extracted_token);
const a=jwt.verify(extracted_token,process.env.secret_token,(err,decode)=>{
    if(err)console.log("error");
    else{
        res.send(decode);
        next()
    }
});

}
