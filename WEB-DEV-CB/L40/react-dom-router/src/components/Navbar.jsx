import React from 'react'
import { Link , NavLink} from 'react-router-dom';
const Navbar = () => {
     const btnGroupCSS = {
    // backgroundColor: "blue",
    // border: '1px solid black',
    display: "flex",
    justifyContent: "space-evenly",
  };
  return (
    <div style={btnGroupCSS}>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/about">About</NavLink>
      <NavLink className="navlink" to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar
