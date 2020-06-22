import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import { Grommet } from 'grommet'
import World from './World/World'
// import Continent from './Continent/Continent'
import AltContinent from './Continent/AltContinent'
import Gallery from './Gallery/Gallery'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import countries from './data/countries.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      continent: null,
      countriesList: null,
      country: null,
      plans: null,
      locations: null
    }

    this.setContinent = this.setContinent.bind(this)
    this.setCountry = this.setCountry.bind(this)
    // this.addAttraction = this.addAttraction.bind(this)
    this.addAltAttraction = this.addAltAttraction.bind(this)
    this.removeAttraction = this.removeAttraction.bind(this)
    this.setLocations = this.setLocations.bind(this)
  }

  componentDidUpdate() {
    let currentRoute = this.props.location.pathname

    if (this.state.continent && (currentRoute === '/' || currentRoute === '/plans')) {
      this.setState({
        continent: null
      })
    }
  }

  setContinent(newContinent) {
    const continentCountries = countries[newContinent]

    this.setState({
      continent: newContinent,
      countriesList: continentCountries
    })
  }

 addAttraction(attraction, country) {
    const savedAttraction = {}
    savedAttraction.name = attraction.name
    savedAttraction.image = attraction.images[0].sizes.medium.url
    savedAttraction.snippet = attraction.snippet
    savedAttraction.country = country
    savedAttraction.continent = this.state.continent

    if (this.state.plans) {
      let objectIncluded = this.state.plans.includes(savedAttraction)
      if (!objectIncluded) {
        let newPlanArray = this.state.plans.concat(savedAttraction)
        this.setState({
          plans: newPlanArray
        })
      }
    } else {
      let plansArray = []
      plansArray.push(savedAttraction)
      this.setState({
        plans: plansArray
      })
    }
  }

  addAltAttraction(attraction, country) {
    const savedAttraction = {}
    savedAttraction.name = attraction.name
    savedAttraction.image = attraction.preview.source
    savedAttraction.snippet = attraction.wikipedia_extracts.text
    savedAttraction.country = country
    savedAttraction.continent = this.state.continent

    if (this.state.plans) {
      let objectIncluded = this.state.plans.includes(savedAttraction)
      if (!objectIncluded) {
        let newPlanArray = this.state.plans.concat(savedAttraction)
        this.setState({
          plans: newPlanArray
        })
      }
    } else {
      let plansArray = []
      plansArray.push(savedAttraction)
      this.setState({
        plans: plansArray
      })
    }
  }

  removeAttraction(plan) {
    let prevPlans = this.state.plans
    let idx = prevPlans.indexOf(plan)
    prevPlans.splice(idx, 1)
    
    this.setState({
      plans: prevPlans
    })
  }

  setLocations(locations) {
    this.setState({
      locations: locations
    })
  }

  render() {
    return (
      <div className="App">
      <Grommet>
        <Header continent={this.state.continent}/>
        <main>
            <World setContinent={this.setContinent} locations={this.state.locations}/>

            <Switch>
            <Route exact path='/plans'>
                <Gallery plans={this.state.plans} removeAttraction={this.removeAttraction}/>
            </Route>
            <Route path='/:continent'>
                <AltContinent
                  addAltAttraction={this.addAltAttraction}
                  setCountry={this.setCountry}

                  countries={this.state.countriesList}
                  setContinent={this.setContinent}
                  continent={this.state.continent}
                  setLocations={this.setLocations}
                />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Grommet>
    </div>
    )
  }
}

export default withRouter(App);
