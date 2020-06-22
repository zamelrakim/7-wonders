import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <header>
      <p><Link to='/' className='header-links'>{"7Wonders" + (props.continent ? ` | ${props.continent}` : '')} </Link></p>
      <Link to='/plans' className='header-links'><p>Plans</p></Link>
    </header>
  )
}
