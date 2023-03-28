
import React from 'react';
import { FaGithub,
  FaInstagramSquare,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
  FaBell,
  FaHome,
  FaKaaba,
  FaFacebookF
} from "react-icons/fa";
import {
  GrGoogle,
  GrInstagram,
  GrSkype,
  GrWordpress
} from "react-icons/gr";
const SideBar = () => {
  return (
    <div className='icons-div m-3'>
      <FaGithub className='dd  m-1'/>
      <FaInstagramSquare className='dd  m-1' />
      <FaSnapchat className='dd  m-1 '/>
      < FaTwitter className='dd  m-1'/>
      <FaYoutube className='dd  m-1'/>
      <FaFacebookF className='dd  m-1'/>

      {/* <FaBell className='dd bell  m-1' /> */}
      {/* <FaHome className='dd  m-1'/>
      <FaKaaba className='dd  m-1'/>

      <GrGoogle className='dd  m-1' />
      <GrInstagram className='dd  m-1'/>
      <GrSkype className='dd  m-1'/>
      <GrWordpress className='dd  m-1'/> */}

    </div>
  )
}

export default SideBar
