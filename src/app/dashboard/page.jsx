'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard = () => {
  const session = useSession();
  //console.log(session);

  const router = useRouter();

  if (session.status === 'loading') {
    return <div className='container'>Loading ...</div>;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const goTowork = () => {
    router?.push('/dashboard/work');
  };

  const goToBlog = () => {
    router?.push('/dashboard/blog');
  };

  if (session.status === 'authenticated') {
    return (
      <div className='mt-10 pt-10 mb-10 pb-10'>
        <h1 className=' text-center p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
          Dashboard
        </h1>

        <div className='grid grid-cols-2 w-1/3 mx-auto'>
          <button
            className='bg-yellow m-4 rounded'
            onClick={goTowork}
          >
            Go to my work
          </button>
          <button
            className='bg-yellow m-4 rounded'
            onClick={goToBlog}
          >
            Go to my Blog
          </button>
        </div>
      </div>
    );
  }
};

export default Dashboard;
