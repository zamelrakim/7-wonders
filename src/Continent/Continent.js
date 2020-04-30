import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Continent(props) {
  const [selectedCountry, selectCountry] = useState(null)
  const [attractions, setAttractions] = useState(null)
  
  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(`https://www.triposo.com/api/20200405/poi.json?account=VY4307NY&token=xmav4vo2mfqoxdgvc3esq0b05f1t8bh8&tag_labels=topattractions&location_id=${selectedCountry}`)
      setAttractions(data.data.results)
    }
    // Call API Function On Line Below
    //
  }, [selectedCountry])
  
  return (
    <div id='continent'>
      <ul>
        {(props.countries && props.countries.map(country => {
          return <li key={country} onClick={() => { selectCountry(country) }}>{country}</li>
        }))}
      </ul>
      <div id='attractions'>
        {/* Map Atrractions Here Using Attractions Component */}
      </div>
    </div>
  )
}