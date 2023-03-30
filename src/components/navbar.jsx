
import React from 'react';
import { Link } from 'react-router-dom';




const NavBar = () => {

  const handleLight = () =>{
    document.body.style.backgroundColor = 'cornsilk'
  }
  const handledark = () =>{
    document.body.style.backgroundColor = 'black';
  }

  return (
    <nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav mr-auto">

         <Link  className='btn' to='/calculate'>Calcukator</Link>
         <Link  className='btn' to='/global'>Login Form</Link>

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

  )
}

export default NavBar;
