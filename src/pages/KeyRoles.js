import React, { useContext } from 'react';

import { AppContext } from '../context/app';

import NavSub from '../components/layout/NavSub';
import Team from '../components/sections/Team';
import Showcase from '../components/sections/Showcase';

const KeyRoles = () => {
  const { pages: { 
    keyRoles: {
      team,
      showcase: {
        images
      }
    } 
  } } = useContext(AppContext); 

  return (
    <>
      <NavSub />
      <Team {...{team}} />
      <Showcase {...{images}} />
    </>
  );
};

export default KeyRoles;