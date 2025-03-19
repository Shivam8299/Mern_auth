import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVarified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt:Date, 
})

const User = mongoose.model('User',userSchema)

export default User