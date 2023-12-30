import React from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main'; 
import Work from './components/Work';
import Projects from './components/Projects';
import ProjectItems from './components/ProjectItems';
import WorkItems from './components/WorkItems';
import Contact from './components/Contact';

function SidenavApp() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <WorkItems /> 
      <Projects />
      <ProjectItems />
      <WorkItems />
      <Contact />
    </div>
  );
}

export default SidenavApp;
