const mongoose = require ('mongoose')

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}


const userSchema = new mongoose.Schema({
    firstName:{type:String,required:[true,"First Name is required"]},
    lastName:{type:String,required:[true,"last Name is reqired"]}, 
    email : { type:String,required:[true,"email is required"],validateEmail},
    password:{type:String,required:[true,"password is required"]},
    status:{type:Boolean,default:true},
    role:{type:String,default:'customer'},
    createdAt:{type:Date, default:Date.now()}

},{
    collection:'users',
    versionkey:false
})

const userModel = mongoose.model('user',userSchema)
module.exports=userModel