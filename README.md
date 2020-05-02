# 7Wonders

<p align="center">
  <img src="https://media.giphy.com/media/TZf4ZyXb0lXXi/source.gif" width="80%"/>
</p>

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

<br>

### Overview

**7Wonders** is a tourism site for planning trips to different continents. Users are given the choice between the 7 continents and will be shown a list countries within the choosen continent. From there, they will be able to choose one of the countries. Each country shows a list of top attractions. User chooses an attraction that will be saved as their dream destination for the continent. It will be saved in the form of a digital postcard.

<br>

### Wireframes

![Desktop](https://i.imgur.com/jkgXzxQm.png)

- Desktop 

![Tablet](https://i.imgur.com/sXRCDDYm.png)

- Tablet 

![Mobile](https://i.imgur.com/KWLTSlrm.png)

- Mobile 

<br>

### MVP

#### Goals

- Retrieve and display data from Triposo API
- Make use of react router's Route
- Make use of react's functional and class Components

<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | For navigating the app |
| Axios | Used to make GET request to API |
|   Grommet   | Components used for UI Design |

<br>

#### Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Triposo API |      yes      | https://www.triposo.com/api/documentation/20200405/ | https://www.triposo.com/api/20200405/poi.json?account=VY4307NY&token=xmav4vo2mfqoxdgvc3esq0b05f1t8bh8&tag_labels=topattractions&location_id=Tokyo |

> Sample Query

```
{
  "id": "N__1420783223",
  "name": "Tokyo National Museum",
  "coordinates": {
    "latitude": 35.71900020292198,
    "longitude": 139.77594927269956
  },
  "score": 9.88992186443754,
  "images": [
    {
      "source_id": "wikipedia",
      "source_url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tokyo_National_Museum%2C_Honkan_2010.jpg",
      "owner": "Wiiii",
      "owner_url": "https://commons.wikimedia.org/wiki/File:Tokyo_National_Museum,_Honkan_2010.jpg",
      "license": "CC BY-SA 3.0",
      "caption": "image"
    },
    "sizes": {
      "original": {
          "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tokyo_National_Museum%2C_Honkan_2010.jpg",
          "width": 3476,
          "height": 2307,
          "bytes": 4074675,
          "format": "jpg"
      }
    }
    ],
  "snippet": "JR lines to Ueno, Ueno-kōen exit.",
  "location_id": "Tokyo",
  "topattractions_score": 9.88992186443754
}
```

<br>

#### Component Hierarchy

```
src
|__ App.js
|__ index.js
|__ data
    |__ countries.json
|__ World/
    |__ World.jsx
    |__ World.css
|__ Postcard/
    |__ Postcard.jsx
    |__ Postcard.css
|__ Attraction/
    |__ Attraction.jsx
    |__ Attraction.css
|__ Footer/
    |__ Footer.jsx
    |__ Footer.css
|__ Country/
    |__ Country.jsx
    |__ Country.css
|__ Gallery/
    |__ Gallery.jsx
    |__ Gallery.css
```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will contain the home link as the site's name._               |
|  Attraction  | functional |   n   |   y   | _Shows Top Attractions for selected country_        |
|   Gallery    |   class    |   n   |   y  | _The gallery will render the postcards using flexbox._      |
| World | functional |   n   |   y   | _The cards will be customized cards for each continent with the choosen attractions_  |
|    Continent    | functional |   y   |   y   | _Displays a list of countries_ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    App    | Class |   y  |   n   | Used react class for App component |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic React Setup    |    H     |     3 hrs      |      3hrs    |    3hrs  |
| Retrieve Data From API |    H     |     5 hrs      |      5hrs   |    5hrs    |
| World Component |    H     |     6 hrs      |   9hrs      |    9hrs    |
| Gallery Components |    H     |     5 hrs      |     5hrs    |    5hrs    |
| Continent Component |    H     |     5 hrs      |     9hrs    |    9hrs    |
| Attraction Component |    H     |     4 hrs      |     8hrs    |     8hrs   |
| CSS Styling / Flexbox |    H     |     6 hrs      |     8hrs    |     8hrs   |
| TOTAL               |          |     40 hrs      |      47hrs    |     47hrs     |

<br>

#### Helper Functions

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| N/A | N/A |

<br>

### Post-MVP

- _Add Calendar Component

<br>

***

## Project Delivery

### Code Showcase

```
useEffect(() => {
    if (selectedCountry) {
      const apiCall = async () => {
        const data = await axios.get(`https://www.triposo.com/api/20200405/poi.json?account=VY4307NY&token=xmav4vo2mfqoxdgvc3esq0b05f1t8bh8&tag_labels=topattractions&location_id=${selectedCountry}`)

        setAttractions(data.data.results)
      }
      apiCall()
    }
  }, [selectedCountry])
```

### Code Issues & Resolutions

> No issues at the moment.
