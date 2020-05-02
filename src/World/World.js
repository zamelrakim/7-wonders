import React from 'react'
import { useHistory } from 'react-router-dom'
import { WorldMap } from 'grommet'

export default function World(props) {
  let history = useHistory()

  const continents = [
    {
      name: "Africa",
      color: "graph-1",
      onClick: (e) => { props.setContinent(e); history.push(`/${e}`) }
    },
    {
      name: "Asia",
      color: "graph-1",
      onClick: (e) => { props.setContinent(e); history.push(`/${e}`) }
    },
    {
      name: 'Australia',
      color: 'graph-1',
      onClick: (e) => { props.setContinent(e); history.push(`/${e}`) }
    },
    {
      name: 'Europe',
      color: 'graph-1',
      onClick: (e) => { props.setContinent(e); history.push(`/${e}`) }
    },
    {
      name: 'North America',
      color: 'graph-1',
      onClick: (e) => { props.setContinent(e); history.push(`/${e}`) }
    },
    {
      name: 'South America',
      color: 'graph-1',
      onClick: (e) => { props.setContinent(e); history.push(`/${e}`) }
    }
  ]
  return (
    <div id='world'>
      <WorldMap alignSelf='center' fill='false' continents={continents} />
    </div>
    // null
  )
}