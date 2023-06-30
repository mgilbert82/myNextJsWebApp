'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import loadingAnimation from '../../../../public/animations/loading.gif';

const Workadmin = () => {
  const session = useSession();
  //console.log(session);

  const router = useRouter();

  //Fetch data to api works
  const fetcher = (...args) =>
    fetch(...args).then((res) => res.json());

  //Load data from api/works
  const { data, error, mutate, isLoading } = useSWR(
    `/api/works`,
    fetcher
  );

  //console.log(data);

  //Method if status loading
  if (session.status === 'loading') {
    return <div className='container'>Loading ...</div>;
  }

  //Method if status unauthenticated
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  //Save a new work
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const subtitle = e.target[1].value;
    const desc = e.target[2].value;
    const content = e.target[3].value;
    const date = e.target[4].value;
    const tags = e.target[5].value;
    const category = e.target[6].value;
    const link = e.target[7].value;
    const images = '/assets/images/works/' + e.target[8].value;

    //Set a new work
    try {
      await fetch('/api/works', {
        method: 'POST',
        body: JSON.stringify({
          title,
          subtitle,
          desc,
          content,
          date,
          tags,
          category,
          link,
          images,
        }),
      });
      e.target.reset();
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };

  //Delete a work
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/works/${id}`, { method: 'DELETE' });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-10 pt-10 mb-10 pb-10 text-center'>
      <h1 className='p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
        work admin
      </h1>
      {/* Adding new work */}
      <div className='mx-auto  w-2/4'>
        <h3>Add new work</h3>
        {/* Save new work */}
        <form onSubmit={handleSubmit} className='grid grid-rows'>
          <input
            type='text'
            placeholder='title'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <input
            type='text'
            placeholder='subtitle'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <textarea
            type='text'
            rows={2}
            placeholder='desc'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <textarea
            placeholder='content'
            rows={8}
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <input
            type='text'
            placeholder='date'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <input
            type='text'
            placeholder='tags'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <input
            type='text'
            placeholder='category'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <input
            type='text'
            placeholder='link'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <input
            type='text'
            placeholder='images'
            className='mb-2 placeholder:p-2 placeholder:text-white bg-green rounded-md p-2'
          />
          <button className='bg-yellow rounded-md h-10'>Send</button>
        </form>
      </div>
      <div className='m-4'>
        {/* Get All the work */}
        <div className='w-3/4 mx-auto mt-10 pt-10'>
          <h2>All the works</h2>

          <div className='flex'>
            {isLoading ? (
              <Image
                src={loadingAnimation}
                width={150}
                height={150}
                alt='loading'
              />
            ) : (
              data?.map((work) => (
                <div
                  className='m-2 text-left border-2 border-white rounded-2xl'
                  key={work._id}
                >
                  <Image
                    className='w-full object-cover rounded-t-2xl'
                    src={work.images}
                    width={400}
                    height={250}
                    alt='#'
                  />
                  <div className='p-4'>
                    <h3 className='text-blue uppercase mt-4 '>
                      {work.title}
                    </h3>

                    <hr className='text-pink mb-4 mt-4 w-20 text-center' />
                    <p className='capitalize text-sm m-2'>
                      {work.desc}
                    </p>
                    <div className='text-right'>
                      <span onClick={() => handleDelete(work._id)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className=' text-pink cursor-pointer'
                        />
                      </span>
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

export default Workadmin;
