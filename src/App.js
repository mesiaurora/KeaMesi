import React, { useState, useEffect, Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import KeaGoesZero from './Components/KeaGoesZero/KeaGoesZero'
import Repurpose from './Components/KeaGoesZero/Repurpose'
import KeaMakesThings from './Components/KeaMakesThings/KeaMakesThings'
import Recipes from './Components/KeaMakesThings/Recipes'
import Patterns from './Components/KeaMakesThings/Patterns'
import KeaWritesCode from './Components/KeaWritesCode/KeaWritesCode'
import AboutKea from './Components/AboutKea'
import CV from './Components/KeaWritesCode/CV'
import NavBar from './Components/PageComponents/NavBar'
import Header from './Components/PageComponents/Header';
import Footer from './Components/PageComponents/Footer'
import './Components/Styles/styles.css'

const App = () => {

  return (
    <div className='container'>

      <BrowserRouter>
        <div>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/AboutKea" component={AboutKea} exact/>
          <Route path="/KeaGoesZero" component={KeaGoesZero} exact/>
          <Route path="/Repurpose" component={Repurpose} exact/>
          <Route path="/Components/KeaMakesThings/KeaMakesThings" component={KeaMakesThings} exact/>
          <Route path="/Components/KeaMakesThings/Patterns" component={Patterns} exact/>
          <Route path="/Components/KeaMakesThings/Recipes" component={Recipes} exact/>
          <Route path="/Components/KeaWritesCode/KeaWritesCode" component={KeaWritesCode} exact/>
          <Route path="/CV" component={CV} exact/>
        </Switch>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
