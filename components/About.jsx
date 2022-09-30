import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-red-700'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-300'>
          I work the last 11 years as a Philosophy teacher, in various educational institutions and university academy research.
          There I learn a lot about soft skills, teamwork, leadership, and being analytic, but, I feel something is missing.
          </p>
          <p className='py-2 text-gray-300'>
          Since I was a child  I have played video games and have had an interest in computers, 
          but only in the past years did I take the time to learn about programming, and I was fascinated, by the logic, 
          the creating aspect, I was thrilled with this kind of knowledge, so I make a decision in my life, to become a developer.
          </p>
          <p className='py-2 text-gray-300'>
          First I studied with some apps and free webs, but later I go to a Bootcamp, 
          where I gain experience with some technologies and start to make some projects, after that I read, 
          and practice with other frameworks and possibilities to become a great web developer.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-300 underline cursor-pointer'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 
        ease-in duration-300 lg:w-[600px]'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
