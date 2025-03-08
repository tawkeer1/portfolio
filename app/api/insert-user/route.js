import User from "@/models/user.models";
import { connect } from "@/mongodb/mongoose";


export const POST = async (req)=>{
    const {email} = req.json();
    try {
        await connect();
        const user = await User.create(
        //   { clerkId: id },
          {email}
          )
          await user.save();
          return new Response(JSON.stringify(user));
      } catch (error) {
        console.log('Error creating or updating user:', error);
        return new Response("error in createing user")
      }
}