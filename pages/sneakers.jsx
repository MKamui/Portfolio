import Image from 'next/image';
import React from 'react';
import sneakerImg from '../public/assets/projects/sneaker.jpg';
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
          src={sneakerImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-red-700'>Sneakers Paradise</h2>
          <h3>2022</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='mb-4'>Project Overview</h2>
          <p className='mb-4'>
          This app was about a sneakers e-commerce web page, where you can search, filter, see the detail of a shoe, add it to the cart, 
          buy it, log in, and see the info of your account and your orders. Additionally, the Admin can administrate the users, the stock, 
          and the categories, seeing more info about the transactions that occur on the page.
          </p>
          <a
            href='https://github.com/MKamui/Sneakers-Paradise-Front'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code Front</button>
          </a>
          <a
            href='https://github.com/MKamui/Sneakers-Paradise-Back'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code Back</button>
          </a>
          <a
            href='https://sneakers-paradise-front.vercel.app/'
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
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mongoose
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
