import React from 'react'
import NavBar from './components/navbar';
import Calculate from './components/calculate';
import SideBar from './components/sideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = () => {
  return (
    <Router>
      <NavBar />
      <Global />
      <SideBar />
      <Routes>
        <Route  path='/calculate' element={<Calculate />}></Route>
      </Routes>
    </Router>
  )
}

export default Home;
