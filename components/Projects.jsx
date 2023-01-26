import React from 'react';
import sneakerImg from '../public/assets/projects/sneaker.jpg'
import cloudImg from '../public/assets/projects/cloud.jpg'
import snoopyImg from '../public/assets/projects/snoopy.jpg'
import henryhouseImg from '../public/assets/projects/henryhouse.jpg'
import starwarsImg from '../public/assets/projects/starwars.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-red-700'>
          Projects
        </p>
        <h2 className='py-4'>What I&lsquo;ve Create</h2>
        <div className='grid md:grid-cols-2 gap-8'>
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
            title='Cloud Management'
            backgroundImg={cloudImg}
            projectUrl='/cloud'
          />
          <ProjectItem
            title='Snoopy-Dogs App'
            backgroundImg={snoopyImg}
            projectUrl='/snoopy'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
