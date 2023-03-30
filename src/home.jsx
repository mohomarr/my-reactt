import React from 'react'
import NavBar from './components/navbar';
import Calculate from './components/calculate';
import SideBar from './components/sideBar';
import Global from './components/global';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route  path='/calculate' element={<Calculate />}></Route>
        <Route  path='/global' element={ <Global />}></Route>
      </Routes>
    </Router>
  )
}

export default Home;
