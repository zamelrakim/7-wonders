import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'
import World from './World'

storiesOf('World', module)
  .add('World', () => {
    return (
      <Grommet>
        <World />
      </Grommet>
    )
  })