import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <h1 className='p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white text-center'>
        My works
      </h1>
      {children}
    </>
  );
};

export default Layout;
