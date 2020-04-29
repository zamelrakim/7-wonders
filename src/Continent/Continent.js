import React from 'react'
import axios from 'axios'
// import { useState, useEffect } from 'react'

export default function Continent(props) {
  console.log('Showing Continent Component')
  return (
    <div id='continent'>
      <ul>
        {(props.countries && props.countries.map(country => { return <li key={country}>{country}</li>}))}
      </ul>
      <div id='attractions'></div>
    </div>
  )
}