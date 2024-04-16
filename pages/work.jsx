import Image from 'next/image';
import React from 'react';
import workImg from '../public/assets/projects/work.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const work = () => {
  return (
    <div className='w-full h-screen min-h-screen overflow-x-hidden'>
      <div className='w-screen h-[50%] relative'>
        <Image
          className='absolute inset-0 z-1 opacity-40'
          layout='fill'
          objectFit='cover'
          src={workImg}
          alt='/'
        />
      </div>
      <div className='max-w-[80%] mx-auto grid lg:grid-cols-6 gap-[3%] pt-[5%]'>
        <div className='col-span-4 space-y-[5%]'>
          <div className='flex items-center space-x-[10%]'>
            <h2 className='text-red-700 text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl'>Work Apps</h2>
            <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl'>2023-2024</h3>
          </div>
          <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl'>Project Overview</h3>
          <p className='text-base md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl'>
          Here you can find some of the pages I made under the company Colmancol SAS, where I worked for more than a year. For reasons of protection of data, I cannot share the codes, but you can view them, and I will be happy to answer questions about them. There are e-commerce, information, and commerce web pages and apps.
          </p>
          <div className='flex flex-col text-base md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl space-y-[5%]'>
            <a href='https://www.cict.com.au/' target='_blank' rel='noreferrer' className='hover:text-red-500 w-fit'>
            https://www.cict.com.au/
            </a>
            <a href='https://www.thefoodcompany.com.au/' target='_blank' rel='noreferrer' className='hover:text-red-500 w-fit'>
            https://www.thefoodcompany.com.au/
            </a>
            <a href='https://yccpoultry.com.au/' target='_blank' rel='noreferrer' className='hover:text-red-500 w-fit'>
            https://yccpoultry.com.au/
            </a>
            <a href='https://www.impressivewardrobes.com.au/' target='_blank' rel='noreferrer' className='hover:text-red-500 w-fit'>
            https://www.impressivewardrobes.com.au/
            </a>
            <a href='https://www.drseetoknee.com.au/' target='_blank' rel='noreferrer' className='hover:text-red-500 w-fit'>
            https://www.drseetoknee.com.au/
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
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Shopify
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Formik
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> EmailJS
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

export default work;
