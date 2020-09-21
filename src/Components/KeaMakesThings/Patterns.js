import React from 'react'
import Pattern from './Pattern'
import '../Styles/styles.css'

const Patterns = (props) => {

  const patterns = props.patterns

  return (
    <div>
    <ul>
      {patterns.map((pattern) =>
        <Pattern name={pattern.name} pattern={pattern}/>
      )}
    </ul>
    </div>

  )
}

export default Patterns
