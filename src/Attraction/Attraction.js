import React from 'react'
import './Attraction.css'

export default function Attraction({ attraction, country, addAttraction }) {
  return (
    <div className='attraction'>
      <h3>{attraction.name}</h3>
      <img src={attraction.images[0].sizes.medium.url} alt={attraction.name} />
      <p>{attraction.snippet}</p>
      <button onClick={() => addAttraction(attraction, country)}>Add Attraction</button>
    </div>
  )
}