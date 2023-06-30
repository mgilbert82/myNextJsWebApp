'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import {
  faEye,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import loadingAnimation from '../../../../public/animations/loading.gif';
import Link from 'next/link';

const Blogadmin = () => {
  const session = useSession();
  //console.log(session);

  const router = useRouter();

  const fetcher = (...args) =>
    fetch(...args).then((res) => res.json());

  const { data, error, mutate, isLoading } = useSWR(
    `/api/posts`,
    fetcher
  );
  //console.log(data);

  if (session.status === 'loading') {
    return <div className='container'>Loading ...</div>;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  //Save a post
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const subtitle = e.target[1].value;
    const desc = e.target[2].value;
    const body = e.target[3].value;
    const images = e.target[4].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          subtitle,
          desc,
          body,
          images,
        }),
      });
      await mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  //Delete a post
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='mt-10 pt-10 mb-10 pb-10 text-center'>
      <h1 className='p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
        Blog admin
      </h1>
      {/* Adding new post */}
      <div className='mx-auto w-1/4'>
        <h3>Add new post</h3>

        <form onSubmit={handleSubmit} className='grid grid-rows'>
          <input
            type='text'
            placeholder='title'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md h-10 p-2'
          />
          <input
            type='text'
            placeholder='subtitle'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md h-10 p-2'
          />
          <input
            type='text'
            placeholder='desc'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md h-10 p-2'
          />
          <textarea
            placeholder='content'
            rows={8}
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <input
            type='text'
            placeholder='images'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md h-10 p-2'
          />
          <button className='bg-yellow rounded-md h-10'>Send</button>
        </form>
      </div>
      <div className='m-4'>
        {/* Get All the post */}
        <div className='w-3/4 mx-auto mt-10 pt-10'>
          <h2>All the posts</h2>

          <div className='grid grid-cols-3'>
            {isLoading ? (
              <Image
                src={loadingAnimation}
                width={150}
                height={150}
                alt='loading'
              />
            ) : (
              data?.map((post) => (
                <div
                  className='m-2 text-left border-2 border-white rounded-2xl'
                  key={post._id}
                >
                  <Image
                    className='object-cover rounded-t-2xl w-full'
                    src={post.images}
                    width={400}
                    height={100}
                    alt='#'
                  />
                  <div className='p-4'>
                    <h3 className='text-blue uppercase mt-4 '>
                      {post.title.substr(1, 30)}
                    </h3>

                    <hr className='text-pink mb-4 mt-4 w-20 text-center' />
                    <p className='capitalize text-sm m-2'>
                      {post.body.substr(1, 50)}
                    </p>
                    <div className='grid grid-cols-4 justify-between text-right'>
                      {/* Go to the post */}
                      <Link href={`/blog/${post._id}`}>
                        <div className='text-right'>
                          <span>
                            <FontAwesomeIcon
                              icon={faEye}
                              className=' text-pink cursor-pointer'
                            />
                          </span>
                        </div>
                      </Link>

                      <div className='text-right'>
                        <span onClick={() => handleDelete(post._id)}>
                          <FontAwesomeIcon
                            icon={faTrash}
                            className=' text-pink cursor-pointer'
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogadmin;
