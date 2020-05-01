import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet, WorldMap } from 'grommet'
import World from './World'

const continents = [
  {
    name: "Africa",
    color: "graph-1",
    onClick: () => {}
  },
  {
    name: "Asia",
    color: "graph-1",
    onClick: () => {}
  },
  {
    name: 'Australia',
    color: 'graph-1',
    onClick: () => {}
  },
  {
    name: 'Europe',
    color: 'graph-1',
    onClick: () => {}
  },
  {
    name: 'North America',
    color: 'graph-1',
    onClick: () => {}
  },
  {
    name: 'South America',
    color: 'graph-1',
    onClick: () => {}
  }
]

const places = [
  {
    name: "New York",
    color: [
      'graph-3',
    ],
    location: [
      40.730610,
      -73.935242
    ],
    onClick: () => {}
  }
]

const theme = {
  worldMap: {
    continent: {
      active: '11px'
    },
    color: "graph-3",
    place: {
      active: '24px'
    }
  }
}

storiesOf('World', module)
  .add('World / Theme', () => {
    return (
      <Grommet theme={theme}>
        <WorldMap />
      </Grommet>
    )
  })
  .add('World / Continents', () => {
   return (
      <Grommet theme={theme}>
        <WorldMap continents={continents} />
      </Grommet>
    )
  })
  .add('World / Places', () => {
    return (
      <Grommet>
        <WorldMap places={places} />
      </Grommet>
    )
  })
  // .add('World / Component', () => {
  //   return (
  //     <World />
  //   )
  // })