import React from 'react'
import NavBar from './components/navbar';
import Calculate from './components/calculate';
import SideBar from './components/sideBar';


import './App.css';


const App = () => {
  return (
    <div>
    <NavBar />
    <Calculate />
    <SideBar />
    </div>
  )
}

export default App
