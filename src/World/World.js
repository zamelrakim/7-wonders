import React from 'react'
import { WorldMap } from 'grommet'

const continents = [
  {
    name: "Africa",
    color: "graph-1",
    onClick: (e) => { console.log(e) },
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

export default function World() {
  return (
    <WorldMap continents={continents}/>
  )
}