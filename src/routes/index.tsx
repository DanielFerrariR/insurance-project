import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import * as React from 'react'
import { logo } from 'src/images'
import './index.css'
import { Dashboard, CommonInsurance } from 'src/components/pages'

const Routes: React.FC = () => (
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
)

export default hot(Routes)
