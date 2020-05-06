import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

storiesOf('Header', module)
  .add('Header / Component', () => {
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })