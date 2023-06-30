import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';

async function getpost(id) {
  const res = await fetch(`${process.env.SITE_URL}/api/posts/${id}`, {
    store: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

//Set metadata title an description of the page
export async function generateMetapost({ params }) {
  const post = await getpost(params.id);
  return {
    title: post.title,
    description: 'Lorem ipsum',
  };
}

const BlogPost = async ({ params }) => {
  const post = await getpost(params.id);
  const dateString = post.timestamps;
  const dateObject = new Date(dateString);

  const formattedDate = dateObject.toLocaleDateString();
  const formattedTime = dateObject.toLocaleTimeString();
  return (
    <div className='container'>
      <div className='grid lg:grid-cols-2 gap-4 mt-10'>
        <div className='text-left m-4'>
          <h3 className='text-blue text-2xl uppercase'>
            {post.title}
          </h3>
          <hr className='text-pink mb-4 w-20 text-center' />

          <h2 className='text-2xl capitalize'>{post.subtitle}</h2>
        </div>
        <Image
          className=' w-full object-cover'
          src={post.images}
          width={400}
          height={250}
          priority={true}
          alt='#'
        />
      </div>
      <div className='m-4 capitalize'>{post.body}</div>
      <div className='m-4 text-blue text-center'>
        {formattedDate} - {formattedTime}
      </div>
    </div>
  );
};

export default BlogPost;
