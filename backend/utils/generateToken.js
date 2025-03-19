    import jwt from 'jsonwebtoken'
    const generateToken = (res, userId) =>{
        const token = jwt.sign({userId},process.env.TOKEN_SECRET,{
            expiresIn:"7d"
        })
        res.cookie('token',token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
        })
        return token
    }

    export default generateToken
    