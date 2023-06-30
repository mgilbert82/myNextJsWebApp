'use client';
import React from 'react';
import Link from 'next/link';
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from 'next-auth/react';
import pandarou from '../../../public/assets/images/website/pandarou.png';
import Image from 'next/image';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Work',
    url: '/work',
  },
  // {
  //   id: 3,
  //   title: 'Blog',
  //   url: '/blog',
  // },
  {
    id: 4,
    title: 'Contact',
    url: '/contact',
  },
  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dashboard",
  // },
];
const Navbar = () => {
  const session = useSession();

  return (
    <div className='text-center m-1'>
      {/* <Image
        src={pandarou}
        width={200}
        height={200}
        alt="logo-pandarou"
        priority={true}
        quality={100}
        className="w-1/2"
      /> */}
      <nav className='text-white'>
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className='text-lg hover:text-yellow hover:text-md me-2'
          >
            {link.title}
          </Link>
        ))}

        {session.status === 'authenticated' && (
          <Link
            href={'/dashboard'}
            className='text-sm hover:text-pink hover:text-md me-2'
          >
            Dashboard
          </Link>
        )}
        {session.status === 'authenticated' && (
          <button
            className='bg-blue text-white text-xs pe-1 ps-1 rounded hover:rounded-2xl'
            onClick={signOut}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
