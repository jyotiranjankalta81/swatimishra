import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

function Navbar () {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className='navbar'>
      <NavLink to='/' className='services'>
        <div className='logo'>
          <img src='' alt='' />
        </div>
      </NavLink>

      <ul
        className={isMobile ? 'nav-links nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <NavLink to='/' className='services'>
          <li>Services</li>
        </NavLink>
        <NavLink to='/' className='faqs'>
          <li>FAQ’s</li>
        </NavLink>
        <NavLink to='/' className='blogs'>
          <li>Blogs</li>
        </NavLink>
        <NavLink to='/' className='contactus'>
          <li>ContactUs</li>
        </NavLink>
        <NavLink to='/login' className='contactus'>
          <li>Login</li>
        </NavLink>
        <NavLink to='/' className='ordernow'>
          <li>Order Now</li>
        </NavLink>
      </ul>
      <button
        className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i>
            <FeatherIcon icon='x' />
          </i>
        ) : (
          <i>
            <FeatherIcon icon='menu' />
          </i>
        )}{' '}
      </button>
    </nav>
  )
}

export default Navbar
