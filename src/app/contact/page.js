import React from 'react';
import ContactForm from '@/components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue to-white m-4'>
        Let&apos;s keep in touch
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
