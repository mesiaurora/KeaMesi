import React from 'react'
import '../Styles/styles.css'
import Feed from "react-instagram-authless-feed"

const KeaMakesThings = () => {


  return (
    <div>
    <h2>Kea Makes THings</h2>
    <Feed userName="keamakesthings" className="Feed" classNameLoading="Loading"/>,
    </div>

  )
}

export default KeaMakesThings
