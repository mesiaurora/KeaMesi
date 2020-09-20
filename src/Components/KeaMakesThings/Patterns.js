import React from 'react'

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
