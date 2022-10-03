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
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-red-700'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 text-red-700'>Mario Franco</h2>
                <p>Full Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&lsquo;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/mario-franco-427904178/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/MKamui'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/df328455-c930-423c-83b7-72ec82fbcf1a'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
                      type='text'
                      name='name'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
                    type='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
                    type='text'
                    name='subject'
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <input
                    className='border-2 rounded-lg p-3 border-gray-300 text-black pb-10'
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Your message...'
                    value={message}
                  ></input>
                </div>
                {!error? <button className='w-full p-4 mt-4'>
                  Send Message
                </button> 
                : <p className='w-full p-4 mt-4 shadow-md shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-gray-800 to-gray-500 text-white text-center'>
                  Send Message
                  </p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
