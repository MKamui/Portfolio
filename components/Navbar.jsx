import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../public/assets/logo.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full h-20 xl:h-28 3xl:h-44 4xl:h-52 z-[100] ease-in-out duration-300 bg-white text-black'>
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        <Link href='/'>
          <a className='font-bold text-xl lg:text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-6xl tracking-wider flex text-center items-center hover:text-red-500'>
            <div className='w-[50px] xl:w-[90px] 3xl:w-[130px] 4xl:w-[150px] aspect-square flex items-center justify-center'>
              <Image
                src={NavLogo}
                alt='logo MF'
              />
            </div>
            Mario Franco
          </a>
        </Link>
        <div>
          <ul className='hidden md:flex font-bold text-xl lg:text-2xl xl:text-3xl 3xl:text-5xl 4xl:text-6xl space-x-[20px] lg:space-x-[30px] xl:space-x-[40px] 3xl:space-x-[70px] 4xl:space-x-[100px]'>
            <li className='hover:text-red-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-red-500'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='hover:text-red-500'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='hover:text-red-500'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='hover:text-red-500'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white text-black p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='50'
                    height='50'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-xl shadow-gray-400 cursor-pointer flex items-center justify-center w-[30px] aspect-square border border-gray-200'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'/>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 font-bold'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 font-bold'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 font-bold'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 font-bold'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 font-bold'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-[40px]'>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/mario-franco-427904178/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/MKamui'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
