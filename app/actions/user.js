import User from "@/models/user.models";
import { connect } from "@/mongodb/mongoose";


export const createOrUpdateUser= async (id,email)=>{
    try {
        await connect();
        const user = await User.findOneAndUpdate(
          { clerkId: id },
          {
            $set:{
            email
          } 
        },
          { new: true, upsert: true }
          )
          return user;
      } catch (error) {
        console.log('Error creating or updating user:', error);
      }
}