import React from 'react';
import sneakerImg from '../public/assets/projects/sneaker.jpg'
import snoopyImg from '../public/assets/projects/snoopy.jpg'
import henryhouseImg from '../public/assets/projects/henryhouse.jpg'
import starwarsImg from '../public/assets/projects/starwars.jpg'
import small from '../public/assets/projects/small.jpg'
import work from '../public/assets/projects/work.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full h-[1350px] md:h-fit'>
      <div className='max-w-[85%] mx-auto flex flex-col justify-center py-[10%]'>
        <p className='uppercase font-bold text-lg md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl tracking-wide text-red-700 pb-[5%]'>
          Projects
        </p>
        <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl tracking-wide pb-[4%]'>What I&lsquo;ve Create</h2>
        <div className='grid md:grid-cols-2 gap-[3%]'>
          <ProjectItem
            title='Work Projects'
            backgroundImg={work}
            projectUrl='/work'
          />
          <ProjectItem
            title='HenryHouse'
            backgroundImg={henryhouseImg}
            projectUrl='/henryhouse'
          />
          <ProjectItem
            title='Sneakers Paradise'
            backgroundImg={sneakerImg}
            projectUrl='/sneakers'
          />
          <ProjectItem
            title='Starwars App'
            backgroundImg={starwarsImg}
            projectUrl='/starwars'
          />
          <ProjectItem
            title='Snoopy-Dogs App'
            backgroundImg={snoopyImg}
            projectUrl='/snoopy'
          />
          <ProjectItem
            title='Small Apps'
            backgroundImg={small}
            projectUrl='/small'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
