
import React from 'react'

import './style.css';


const Global = () => {
  return (
    <div>
      <img alt='' src='/images/11.jpeg' />
      <section className='From-sec'>
        <h2 className='h2-form'>Login Form</h2>
      <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" readonly className="form-control-plaintext" id="staticEmail"  placeholder='Enter Your Email'/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" placeholder='Password'/>
    </div>
  </div>

      </section>
    </div>
  )
}

export default Global
