import React from 'react'
import './Styles/styles.css'

const AboutKea = () => {

  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


  return (
    <div>
    <img src="/images/keamesi_traced.png" alt="traced" width="100px" height="100px" />
      <h1>THIS IS h1</h1>
      <h2>THIS IS h2</h2>
      <h3>THIS IS h3</h3>
      <h4>THIS IS h4</h4>

      {lorem}

    </div>

  )
}

export default AboutKea
