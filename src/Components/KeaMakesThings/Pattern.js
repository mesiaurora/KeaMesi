import React from 'react'

const Pattern = (props) => {

  const name = props.name
  const finishedImage = props.finishedImage
  const patternImage = props.patternImage
  const instructions = props.instructions

  return (
    <div>
      <h3>{name}</h3>
        <img src={finishedImage} alt="finished" width="100px" height="100px" />
        <img src={patternImage} alt="pattern" width="100px" height="100px" />


    </div>

  )
}

export default Pattern
