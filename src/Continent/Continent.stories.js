import React from 'react'
import { storiesOf } from '@storybook/react'
import Continent from './Continent'
import { BrowserRouter } from 'react-router-dom'

const listOfCountries = [
  'United States',
  'Mexico',
  'Canada',
  'Jamaica',
  'Cuba'
]

storiesOf('Continent', module)
  .add('Continent', () => {
    const countryListStyle = {
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '0 auto',
      padding: '5px'
    }

    const listContainerStyle = {
      width: '600px',
      margin: '0 auto'
    }

    const listItemStyle = {
      fontWeight: 'bold'
    }

    return (
      <div style={listContainerStyle}>
        <ul style={countryListStyle}>
          {listOfCountries.map(country => {
            return <li key={country} style={listItemStyle}>{country}</li>
          })}
        </ul>
      </div>
    )
  })
  .add('Continent / Component', () => {
    return (
      <BrowserRouter>
        <Continent addAttraction={() => {}} setCountry={() => {}} countries={listOfCountries} />
      </BrowserRouter>
    )
  })