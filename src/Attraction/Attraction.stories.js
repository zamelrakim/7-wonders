import React from 'react'
import { storiesOf } from '@storybook/react'
import Attraction from './Attraction'

const testData = [
  {
    name: 'National Mosque',
    snippet: 'Built in 1984, open to non-Muslims except during prayer.',
    image: {
      url: 'http://api-images-www.triposo.com/20200405/gAAAAABeql4HZoYLwUDiNK1sd51r1TBVZ4m8GKTAjZyMAqN46Gg2L20apT9Swh10l1QFVDOOPot2g-dWgz2s6qCgHjTbj6_9B5DwFl10V1Z6W9EOuZTDAlKbLbFufVKx2rAcpNkLAWUROn-Fo3_ycrw93F8QfVXOLn_FSclwJ-ug7iqxLAnVxRu6NDHXdDVQdl6uySVw8xpa6uT-s8V8hTGBznDa1L5BtaD9EngfmWtlJhPemjtjDBNfopsDvsF6GujFZTe61LVZxJ5Zn6uW4oKp_U9LaoL1Rir_C8A-C9DpexPAdacveJc='
    }
  },
  {
    name: 'Nigerian National Museum',
    snippet: 'The Museum Kitchen is open on weekdays and is a good place to try local Nigerian cuisine.',
    image: {
      url: 'http://api-images-www.triposo.com/20200405/gAAAAABeql4HFoiiALJo_NfWtLVjEQ4jKhNt-DNePhDO5eesPwReaP4mVjX1QNAofTuLgPAlbgozIHXpPbs6mn3aT9kzzQLI5Nc3Ytmbhr8PhiH4MdtXTekIMwL159IWZT5OxbTTYqfkj0wVStnInoqh8zTGgzNtL3N2LW9TKfeqyRCFhn9vBR3L8TppCyW9s3wbO_9iy06OFezCDwZRXWDTDK9JJoo94DFXuP70UkhEmcSinrcSSI8q6-43A6N6xBzACf87BE2FVHTp0l6GnUH3a1fQnvQNUqurDtUgjNuwZy5Y9YdyTPM='
    }
  },
  {
    name: 'Zuma Rock',
    snippet: 'Zuma Rock is a large monolith, an igneous intrusion composed of gabbro and granodiorite, that is located in Niger State, Nigeria.',
    image: {
      url: 'http://api-images-www.triposo.com/20200405/gAAAAABeql4H5qhMo3HMV-9Xo398gY6jot6fipIkZ8WzomZL-tNj-7Tf4ljAbsAguqFOYiOrWS2er5jeBsau0UEJQLUEDg_hsHomGEopVSJOy-Wi85Gf5m2metQnF9rdNcafwRsQ6zpvrD_lDYbUrbuX10GZVBdLRP1FYW-qakr-vLByv7ZbtXTkrAG0rxgVBtSuWy47Ru2hF80riCgdpuaiUZMXpQu2fMPSzSfWMXNlZV7otTuEUPxi6g4h0O4_7HG93Ba8v6jXjjpaOPVfrMMslH-5LAzNWL2ZWjId0W9j-IMEZM1-T6s='
    }
  }
]

storiesOf('Attraction', module)
  .add('Attraction / Basic', () => {

    return (
      <div>
        {testData.map(attraction => {
          return (
            <>
              <h3>{attraction.name}</h3>
              <img src={attraction.image.url} alt='attractionImage' />
            </>
          )
        })}
      </div>
    )
  })
  .add('Attraction / Component', () => {
    return <Attraction attraction={} country={} addAttraction={() => {}} />
  })