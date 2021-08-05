import * as React from 'react'
import { logo } from '../images'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Dashboard,
  CarInsurance,
  HomeInsurance,
  LifeInsurance,
} from '../components/pages'

const Routes: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/buy/life_insurance" component={LifeInsurance} />
          <Route exact path="/buy/home_insurance" component={HomeInsurance} />
          <Route exact path="/buy/car_insurance" component={CarInsurance} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
