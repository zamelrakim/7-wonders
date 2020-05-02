import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Attraction from '../Attraction/Attraction'
import './Continent.css'

function Continent(props) {
  const [selectedCountry, selectCountry] = useState(null)
  const [attractions, setAttractions] = useState(null)

  useEffect(() => {
    if (selectedCountry) {
      const apiCall = async () => {
        const data = await axios.get(`https://www.triposo.com/api/20200405/poi.json?account=VY4307NY&token=xmav4vo2mfqoxdgvc3esq0b05f1t8bh8&tag_labels=topattractions&location_id=${selectedCountry}`)

        setAttractions(data.data.results)
      }
      apiCall()
    }
  }, [selectedCountry])

  useEffect(() => {
    const setCountry = async () => {
      if (!selectedCountry) selectCountry((props.countries && props.countries[0]))
    }
    setCountry()
  }, [props.countries, selectedCountry])

  let { setContinent } = props
  let continent = props.match.params.continent

  useEffect(() => {
    const mountFunction = async () => {
      await setContinent(continent)
    }
    mountFunction()
  }, [setContinent, continent])

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