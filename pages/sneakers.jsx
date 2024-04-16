import Image from 'next/image';
import React from 'react';
import sneakerImg from '../public/assets/projects/sneaker.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const sneakers = () => {
  return (
    <div className='w-full h-screen min-h-screen overflow-x-hidden'>
      <div className='w-screen h-[50%] relative'>
        <Image
          className='absolute inset-0 z-1 opacity-40'
          layout='fill'
          objectFit='cover'
          src={sneakerImg}
          alt='/'
        />
      </div>
      <div className='max-w-[80%] mx-auto grid lg:grid-cols-6 gap-[3%] pt-[5%]'>
        <div className='col-span-4 space-y-[5%]'>
          <div className='flex items-center space-x-[10%]'>
            <h2 className='text-red-700 text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl'>Sneakers Paradise</h2>
            <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl'>2022</h3>
          </div>
          <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl'>Project Overview</h3>
          <p className='text-base md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl'>
          This app was about a sneakers e-commerce web page, where you can search, filter, see the detail of a shoe, add it to the cart, 
          buy it, log in, and see the info of your account and your orders. Additionally, the Admin can administrate the users, the stock, 
          and the categories, seeing more info about the transactions that occur on the page.
          </p>
          <div className='flex items-center text-base md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl space-x-[5%]'>
            <a
              href='https://github.com/MKamui/Sneakers-Paradise-Front'
              target='_blank'
              rel='noreferrer'
            >
              <button className='py-3 xl:py-5 px-6 xl:px-10'>Code Front</button>
            </a>
            <a
              href='https://github.com/MKamui/Sneakers-Paradise-Back'
              target='_blank'
              rel='noreferrer'
            >
              <button className='py-3 xl:py-5 px-6 xl:px-10'>Code Back</button>
            </a>
            <a
              href='https://sneakers-paradise-front.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='py-3 xl:py-5 px-6 xl:px-10'>Demo</button>
            </a>
          </div>
        </div>
        <div className='col-span-4 lg:col-span-2 rounded-xl border border-shadow-gray-400 py-4'>
          <div className='p-[5%]'>
            <p className='text-center font-bold pb-2 text-red-700 text-lg md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-7xl 4xl:text-8xl'>Technologies</p>
            <div className='grid grid-cols-3 lg:grid-cols-1 text-sm md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl pt-[5%] space-y-[2%]'>
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
        <div className='col-span-4 lg:col-span-full pt-[2%] pb-[5%]'>
          <Link href='/#projects'>
            <button className='text-base md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl py-3 xl:py-5 px-6 xl:px-10'>Back to projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default sneakers;
