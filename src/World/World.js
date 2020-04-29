import React from 'react'
import { Redirect } from 'react-router-dom'
import { WorldMap } from 'grommet'

export default function World(props) {
  console.log(props)

  const continents = [
    {
      name: "Africa",
      color: "graph-1",
      onClick: (e) => { props.setContinent(e); }
      // onHover: (e) => { console.log(e)}
    },
    {
      name: "Asia",
      color: "graph-1",
      onClick: (e) => { console.log(e) }
    },
    {
      name: 'Australia',
      color: 'graph-1',
      onClick: (e) => { console.log(e) }
    },
    {
      name: 'Europe',
      color: 'graph-1',
      onClick: (e) => { console.log(e) }
    },
    {
      name: 'North America',
      color: 'graph-1',
      onClick: (e) => { console.log(e) }
    },
    {
      name: 'South America',
      color: 'graph-1',
      onClick: (e) => { console.log(e) }
    }
  ]
  return (
   <WorldMap continents={continents} />
  )
}