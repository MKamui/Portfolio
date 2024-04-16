import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(true)

  const handleData = () => {
    if (name?.length > 0 && email.length > 0 && subject.length > 0 && message.length > 0)
    setError(false)
  }

  useEffect(() => {
    handleData()
  }, [name, email, subject, message, error])

  useEffect(() => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setError(true)
  }, []) 
  

  return (
    <div id='contact' className='w-full h-fit min-h-screen pt-[10%] flex justify-center items-center mb-[5%]'>
      <div className='max-w-[95%] 2xl:max-w-[85%] px-2 w-full h-full'>
        <h2 className='uppercase font-bold text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl tracking-wide text-red-700 py-[5%]'>
          Contact
        </h2>
        <h3 className='text-xl md:text-3xl lg:text-4xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl tracking-wide pb-[4%] text-gray-100'>Get In Touch</h3>
        <div className='grid lg:grid-cols-5 gap-8 h-fit'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4 border border-gray-400'>
            <div className='lg:p-4 h-full rounded-xl'>
              <div className='w-full aspect-video flex justify-center'>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300 w-full aspect-video object-cover object-center'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='text-red-700 text-lg md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl py-[4%]'>Mario Franco</h2>
                <p className='text-base md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl tracking-wide pb-[4%] text-gray-100'>Full Stack Developer</p>
              </div>
              <div>
                <div className='flex items-center justify-evenly py-4'>
                  <a
                    href='https://www.linkedin.com/in/mario-franco-427904178/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md xl:shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-red-500 hover:shadow-red-400 w-[75px] md:w-[85px] lg:w-[100px] xl:w-[120px] 3xl:w-[150px] 4xl:w-[250px] aspect-square flex justify-center items-center border border-gray-500 hover:border-red-400'>
                      <FaLinkedinIn className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl'/>
                    </div>
                  </a>
                  <a
                    href='https://github.com/MKamui'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md xl:shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-red-500 hover:shadow-red-400 w-[75px] md:w-[85px] lg:w-[100px] xl:w-[120px] 3xl:w-[150px] 4xl:w-[250px] aspect-square flex justify-center items-center border border-gray-500 hover:border-red-400'>
                      <FaGithub className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl'/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-lg xl:shadow-xl shadow-gray-400 rounded-xl border border-gray-400 flex flex-col justify-center px-[2%]'>
            <div className=''>
              <form
                action='https://getform.io/f/df328455-c930-423c-83b7-72ec82fbcf1a'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='flex flex-col py-[2%]'>
                  <label className='uppercase text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide py-2'>Name</label>
                  <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-black text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide'
                      type='text'
                      name='name'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                  />
                </div>
                <div className='flex flex-col py-[2%]'>
                  <label className='uppercase text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-black text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide'
                    type='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className='flex flex-col py-[2%]'>
                  <label className='uppercase text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-black text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide'
                    type='text'
                    name='subject'
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </div>
                <div className='flex flex-col py-[2%]'>
                  <label className='uppercase text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide py-2'>Message</label>
                  <input
                    className='border-2 rounded-lg p-3 border-gray-300 text-black pb-10 text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide'
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Your message...'
                    value={message}
                  ></input>
                </div>
                <div className='w-full flex justify-center py-[3%]'>
                  {!error? <button className='w-[80%] p-4 mt-4 text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide'>
                    Send Message
                  </button> 
                  : <p className='w-[80%] my-[2%] py-[1%] shadow-md shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-gray-800 to-gray-500 text-white text-center text-xs md:text-base lg:text-lg xl:text-2xl 3xl:text-4xl 4xl:text-5xl tracking-wide'>
                    Please complete the form
                    </p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
