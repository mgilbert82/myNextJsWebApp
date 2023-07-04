'use client';
import React, { Fragment } from 'react';
import Link from 'next/link';
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import logoTest from '../../../public/assets/images/website/logo-test.png';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

const links = [
  {
    id: 0,
    title: 'Home',
    url: '/',
  },
  {
    id: 1,
    title: 'Work',
    url: '/work',
  },
  {
    id: 2,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 3,
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
    <Popover className='mt-5 mx-auto flex items-center sm:border-2 border-pink px-6 py-2 h-10 w-3/4 sm:rounded-md'>
      {/* Logo */}
      <Link href='/' className='flex' aria-label='Homepage'>
        <Image src={logoTest} alt='' className='w-7' />
      </Link>
      {/* Pages Link */}
      <div className='grow'>
        <div className='hidden sm:flex items-center justify-center gap-2'>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className='uppercase font-semibold hover:text-blue'
            >
              {link.title}
            </Link>
          ))}
          {/* Admin Button */}
          <div className='lg:gap-2'>
            {/* Admin interface */}
            {session.status === 'authenticated' && (
              <Link
                href={'/dashboard'}
                className='flex justify-center bg-pink rounded p-1'
              >
                Dashboard
              </Link>
            )}
            {session.status === 'authenticated' && (
              <button
                onClick={signOut}
                className='flex justify-center bg-blue rounded p-1'
              >
                Logout
              </button>
            )}
            {/* End of Admin Button */}
          </div>
        </div>
      </div>

      {/* Open Mobile Button */}
      <div className='flex grow items-center justify-end sm:hidden'>
        <Popover.Button
          className='inline-flex items-center justify-center rounded-md bg-black p-2 text-gray
        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink'
        >
          <span className='sr-only'>Open menu</span>
          <Bars3BottomLeftIcon
            className='h-6 w-6'
            aria-hidden='true'
          />
        </Popover.Button>
      </div>
      {/* EndOf Open Mobile Button */}
      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 ease-in'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='rounded-lg bg-black ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-default'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                {/* Logo */}
                <Link href='/' className='flex' aria-label='Homepage'>
                  <Image
                    src={logoTest}
                    alt=''
                    className='hidden md:w-7 md:inline md:mr-4'
                  />
                  <span className='md:text-5XL' aria-hidden='true'>
                    <strong className='text-pink'>T</strong>reblig
                  </span>
                </Link>
                <div className='-mr-2'>
                  <Popover.Button
                    className='inline-flex items-center justify-center rounded-md bg-black p-2
                  text-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink'
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon
                      className='h-6 w-6'
                      aria-hidden='true'
                    />
                  </Popover.Button>
                </div>
              </div>

              <div className='mt-6'>
                <nav className='grid gap-y-4'>
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.url}
                      className='uppercase font-semibold w-full hover:text-blue me-2 cursor-pointer md:first-letter py-0 md:mr-6'
                    >
                      {link.title}
                    </Link>
                  ))}
                  <p>Hello</p>
                </nav>
              </div>
              {/* Admin Button */}
              <div className='lg:hidden md:block'>
                {/* Admin interface */}
                {session.status === 'authenticated' && (
                  <Link
                    href={'/dashboard'}
                    className='flex justify-center bg-pink rounded lg:p-4 py-0 lg:mr-4 md:pb-4 mb-2 w-3/4 mx-auto'
                  >
                    Dashboard
                  </Link>
                )}
                {session.status === 'authenticated' && (
                  <button
                    onClick={signOut}
                    className='flex justify-center bg-blue rounded lg:p-4 lg:py-0 w-3/4 mx-auto'
                  >
                    Logout
                  </button>
                )}
              </div>
              {/* End of Admin Button */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
