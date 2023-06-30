import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

//Get post by Id
export const GET = async (req, { params }) => {
  const { id } = params;

  //fetch data
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {}
  return new NextResponse('Database Error !', { status: 500 });
};

//Delete post by Id
export const DELETE = async (req, { params }) => {
  const { id } = params;
  //fetch data
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    return new NextResponse('Post has been deleted !', {
      status: 200,
    });
  } catch (error) {}
  return new NextResponse('Database Error !', { status: 500 });
};
