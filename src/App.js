import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { Grommet } from 'grommet'
import World from './World/World'
import Continent from './Continent/Continent'
import countries from './data/countries.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      continent: null,
      countriesList: null,
      country: null,
      plans: null
    }

    this.setContinent = this.setContinent.bind(this)
    this.setCountry = this.setCountry.bind(this)
    this.addAttraction = this.addAttraction.bind(this)
  }

  componentDidMount() {
    console.log('Component Did Mount');
    if (!this.state.continent && !this.props.match.isExact) {
      // console.log('No Continent Set');
      // this.setContinent('Africa')
      console.log(this.props);
      
    }

    console.log(this.state);
    
  }

  componentDidUpdate() {
    console.log('Component Did Update');
    console.log(this.state);
  }

  setContinent(newContinent) {
    const continentCountries = countries[newContinent]

    this.setState({
      continent: newContinent,
      countriesList: continentCountries
    })
  }

  setCountry(newCountry) {
    this.setState({
      country: newCountry
    })
  }

  addAttraction(attraction, country) {
    console.log('Attraction Added!');

    if (!this.state.plans) {
      const savedAttraction = {}
      savedAttraction.name = attraction.name
      savedAttraction.image = attraction.images[0].sizes.medium.url
      savedAttraction.snippet = attraction.snippet

      // Attractions (array)
      const attractionsArr = []
      attractionsArr[0] = savedAttraction

      // Countries (object)
      const countriesObj = {}
      countriesObj[country] = attractionsArr

      const plans = {}
      plans[this.state.continent] = countriesObj

      this.setState({
        plans: plans
      })

      console.log(this.state.plans);
      
    }
  }

  render() {

    return (
      <div className="App">
      <Grommet>
        <header className="">
            <Link to='/'><h1 id='sitename'>7Wonders</h1></Link>
            {this.state.continent && <h1>| {this.state.continent}</h1>}
          <h2>Plans</h2>
        </header>
        <main>
          <World setContinent={this.setContinent}/>
          <Switch>
            <Route path='/:continent'>
                <Continent addAttraction={this.addAttraction} setCountry={this.setCountry} countries={this.state.countriesList} />
            </Route>
          </Switch>
        </main>
      </Grommet>
    </div>
    )
  }
}

export default withRouter(App);
