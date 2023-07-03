'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useSWRConfig from 'swr';
import work from '../../../public/assets/images/website/work.png';

const Work = () => {
  const fetcher = (...args) =>
    fetch(...args).then((res) => res.json());

  //Load data from api/works
  const { data, error, isLoading } = useSWRConfig(
    `/api/works`,
    fetcher
  );

  return (
    <div className='lg:h-full snap-center mx-auto mt-10 text-center'>
      <Image
        className='h-60 w-full object-cover mx-auto pb-10'
        // src="https://images.unsplash.com/photo-1623116135497-a90bdc0ddca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        src={work}
        width={911}
        height={628}
        alt='#'
        quality={100}
      />
      {isLoading
        ? 'Loading...'
        : data?.map((work) => (
            <Link href={`/work/${work._id}`} key={work._id}>
              <div className='grid md:grid-cols-2 mb-4 mt-10 m-6 gap-2'>
                <div className='m-2'>
                  <h3 className='text-blue text-2xl text-left'>
                    {work.title}
                  </h3>
                  <hr className='text-pink mt-2 mb-4  w-20 text-center' />
                  <h4 className='text-yellow text-left mb-4'>
                    {work.category}
                  </h4>
                  <p className='text-left'>{work.desc}</p>
                </div>
                <Image
                  className='w-full m-2'
                  src={work.images}
                  width={200}
                  height={150}
                  alt='images'
                />
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Work;
