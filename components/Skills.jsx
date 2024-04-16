import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Node from '../public/assets/skills/node.png'
import Postgres from '../public/assets/skills/postgres.png'
import AWS from '../public/assets/skills/aws.png'
import Shopify from '../public/assets/skills/Shopify.png'
import Mongo from '../public/assets/skills/mongo.png'

const Skills = () => {
  return (
    <div className='w-full h-[1000px] md:h-screen min-h-screen flex items-center justify-center' id='skills'>
      <div className='max-w-[95%] md:max-w-[90%] 3xl:max-w-[85%] mx-auto flex flex-col justify-center h-full pt-[10%] text-gray-300'>
        <h2 className='uppercase font-bold text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl tracking-wide text-red-700 pb-[5%]'>
          Skills
        </h2>
        <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl tracking-wide pb-[4%] text-gray-100'>What I Can Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-4xl 4xl:text-5xl 5xl:text-7xl'>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Html} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Css} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Javascript} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={ReactImg} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={NextJS} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Tailwind} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Node} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Mongo} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={AWS} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Firebase} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Postgres} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg hover:shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto w-[60px] xl:w-[100px] 3xl:w-[150px] 4xl:w-[200px] aspect-square'>
                <Image src={Shopify} className='w-full h-full' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Shopify</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
