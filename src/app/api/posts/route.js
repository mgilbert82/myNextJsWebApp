import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async () => {
  //fetch data
  try {
    await connect();
    const posts = await Post.find();
    //console.log(posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {}
  return new NextResponse("Database Error !", { status: 500 });
};

export const POST = async (req) => {
  const body = await req.json();
  const newPost = new Post(body);

  //Save data
  try {
    await connect();
    await newPost.save();
    return new NextResponse("Post has been created !", { status: 201 });
  } catch (error) {}
  return new NextResponse("Database Error !", { status: 500 });
};
