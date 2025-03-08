import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type:string,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }},
  {timestamps:true}
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
