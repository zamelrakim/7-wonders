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
  .add('Continent / Component', () => {
    return (
      <BrowserRouter>
        <Continent countries={listOfCountries} />
      </BrowserRouter>
    )
  })