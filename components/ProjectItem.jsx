import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg xl:shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-red-900 to-red-500'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl 5xl:text-8xl text-white tracking-wide text-center pb-[5%]'>{title}</h3>
        <Link href={projectUrl}>
            <p className='text-center py-1 xl:py-3 4xl:py-5 rounded-lg bg-white text-gray-700 font-bold text-base lg:text-lg xl:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-6xl 5xl:4xl:text-7xl cursor-pointer hover:scale-105 ease-in duration-300'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem