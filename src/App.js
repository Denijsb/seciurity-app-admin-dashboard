import React, { Component } from 'react';

import './App.css';
import Dashboard from './Dashboard.js';
import Login from './Login.js';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import Units from './Units';
import Clients from './Clients';
import Incidents from './Incidents';

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/Login" component={Login}/>
              <Route path="/Dashboard" component={Dashboard}/>
              <Route path="/Units" component={Units}/>
              <Route path="/Clients" component={Clients}/>
              <Route path="/Incidents" component={Incidents}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;
