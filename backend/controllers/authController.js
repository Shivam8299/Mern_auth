import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import generateToken from "../utils/generateToken.js"

const signup = async(req,res)=>{
   try {
    const {name, email, password} = req.body
        if(!name || !email || !password){
            res.status(400).json({
                success: false,
                message:"all fields are required"
            })
            const userAlreadyExists = await User.findOne({email});
            if(userAlreadyExists){
                res.status(400).json({
                    success: false,
                    message:"user already exists with this email "
                }) 
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const verificationToken = Math.floor(100000+Math.random()*900000).toString()
            const user = new User({
                name,
                email,
                password:hashedPassword,
                verificationToken,
                verificationTokenExpiresAt:Date.now()+24*60*60*1000  
            })
            await user.save()

            // jwt token 
            generateToken(res,user._id);
            res.status(201).json({success:true, message:"User Created successfully"})
            

        }
   } catch (error) {
    res.status(500).json({
        success: false,
        message:"Internal Server Error"
    })
   }
}

const login = async(req,res)=>{
    res.send("Hello from login route")
}

const logout = async(req,res)=>{
    res.send("Hello from logout route")
}

export {signup,login,logout}