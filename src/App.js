import React, { useState, useEffect, Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import KeaGoesZero from './Components/KeaGoesZero/KeaGoesZero'
import Repurpose from './Components/KeaGoesZero/Repurpose'
import KeaMakesThings from './Components/KeaMakesThings/KeaMakesThings'
import Recipes from './Components/KeaMakesThings/Recipes'
import Patterns from './Components/KeaMakesThings/Patterns'
import KeaWritesCode from './Components/KeaWritesCode/KeaWritesCode'
import AboutKea from './Components/AboutKea'
import CurriculumVitae from './Components/KeaWritesCode/CurriculumVitae'
import AboutKeaMesi from './Components/KeaWritesCode/AboutKeaMesi'
import NavBar from './Components/PageComponents/NavBar'
import Header from './Components/PageComponents/Header';
import Footer from './Components/PageComponents/Footer'
import './Components/Styles/styles.css'

const App = () => {

  return (
    <div className='container'>
      <BrowserRouter>
        <div>
        <NavBar />
        <Switch>
          <Route path="/" component={AboutKea} exact/>
          <Route path="/keagoeszero" component={KeaGoesZero} exact/>
          <Route path="/repurpose" component={Repurpose} exact/>
          <Route path="/keamakesthings" component={KeaMakesThings} exact/>
          <Route path="/patterns" component={Patterns} exact/>
          <Route path="/recipes" component={Recipes} exact/>
          <Route path="/keawritescode" component={KeaWritesCode} exact/>
          <Route path="/curriculumvitae" component={CurriculumVitae} exact/>
          <Route path="/aboutkeamesi" component={AboutKeaMesi} exact/>
        </Switch>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
