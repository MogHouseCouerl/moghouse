import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getFc } from './actions/actions'
import { Link, Switch, Route } from 'react-router-dom'

import FreeCompany from './components/FreeCompany'
import Rules from './components/Rules'
import Login from './components/Login'
import Register from './components/register'
import PrivateRoute from './components/PrivateRoute'
import CharacterPage from './components/CharacterPage'
import WeeklyEvents from './components/events/weeklyEvents'
import WeeklyEventForm from './components/events/WeeklyEventForm'

import './App.css';

function App(props) {

  useEffect(() => {
    props.getFc()
  }, [])

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/rules'>Rules</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/weekly'>Weekly events</Link>
        {localStorage.getItem('token') && <Link to='/weeklyform'>Create weekly event</Link>}
      </nav>
      <img id='banner' src={process.env.PUBLIC_URL + '/images/imgbanner.jpeg'} alt='a group picture of the mog house members' />
      <Switch>

        <Route exact path='/'>
          {props && <FreeCompany props={props} />}
        </Route>

        <Route path='/rules'>
          <Rules />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/characterpage'>
          <CharacterPage />
        </Route>

        <PrivateRoute path='/weeklyform' component={WeeklyEventForm} />

        <Route path='/weekly'>
          <WeeklyEvents />
        </Route>

      </Switch>
    </div>
  );
}

const mstp = state => {
  return {
    fc: state.fc
  }
}

export default connect(mstp, { getFc })(App)
