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
        <Link to='/register'>Sign up</Link>
        <Link to='/weekly'>Create Weekly</Link>
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

        <PrivateRoute path='/weekly' />

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
