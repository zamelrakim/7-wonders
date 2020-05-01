import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <Link to='/'><h1 id='sitename'>7Wonders</h1></Link>
      {props.continent && <h1>| {props.continent}</h1>}
      <Link to='/plans'><h2>Plans</h2></Link>
    </header>
  )
}