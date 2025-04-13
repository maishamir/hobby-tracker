import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>Oops you wandered into the wrong glade! Back to the <span><Link to="/">Home page</Link>?</span></h1>
    </div>
  )
}

export default Error