import Project from "@/models/projects.models";
import { connect } from "@/mongodb/mongoose.js";
import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
export const POST = async (req) => {
  try {
    const { userId } = await auth();
    console.log("userID form auth :", userId);
    if (!userId) return new Response("user doesn't exist", { status: 401 });

    const user = await clerkClient.users.getUser(userId);
    console.log("Full user data",user);
    const userMongoId = user.publicMetadata?.userMongoId;
    if (!userMongoId)
      return new Response("userMongoId missing", { status: 400 });

    await connect();
    const data = await req.json();

    // if (
    //   !user ||
    //   user.publicMetadata.userMongoId !== data.userMongoId ||
    //   user.publicMetadata.isAdmin !== true
    // ) {
    //   return new Response('Unauthorized', {
    //     status: 401,
    //   });
    // }
    const newPost = await Project.create({
      userId: userMongoId,
      content: data.content,
      title: data.title,
      image: data.image,
      url: data.url,
    });
    await newPost.save();
    console.log("project at backend", newPost);
    return new Response(JSON.stringify(newPost), {
      status: 200,
    });
  } catch (error) {
    console.log("Error creating post:", error);
    return new Response("Error creating post", {
      status: 500,
    });
  }
};
