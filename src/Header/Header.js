import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <header>
      <Link to='/' className='header-links'><h1>7Wonders</h1></Link>
      {props.continent && <h1>| {props.continent}</h1>}
      <Link to='/plans' className='header-links'><h2>Plans</h2></Link>
      
    </header>
  )
}