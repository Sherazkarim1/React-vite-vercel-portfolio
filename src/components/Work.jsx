import React from 'react';
import WorkItems from './WorkItems'; // Make sure to replace './WorkItems' with the correct path to your WorkItems component

const data = [
  {
    year: 2018,
    title: 'Fiverr',
    details: 'In 2018, I began freelancing on Fiverr and proudly completed my first two projects, receiving 5-star ratings from satisfied clients',
  },
  {
    year: 2019,
    title: 'Fiverr',
    details: 'I successfully completed four projects on Fiverr, earning 5-star ratings for each one.',
  },
  {
    year: 2022,
    title: 'TecCav',
    details: 'I commenced my role as a front-end developer at TecCav, a technology company based in Gilgit.',
  },
  {
    year: 2023,
    title: 'Cloudlem',
    details: 'I started working as a Junior Software Engineer at CloudLem, and I continue in this role till now.',
  },
];

const Work = () => {
  return (
    <div id='Work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>WORK</h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.year}
          title={item.title}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
