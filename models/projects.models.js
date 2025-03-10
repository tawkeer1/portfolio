import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    userId : {
        type: String,
    },
    title : {
        type: String,
        required: true,
        unique: true
    },
    content : {
        type: String,
        required: true,
        unique: true
    },
    image : {
        type: String,
        default: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png'
    },
    url : {
        type: String,
        default: "https://bloggingapp-one.vercel.app/"
    }
})

const Project = mongoose.models.Project || mongoose.model('Project',projectSchema);
export default Project;