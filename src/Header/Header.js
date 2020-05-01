import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <header>
      <h1><Link to='/' className='header-links'>{"7Wonders" + (props.continent ? ` | ${props.continent}` : '')} </Link></h1>
      <Link to='/plans' className='header-links'><h2>Plans</h2></Link>
      
    </header>
  )
}