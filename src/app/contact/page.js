import React from 'react';
import ContactForm from '@/components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='m-4'>
      <h1 className='pb-10 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white'>
        Let&apos;s keep in touch
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
