import { Box } from '@chakra-ui/react';
import React from 'react'
import MainHeader from '../MainHeader';
import './Ngame.css'
import Sidebar from '../Sidebar';
const Ngame = () => {
  return (
     
    <div className="ngame">
    <MainHeader/>
      <Sidebar/>
    </div>
  )
}

export default Ngame;