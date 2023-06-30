import React from 'react';
import Image from 'next/image';
import linkedin from '../../../public/assets/logo/linkedinLogo.svg';
import instagram from '../../../public/assets/logo/instagramLogo.svg';
import github from '../../../public/assets/logo/githubLogo.svg';
import mail from '../../../public/assets/logo/mailLogo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='lg:h-30 w-full  p-2'>
      <div className='text-xs text-center'>
        Powered by Michel Gilbert - All rights reserved
      </div>
      <hr className='w-2/4 mx-auto' />
      <div className='grid grid-cols-4 w-20 gap-2 mx-auto mt-2'>
        {/* Instagram */}
        <Link
          href='https://www.instagram.com/chelmitreblig/'
          target='_blank'
        >
          <Image
            src={instagram}
            className='grid-cols'
            width='800'
            height='800'
            alt='Instagram'
          ></Image>
        </Link>
        {/* Linkedin */}
        <Link
          href='https://www.linkedin.com/in/michelgilbertlkdin/'
          target='_blank'
        >
          <Image
            src={linkedin}
            className='grid-cols '
            width='800'
            height='800'
            alt='Linkedin'
          ></Image>
        </Link>
        {/* Github */}
        <Link href='https://github.com/mgilbert82' target='_blank'>
          <Image
            src={github}
            className='grid-cols '
            width='800'
            height='800'
            alt='Github'
          ></Image>
        </Link>
        {/* Mail */}
        <Link href='mailto:michelgilbert@hotmail.fr'>
          <Image
            src={mail}
            className='grid-cols '
            width='800'
            height='800'
            alt='mail'
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
