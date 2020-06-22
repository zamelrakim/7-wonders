import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Attraction from '../Attraction/Attraction'
import './Continent.css'

function Continent(props) {
  const [selectedCountry, selectCountry] = useState(null)
  const [attractions, setAttractions] = useState([])

  let { setContinent } = props
  let continent = props.match.params.continent

  useEffect(() => {
    const mountFunction = async () => {
      await setContinent(continent)
    }
    mountFunction()
  }, [continent, setContinent])

  useEffect(() => {
    const setCountry = () => {
      if (props.countries) {
        let includesCountry = props.countries.includes(selectedCountry)
        if (!includesCountry) selectCountry(props.countries[0])
      }
    }
    setCountry()
  }, [props.countries, selectedCountry])

  // V1 (TRIPOSO)
  useEffect(() => {
    if (selectedCountry) {
      const apiCall = async () => {
        const data = await axios.get(`https://www.triposo.com/api/20200405/poi.json?account=VY4307NY&token=xmav4vo2mfqoxdgvc3esq0b05f1t8bh8&tag_labels=topattractions&location_id=${selectedCountry}`)

        setAttractions(data.data.results)
      }
      apiCall()
    }
  }, [selectedCountry])

  /* 
  V2
  useEffect(() => {
    if (selectedCountry) {
      const apiCall = async () => {
        const data = await axios.get(`https://www.triposo.com/api/20200405/poi.json?account=VY4307NY&token=xmav4vo2mfqoxdgvc3esq0b05f1t8bh8&tag_labels=topattractions&location_id=${selectedCountry}`)

        setAttractions(data.data.results)

        // Gather Coordinates
        const coordinatesArray = []
        data.data.results.forEach(attraction => {
          const attractionCoordinates = attraction.coordinates
          let { latitude, longitude } = attractionCoordinates
          let location = []
          location[0] = latitude
          location[1] = longitude
          let locationCoordinates = {
            location: location
          }
          coordinatesArray.push(locationCoordinates)
        })
        console.log(coordinatesArray);
        props.setLocations(coordinatesArray)
        
      }
      apiCall()
    }
  }, [selectedCountry]) 
  */

  return (
    <div id='continent'>
      <ul>
        {(props.countries && props.countries.map(country => {
          return <li key={country} onClick={() => { selectCountry(country) }}>{country}</li>
        }))}
      </ul>
      <hr />
      <div id='attractions'>
        {(attractions && attractions.map(attraction => {
          return <Attraction key={attraction.id} attraction={attraction} country={selectedCountry} addAttraction={props.addAttraction} />
        }))}
      </div>
    </div>
  )
}

export default withRouter(Continent)