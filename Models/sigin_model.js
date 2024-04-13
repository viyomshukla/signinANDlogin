const m=require("mongoose");
const sch=new m.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true});
module.exports=m.model("pwUser",sch);