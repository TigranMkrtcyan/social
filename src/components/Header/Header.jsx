import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to={`/users`}>
      <h1>
        Users
      </h1>
      </NavLink>
    </div>
  )
}

export default Header