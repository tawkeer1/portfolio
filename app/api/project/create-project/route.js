import Project from '@/models/projects.models';
import { connect } from '@/mongodb/mongoose.js';

import { currentUser } from '@clerk/nextjs/server';
export const POST = async (req) => {
  const user = await currentUser();
  try {
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
      userId: user.publicMetadata.userMongoId,
      content: data.content,
      title: data.title,
      image: data.image,
      url: data.url,
    });
    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 200,
    });
  } catch (error) {
    console.log('Error creating post:', error);
    return new Response('Error creating post', {
      status: 500,
    });
  }
};