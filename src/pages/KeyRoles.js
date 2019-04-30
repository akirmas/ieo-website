import React, { useContext } from 'react';

import { AppContext } from '../context/app';

import Team from '../components/sections/Team';

const KeyRoles = () => {
  const { pages: { 
    keyRoles: {
      team,
    } 
  } } = useContext(AppContext); 

  return (
    <>
      <Team {...{team}} />
    </>
  );
};

export default KeyRoles;