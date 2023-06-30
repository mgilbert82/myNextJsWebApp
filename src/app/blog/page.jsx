'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog from '../../../public/assets/images/website/blog.png';
import Button from '@/components/Button/Button';

async function getData() {
  const res = await fetch(`${process.env.SITE_URL}/api/posts`);

  if (res.ok) {
    return res.json();
  }
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className='container'>
      <h1 className='text-center p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
        My Blog
      </h1>
      <Image
        className='lg:h-60 w-full object-cover mx-auto pb-10'
        src={blog}
        width={4032}
        height={3024}
        alt='#'
        priority={true}
        quality={100}
      />
      {data?.map((post) => (
        <div
          key={post._id}
          className='grid lg:grid-cols-2 sm:pb-10 gap-4 my-5'
        >
          <Image
            className='w-full object-contain p-2'
            src={post.images}
            width={400}
            height={250}
            priority={false}
            quality={80}
            alt='#'
          />
          <div className='ms-4'>
            <h3 className='text-blue text-2xl uppercase'>
              {post.title}
            </h3>
            <h4 className='text-white capitalize'>
              {post.body.substr(1, 50)} ...
            </h4>
            <hr className='text-pink mt-8 mb-4 w-20 text-center' />
            <p className='my-2 capitalize'>{post.desc}</p>
            <div className='w-1/2 mx-auto'>
              <Button
                url={`/blog/${post._id}`}
                text={'Read the post'}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
