import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
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
  }

  // componentDidMount() {
  //   console.log('Mounting App Component');
    
  //   if (this.state.continent) {
  //     const continentCountries = countries[this.state.continent]
  //     this.setState({
  //       countriesList: continentCountries
  //     })
  //     console.log(this.state.countriesList);
  //   }
  // }

  setContinent(continent) {
    console.log('Setting Continent:', continent)
    // this.props.history.push(`/${this.state.continent}`)
    // console.log(this)

    const continentCountries = countries[continent]

    this.setState({
      continent: continent,
      countriesList: continentCountries
    })
    console.log('Set Continent');
    
  }

  render() {
    // if (this.state.continent) {
    //   return <Redirect to={`/${this.state.continent}`} />
    // }

    return (
      <div className="App">
      <Grommet>
        <header className="">
          <h1 id='sitename'>7Wonders</h1>
            <h1>| {this.state.continent}</h1>
          <h2>Plans</h2>
        </header>
        <main>
          <World setContinent={this.setContinent}/>
          <Switch>
            {/* <Route exact path='/'>
              <World setContinent={this.setContinent}/>
            </Route> */}
            <Route path='/:continent/'>
                <Continent countries={this.state.countriesList} />
            </Route>
          </Switch>
        </main>
      </Grommet>
    </div>
    )
  }
}

export default App;
