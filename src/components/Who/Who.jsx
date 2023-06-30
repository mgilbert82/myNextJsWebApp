import React from 'react';
import about from '../../../public/assets/images/website/about.png';
import Image from 'next/image';
import Button from '../Button/Button';

const Who = () => {
  return (
    <div className='bg-gradient-to-t from-pink lg:h-full snap-start p-10'>
      <h1 className='text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
        Who am i ?
      </h1>
      <div className='grid lg:grid-cols-3 gap-4'>
        {/* Illustration */}
        <div className='m-2 w-3/4 mx-auto'>
          <Image
            className='object-cover w-3/4'
            src={about}
            // src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt='AboutMe'
            width={2150}
            height={3776}
          />
        </div>
        {/* Story section */}
        <div className='cols-span-2'>
          <h3 className='text-yellow'>Story</h3>
          <p className='m-0 text-left'>
            Adventurers for several years exploring the world of
            department stores, and conquering human management through
            support, communication and knowledge sharing. During this
            period, I developed several IT solutions to optimize and
            improve the quality of life at work. While I participated
            in the group&quot;s various IS projects, I was often a
            referent, trainer, key-user... <br />
            After 15 years in this structure, I decided to make a
            professional retraining in web application development.
          </p>
        </div>
        {/* Now section */}
        <div className='cols-span-2'>
          <h3 className='text-yellow'>Now</h3>
          <p className='m-0 text-left'>
            Actually, i work on myself to help handcraft man,
            charitable association to improve her communication on the
            web !
          </p>
          <h3 className='text-yellow mt-5'>
            What can i do for you ?
          </h3>
          <ul className='text-left'>
            <li>
              - Help for develop and deploy a solution to be on the
              network
            </li>
            <li>- Develop your own brand design</li>
            <li> - Creative illustrations</li>
            <li>...</li>
          </ul>
          <div className='w-1/2 mx-auto'>
            <Button
              url={'/contact'}
              text={'Contact me'}
              className='text-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
