import React from 'react'

export default function Attraction({ attraction, country, addAttraction }) {
  return (
    <div>
      <h3>Here is the {attraction.name} attraction.</h3>
      <img src={attraction.images[0].sizes.medium.url} alt={attraction.name} />
      <p>{attraction.snippet}</p>
      <button onClick={() => addAttraction(attraction, country)}>Add Attraction</button>
    </div>
  )
}