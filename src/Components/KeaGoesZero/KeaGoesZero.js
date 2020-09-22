import React from 'react'
import '../Styles/styles.css'
import Feed from "react-instagram-authless-feed"

const KeaGoesZero = () => {


  return (
    <div>
    <h2>Kea Goes Zero</h2>
    <Feed userName="keagoeszero" className="Feed" classNameLoading="Loading"/>,
    </div>

  )
}

export default KeaGoesZero
