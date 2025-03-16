import mongoose from "mongoose";

const databaseConnection = async()=>{
  try {
    const connection = await mongoose.connect(process.env.MOBGO_URL)
    console.log(`database connected successfully: ${connection.connection.host}`)
    
  } catch (error) {
    console.log(error)
  }
}

export default databaseConnection