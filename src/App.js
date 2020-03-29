import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getFc } from './actions/actions'

import Header from './components/header'
import FcInfo from './components/FcInfo'
import Footer from './components/Footer'

import './App.css';

function App(props) {

  useEffect(() => {
    props.getFc()
  }, [])

  return (
    <div className="App">
      {props && <Header Estate={props.fc.Estate} />}
      {props && <FcInfo fc={props.fc} />}
      {props && <Footer fc={props.fc} estate={props.fc.Estate} />}
    </div>
  );
}

const mstp = state => {
  return {
    fc: state.fc
  }
}

export default connect(mstp, { getFc })(App)
