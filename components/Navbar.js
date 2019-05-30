import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <nav>
    <ul>
      <Link href='/'><a>index</a></Link>
      <Link href='/login'><a>login</a></Link>
    </ul>
  </nav>
)

export default Navbar;