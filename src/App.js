import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grommet } from 'grommet'
import World from './World/World'
import Continent from './Continent/Continent'
import countries from './data/countries.js'

// function App() {
//   console.log(countries)
//   return (
//     <div className="App">
//       <Grommet>
//         <header className="">
//           <h1 id='sitename'>7Wonders</h1>
//           <h1>|</h1>
//           <h2>Plans</h2>
//         </header>
//         <main>
//           <Switch>
//             <Route exact path='/'>
//               <World />
//             </Route>
//             <Route path='/:continent'>
//               <Continent countries={null} />
//             </Route>
//           </Switch>
//         </main>
//       </Grommet>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      country: null,
      plans: null
    }
  }

  render() {
    return null
  }
}

export default App;
