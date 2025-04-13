import React from 'react'
import { Link } from 'react-router-dom'

function Knitting() {
  return (
    <div className='knitting'>
      <Link to="/">⬅ Back to Home</Link>
      <h1 className="knitting__title">
        🧶 Knitting Projects At a Glance 🧶
      </h1>
    </div>
  )
}

export default Knitting

