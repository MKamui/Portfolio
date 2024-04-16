import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div className='w-full h-screen min-h-screen text-center pt-[5%]'>
      <div className='w-full h-full mx-auto flex justify-center items-center'>
        <div>
          <h1 className='py-4' id='home'>
            Hi, I&lsquo;m <span className='text-red-700'> Mario Franco</span>
          </h1>
          <h1 className='py-2'>A Full Stack Web Developer</h1>
          <p className='text-gray-300 sm:max-w-[80%] m-auto text-lg md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl pt-[3%]'>
            I’m an analytic Full Stack Web developer from Colombia, focused on creating great web applications while learning more frontend and backend technologies
          </p>
          <div className='flex items-center justify-center space-x-[40px] md:space-x-[100px] xl:space-x-[200px] 3xl:space-x-[300px] m-auto pt-[10%] md:pt-[5%]'>
            <a
              href='https://www.linkedin.com/in/mario-franco-427904178/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md xl:shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-red-500 hover:shadow-red-400 w-[75px] md:w-[100px] lg:w-[120px] xl:w-[150px] 3xl:w-[250px] 4xl:w-[300px] aspect-square flex justify-center items-center border border-gray-500 hover:border-red-400'>
                <FaLinkedinIn className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl'/>
              </div>
            </a>
            <a
              href='https://github.com/MKamui'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md xl:shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-red-500 hover:shadow-red-400 w-[75px] md:w-[100px] lg:w-[120px] xl:w-[150px] 3xl:w-[250px] 4xl:w-[300px] aspect-square flex justify-center items-center border border-gray-500 hover:border-red-400'>
                <FaGithub className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl'/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-md xl:shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-red-500 hover:shadow-red-400 w-[75px] md:w-[100px] lg:w-[120px] xl:w-[150px] 3xl:w-[250px] 4xl:w-[300px] aspect-square flex justify-center items-center border border-gray-500 hover:border-red-400'>
                <AiOutlineMail className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl'/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
