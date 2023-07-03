import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import linkedin from '../../../public/assets/logo/linkedinLogo.svg';
import instagram from '../../../public/assets/logo/instagramLogo.svg';
import github from '../../../public/assets/logo/githubLogo.svg';
import mail from '../../../public/assets/logo/mailLogo.svg';

const SocialButton = () => {
  return (
    <div className='absolute right-0 top-12 bg-transparent w-20 text-right'></div>
      <div className='grid grid-rows-4 gap-2 ms-10'>
        {/* Instagram */}
        <Link
          href='https://www.instagram.com/chelmitreblig/'
          target='_blank'
        >
          <Image
            src={instagram}
            className='w-1/4'
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
            className='w-1/4'
            width='800'
            height='800'
            alt='Linkedin'
          ></Image>
        </Link>
        {/* Github */}
        <Link href='https://github.com/mgilbert82' target='_blank'>
          <Image
            src={github}
            className='w-1/4'
            width='800'
            height='800'
            alt='Github'
          ></Image>
        </Link>
        {/* Mail */}
        <Link href='mailto:michelgilbert@hotmail.fr'>
          <Image
            src={mail}
            className='w-1/4'
            width='800'
            height='800'
            alt='mail'
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default SocialButton;
