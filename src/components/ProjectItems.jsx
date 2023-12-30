import React from 'react';

const ProjectItems = ({ img, title }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r hover:from-gray-200 hover:to-[#001b5e]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-green tracking-wider text-center'>
          {title}
        </h3>
      
        <a href="https://github.com/Sherazkarim1">
          <p className='text-center p-3 rounded-lg bg-black text-gray-700 font-bold cursor-pointer text-sm '>More</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItems;
