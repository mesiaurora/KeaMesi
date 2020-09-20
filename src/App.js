import React, { useState, useEffect } from 'react'
import KeaGoesZero from './Components/KeaGoesZero/KeaGoesZero'
import KeaMakesThings from './Components/KeaMakesThings/KeaMakesThings'
import KeaWritesCode from './Components/KeaWritesCode/KeaWritesCode'
import AboutKea from './Components/AboutKea'
import NavBar from './Components/PageComponents/NavBar'
import Header from './Components/PageComponents/Header';
import Footer from './Components/PageComponents/Footer'

const App = () => {


  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'



  return (
    <div className='container'>
      <Header />
      <img src="/images/kea-profile.jpeg" alt="pattern" width="20%" height="20%" />
      <br />
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      
      <Footer />
    </div>
  )

}

export default App
