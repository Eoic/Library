import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <nav className='bg-green'>
    <ul className='nav-list'>
      <li><Link href='/'><a style={{ fontWeight: 'bold' }}>
        <i className='far fa-copy w-fixed'></i>
        Library
      </a></Link></li>
    </ul>
  </nav>
)

export default Navbar;