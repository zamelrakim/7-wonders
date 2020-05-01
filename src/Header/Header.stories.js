import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

storiesOf('Header', module)
  .add('Header / Basic', () => {
    const headerContainerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '600px',
      margin: '0 auto'
    }

    const linkStyle = {
      textDecoration: 'none',
      color: 'black',
      padding: '5px'
    }

    return (
      <header style={headerContainerStyle}>
        <a href='/' style={linkStyle} alt='test-home-link'><h1 id='sitename'>7Wonders</h1></a>
        <a href='/plans' style={linkStyle} alt='test-plans-link'><h2>Plans</h2></a>
      </header>
    )
  })
  .add('Header / Component', () => {
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })