import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link to="/">  <h1 className="text">Navbar Page</h1></Link>
    </div>
  )
}

export default Navbar
