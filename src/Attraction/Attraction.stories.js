import React from 'react'
import { storiesOf } from '@storybook/react'
import Attraction from './Attraction'

const testData = {
    name: 'National Mosque',
    snippet: 'Built in 1984, open to non-Muslims except during prayer.',
    images: [
      {
        sizes: {
          medium: {
            url: 'http://api-images-www.triposo.com/20200405/gAAAAABeql4HZoYLwUDiNK1sd51r1TBVZ4m8GKTAjZyMAqN46Gg2L20apT9Swh10l1QFVDOOPot2g-dWgz2s6qCgHjTbj6_9B5DwFl10V1Z6W9EOuZTDAlKbLbFufVKx2rAcpNkLAWUROn-Fo3_ycrw93F8QfVXOLn_FSclwJ-ug7iqxLAnVxRu6NDHXdDVQdl6uySVw8xpa6uT-s8V8hTGBznDa1L5BtaD9EngfmWtlJhPemjtjDBNfopsDvsF6GujFZTe61LVZxJ5Zn6uW4oKp_U9LaoL1Rir_C8A-C9DpexPAdacveJc='
          }
        }
      }
    ]   
}
  
const country = 'Malaysia'

storiesOf('Attraction', module)
  .add('Attraction / Component', () => {
    return <Attraction attraction={testData} country={country} />
  })