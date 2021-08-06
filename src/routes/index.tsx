import * as React from 'react'
import { logo } from '../images'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dashboard, CommonInsurance } from '../components/pages'

const Routes: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>Get started</div>
        <Switch>
          <Route exact path="/buy/:routeName" component={CommonInsurance} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
