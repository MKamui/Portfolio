import Image from 'next/image';
import React from 'react';
import starwarsImg from '../public/assets/projects/starwars.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={starwarsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-red-700'>Star Wars App</h2>
          <h3>2023</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='mb-4'>Project Overview</h2>
          <p className='mb-4'>
          This fully responsive app was a test for a job interview, it takes an API, and renders the info for the characters like the name, 
          planet of origin, birthday, and gender. Also, the app has a favorite function, and the possibility of searching a determined character of the favorite group.
          </p>
          <a
            href='https://github.com/MKamui/starwars'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://starwars-steel.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-red-700'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <button className='p-2'>Back to projects</button>
        </Link>
      </div>
    </div>
  );
};

export default property;