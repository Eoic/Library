import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <nav className='bg-green'>
    <ul className='nav-list'>
      <li><Link href='/'><a>index</a></Link></li>
      <li><Link href='/'><a>index</a></Link></li>
      <li><Link href='/'><a>index</a></Link></li>
      <li><Link href='/'><a>index</a></Link></li>
      <li className='float-right'><Link href='/login'><a>login</a></Link></li>
    </ul>
  </nav>
)

export default Navbar;