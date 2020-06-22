import React from 'react'
import './Attraction.css'

export default function AltAttraction({ attraction, country, addAltAttraction }) {
  return (
    <div className='attraction' key={attraction.xid}>
      {attraction && (
        <React.Fragment>
        <h3>{attraction.name}</h3>
        <img src={attraction.preview ? attraction.preview.source : "" } alt={attraction.name} />
        <p>{attraction.wikipedia_extracts ? attraction.wikipedia_extracts.text : ''}</p>
          <button onClick={() => addAltAttraction(attraction, country)}>Add Attraction</button>
        </React.Fragment>
      )}
    </div>
  )
}