'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import googleLogo from '../../../../../public/assets/icones/google.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  //console.log(session);

  if (session.status === 'loading') {
    return <div className='container'>Loading ...</div>;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return router?.push('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    await signIn('credentials', { email, password });
  };
  return (
    <div className='grid grid-rows mt-10 pt-10'>
      <h1 className=' text-center p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
        Login
      </h1>
      <form
        className='grid grid-rows-3 mx-auto'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          className='h-10 border-2 border-green bg-black rounded-md m-2 placeholder:p-2 placeholder:text-white p-2'
          placeholder='email'
          required
        />
        <input
          type='password'
          className='h-10 border-2 border-green bg-black rounded-md m-2 placeholder:p-2 placeholder:text-white p-2'
          placeholder='password'
          required
        />
        <button className='h-10 bg-yellow rounded-md m-2'>
          Login
        </button>
        {/* <Link
          href="/dashboard/register"
          className="text-blue underline underline-offset-4"
        >
          You don&apos;t have an account
        </Link> */}
      </form>

      {/* <button
        className="mt-8 p-2 border-2 border-yellow align-middle mx-auto rounded-2xl flex text-sm"
        onClick={async () => await signIn("google")}
      >
        <Image
          src={googleLogo}
          width={30}
          height={30}
          alt="google-logo"
          className="me-2"
        />
        Login with Google
      </button> */}
    </div>
  );
};

export default Login;
