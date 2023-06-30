import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';
import Button from '@/components/Button/Button';

async function getwork(id) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/works/${id}`,
    {
      store: 'no-store',
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

//Set metadata title an description of the page
export async function generateMetawork({ params }) {
  const work = await getwork(params.id);
  return {
    title: work.title,
    description: work.desc,
  };
}

const Blogwork = async ({ params }) => {
  const work = await getwork(params.id);
  const tags = work.tags.split(',');

  return (
    <div className='container'>
      <h2 className='text-yellow my-10'>{work.category}</h2>
      <div className='grid lg:grid-cols-2 gap-4 mt-10'>
        <div className='text-left'>
          <h3 className='text-blue text-2xl uppercase'>
            {work.title}
          </h3>
          <hr className='text-pink mb-4 w-20 text-center' />
          <h4 className='text-2xl'>{work.subtitle}</h4>
          <hr className='text-pink mt-4 mb-4 w-20 text-center' />
        </div>
        <Image
          className=' w-full object-cover'
          src={work.images}
          width={400}
          height={250}
          priority={true}
          alt='#'
        />
      </div>
      <div className='grid lg:grid-cols-2 gap-6 mt-10 '>
        <div className='text-left'>
          {work.content}
          <br />
          <div className='lg:w-1/2 mx-auto m-4 p-4 text-center'>
            <Button url={work.link} text={'Link to webapp'} />
          </div>
        </div>
        <div className='w-full mx-auto'>
          <h3 className='mb-4 text-center'>Tags</h3>
          <div className='grid grid-cols-2'>
            {tags.map((tag, id) => (
              <div
                className='text-white rounded-2xl m-2 p-2 text-center bg-blue'
                key={id}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogwork;
