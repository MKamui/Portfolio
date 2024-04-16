import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className='w-full h-screen min-h-screen flex pt-[10%] items-center justify-center' id='about'>
      <div className='max-w-[85%]'>
        <div className='w-full text-xs md:text-base lg:text-xl xl:text-2xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl text-gray-300'>
          <h2 className='uppercase font-bold text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl tracking-wide text-red-700 pb-[5%]'>
            About
          </h2>
          <h3 className='text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl tracking-wide pb-[4%] text-gray-100'>Who I Am</h3>
          <p>
          I worked 11 years as a Philosophy teacher, in various educational institutions and university academy research. There I learn a lot about soft skills, teamwork, leadership, and being analytical, but, I feel something is missing.
          </p>
          <br/>
          <p>
          Since I was a child I have played video games and have had an interest in computers, but only in the past years did I take the time to learn about programming, and I was fascinated, by the logic, and the creating aspect, I was thrilled with this kind of knowledge, so I decided to become a developer.
          </p>
          <br/>
          <p>
          First I studied some apps and free websites, but later I went to a boot camp, where I gained experience with some technologies and started to make some projects, after that, I read, and practiced with other frameworks and possibilities to become a great web developer
          </p>
          <br/>
          <p>
          Now I work as a Full Stack Web Developer with more than a year of experience, doing projects with multiple frameworks, tools, and technologies. You can see some in my projects section.
          </p>
          <br/>
          <Link href='/#projects'>
            <p className='underline cursor-pointer hover:text-red-500 w-fit text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl pt-[5%]'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
