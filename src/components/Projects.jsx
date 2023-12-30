import React from 'react';
import ProjectItems from './ProjectItems'
import web1Img from '../assets/web1.png'
import web2Img from '../assets/web2.png'
import web3Img from '../assets/web3.png'
import web4Img from '../assets/web4.png'

const Projects = () => {
  return (
    <div id='Projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>PROJECTS</h1>
      <p className='text-center py-8 '>
 
Here are some of my projects on GitHub. Check out the code and explore my coding journey!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img={web1Img} title='SuperList App ' />
        <ProjectItems img={web2Img} title='1917-R App ' />
        <ProjectItems img={web3Img} title='Hyper-H App ' />
        <ProjectItems img={web4Img} title='Melvi-Tec App ' />
        
      </div>
    </div>
  );
};

export default Projects;
