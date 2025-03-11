import { auth } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server"; // Import Clerk server-side functions
import Project from "@/models/projects.models";
import { connect } from "@/mongodb/mongoose.js";

export const POST = async (req) => {
  try {
    const { userId } = auth();
    console.log("User ID from auth():", userId);

    if (!userId) return new Response("User doesn't exist", { status: 401 });

    // Fetch full user details from Clerk
    const user = await clerkClient.users.getUser(userId);
    console.log("Full User Data:", user);

    const userMongoId = user.publicMetadata?.userMongoId;
    if (!userMongoId) return new Response("UserMongoId missing", { status: 400 });

    await connect();
    const data = await req.json();

    const newPost = await Project.create({
      userId: userMongoId, // Use the stored MongoDB ID
      content: data.content,
      title: data.title,
      image: data.image,
      url: data.url,
    });

    await newPost.save();
    console.log("Project at backend", newPost);

    return new Response(JSON.stringify(newPost), { status: 200 });
  } catch (error) {
    console.log("Error creating post:", error);
    return new Response("Error creating post", { status: 500 });
  }
};
