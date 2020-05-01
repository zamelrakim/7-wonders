import React from 'react'
import { storiesOf } from '@storybook/react'
import Gallery from './Gallery'

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

const testData2 = [
  {
    name: 'National Mosque',
    country: 'Nigeria',
    snippet: 'Built in 1984, open to non-Muslims except during prayer.',
    image: 'http://api-images-www.triposo.com/20200405/gAAAAABeql4HZoYLwUDiNK1sd51r1TBVZ4m8GKTAjZyMAqN46Gg2L20apT9Swh10l1QFVDOOPot2g-dWgz2s6qCgHjTbj6_9B5DwFl10V1Z6W9EOuZTDAlKbLbFufVKx2rAcpNkLAWUROn-Fo3_ycrw93F8QfVXOLn_FSclwJ-ug7iqxLAnVxRu6NDHXdDVQdl6uySVw8xpa6uT-s8V8hTGBznDa1L5BtaD9EngfmWtlJhPemjtjDBNfopsDvsF6GujFZTe61LVZxJ5Zn6uW4oKp_U9LaoL1Rir_C8A-C9DpexPAdacveJc='
  },
  {
    name: 'Nigerian National Museum',
    country: 'Nigeria',
    snippet: 'The Museum Kitchen is open on weekdays and is a good place to try local Nigerian cuisine.',
    image: 'http://api-images-www.triposo.com/20200405/gAAAAABeql4HFoiiALJo_NfWtLVjEQ4jKhNt-DNePhDO5eesPwReaP4mVjX1QNAofTuLgPAlbgozIHXpPbs6mn3aT9kzzQLI5Nc3Ytmbhr8PhiH4MdtXTekIMwL159IWZT5OxbTTYqfkj0wVStnInoqh8zTGgzNtL3N2LW9TKfeqyRCFhn9vBR3L8TppCyW9s3wbO_9iy06OFezCDwZRXWDTDK9JJoo94DFXuP70UkhEmcSinrcSSI8q6-43A6N6xBzACf87BE2FVHTp0l6GnUH3a1fQnvQNUqurDtUgjNuwZy5Y9YdyTPM='
  },
  {
    name: 'Zuma Rock',
    country: 'Nigeria',
    snippet: 'Zuma Rock is a large monolith, an igneous intrusion composed of gabbro and granodiorite, that is located in Niger State, Nigeria.',
    image: 'http://api-images-www.triposo.com/20200405/gAAAAABeql4H5qhMo3HMV-9Xo398gY6jot6fipIkZ8WzomZL-tNj-7Tf4ljAbsAguqFOYiOrWS2er5jeBsau0UEJQLUEDg_hsHomGEopVSJOy-Wi85Gf5m2metQnF9rdNcafwRsQ6zpvrD_lDYbUrbuX10GZVBdLRP1FYW-qakr-vLByv7ZbtXTkrAG0rxgVBtSuWy47Ru2hF80riCgdpuaiUZMXpQu2fMPSzSfWMXNlZV7otTuEUPxi6g4h0O4_7HG93Ba8v6jXjjpaOPVfrMMslH-5LAzNWL2ZWjId0W9j-IMEZM1-T6s='
  }
]

storiesOf('Gallery', module)
  .add('Gallery / Default Grid', () => {
    const defaultContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '600px'
    }
    const defaultAttractionDiv = {
      width: '600px',
      margin: '0 auto'
    }
    const defaultImageStyle = {}

    return (
      <div style={defaultContainerStyle}>
        {testData.map(attraction => {
          return (
            <div style={defaultAttractionDiv}>
              <img src={attraction.image.url} style={defaultImageStyle} alt='attractionImage' />
              <h3>{attraction.name}</h3>
              <p>{attraction.snippet}</p>
            </div>
          )
        })}
      </div>
    )
  })
  .add('Gallery / Tablet Grid', () => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      width: '600px',
      height: '300px',
      textAlign: 'center',
      justifyContent: 'center'
    }

    const imageStyle = {
      padding: '2px',
      width: '210px',
      height: '150px'
    }

    return (
      <div style={containerStyle}>
        {testData.map(attraction => {
          return (
            <div >
              <img src={attraction.image.url} style={imageStyle} alt='attractionImage' />
              <h3>{attraction.name}</h3>
              <p>{attraction.snippet}</p>
            </div>
          )
        })}
      </div>
    )
  })
  .add('Gallery / Mobile', () => {
    const mobileContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alighItemes: 'center'
    }
    const mobileAttractionDiv = {
      width: '210px'
    }
    const mobileImageStyle = {
      padding: '2px',
      width: '210px',
      height: '150px'
    }

    return (
      <div style={mobileContainerStyle}>
        {testData.map(attraction => {
          return (
            <div style={mobileAttractionDiv}>
              <img src={attraction.image.url} style={mobileImageStyle} alt='attractionImage' />
              <h3>{attraction.name}</h3>
              <p>{attraction.snippet}</p>
            </div>
          )
        })}
      </div>
    )
  })
  .add('Gallery / Component', () => {
    return (
      <Gallery plans={testData2} />
    )
  })