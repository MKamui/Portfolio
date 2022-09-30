import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest'>
          Let's create something awesome!
          </p>
          <h1 className='py-4'>
            Hi, I'm <span className='text-red-700'> Mario</span>
          </h1>
          <h1 className='py-2'>A Full Stack Web Developer</h1>
          <p className='py-4 text-gray-300 sm:max-w-[70%] m-auto'>
            I’m an analytic Full Stack Web developer from Colombia, focused on creating great web applications while learning more frontend and backend technologies
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/mario-franco-427904178/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/MKamui'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
