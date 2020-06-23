import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import Attraction from '../Attraction/Attraction'
import AltAttraction from '../Attraction/AltAttraction'
import './Continent.css'

function AltContinent(props) {
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
        if (!includesCountry) {
          selectCountry(props.countries[0])
        }
      }
    }
    setCountry()
  }, [props.countries, selectedCountry])

  
  // V3
 useEffect(() => {
  if (selectedCountry) {
    const apiCall = async () => {
      let attrArr = []

      const placeData = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?apikey=5ae2e3f221c38a28845f05b6d33300f92b2c077c071e3afe6abc18ba&name=${selectedCountry}`)

      if (placeData.data.status === "OK") {
        const { lat, lon } = placeData.data
        const radiusData = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?apikey=5ae2e3f221c38a28845f05b6d33300f92b2c077c071e3afe6abc18ba&radius=1000&limit=3&offset=0&lon=${lon}&lat=${lat}&rate=2&format=json`)
        
        if (radiusData.data) {
            const xidFunc = async (place) => {
            const xidData = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${place.xid}?apikey=5ae2e3f221c38a28845f05b6d33300f92b2c077c071e3afe6abc18ba`)
            return xidData.data
          }

          radiusData.data.forEach(place => {
            attrArr.push(xidFunc(place))
          })

          setAttractions(attrArr)
          Promise.all(attrArr).then(arr => setAttractions(arr))
        }
      }
    }
    apiCall()
  }
}, [selectedCountry])

  return (
    <div id='continent'>
      <ul>
        {(props.countries && props.countries.map(country => {
          return <li key={country} onClick={() => { selectCountry(country) }}>{country}</li>
        }))}
      </ul>
      <hr />
      <div id='attractions'>
        {((attractions.length > 0) ?
          attractions.map(attraction => {
          return <AltAttraction key={attraction.xid} attraction={attraction} country={selectedCountry} addAltAttraction={props.addAltAttraction} />
          })
          :
          <h3>There Are No Attractions For This Country At The Moment.</h3>
        )}
      </div>
    </div>
  )
}

export default withRouter(AltContinent)