import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter,FaFacebookF, FaInstagram,FaLinkedinIn  } from 'react-icons/fa'


const Main = () => {
  return (
  <div id='main'>
    <img className='w-full h-screen object-cover object-left "scale-x-[-1]" ' src='https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'/>
   <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
    <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
    <div>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> I'm Sheraz K</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'DevOps Engineer',
        2000,
        'Tec Enthusiast',
        2000,
      ]}
      wrapper='div'
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
      </h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
        <FaTwitter   className='cursor-pointer' size={20}/>
        <FaFacebookF  className='cursor-pointer' size={20}/>
        <FaInstagram className='cursor-pointer' size={20}/>
        <FaLinkedinIn className='cursor-pointer' size={20}/>
     
    </div>


      
        </div>

    </div>


   </div>
    </div>
  )
}

export default Main
