'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      //Success sending code
      res.status === 201 &&
        router.push(
          '/dashboard/login?success=Account has been created successfully !'
        );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className='mt-10 pb-10'>
      <h1 className=' text-center p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
        Create an account
      </h1>

      <form
        className='grid grid-row-4 w-1/3 rounded mx-auto m-4 p-4'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='h-10 border-2 border-green bg-black rounded-md m-2 placeholder:p-2 placeholder:text-white p-2'
          placeholder='username'
          required
        />
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
          Register
        </button>
      </form>
      <div className='text-center'>
        <Link
          href='/dashboard/login'
          className='text-center text-blue underline underline-offset-4 text-sm'
        >
          Login with an existing account
        </Link>
      </div>
      <div className='text-pink m-4'>
        {error && 'Something went wrong!'}
      </div>
    </div>
  );
};

export default Register;
