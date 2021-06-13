import './App.css';
import Header from './components/Header/Header';
import Colouriser from './components/Colouriser/Colouriser';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Colouriser/>
        <Information/>
        <Footer/>
      </div>
    )
  }
}

export default App

