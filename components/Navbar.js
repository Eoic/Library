import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <nav className='bg-green'>
    <ul className='nav-list'>
      <li>
        <Link href='/'>
          <a style={{ fontWeight: 'bold' }}>
            <i className='far fa-copy w-fixed'></i>
            Library
          </a>
        </Link>
      </li>

      <li className='float-right'>
        <Link href='/profile'>
          <a>
            <img className='profile-thumbnail' src='./static/profile.png'></img>
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;