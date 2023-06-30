import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';
import heroimg from '../../../public/assets/images/website/hero.png';

export default function Hero() {
  return (
    <div className='lg:h-full snap-center mx-auto lg:w-3/4 p-4 text-center'>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='m-2 mt-10'>
          <h1 className='p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
            All stories begin from an idea
          </h1>
          <h3 className='my-auto'>
            Turning your Dream into Reality. Everything is possible
            for one who believes!
          </h3>
          <Button url={'/work'} text={'See my work'} />
        </div>
        <div className='m-2 w-3/4 mx-auto'>
          <Image
            // src="https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            src={heroimg}
            width={594}
            height={594}
            alt='hero'
            className='text-center'
          />
        </div>
      </div>
    </div>
  );
}
