import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={style.header}>
      <NavLink to={'/'}>
      <span>
        <h1>
          Home
        </h1>
      </span>
      </NavLink>
      <NavLink to={'/users'}>
        <span>
        <h1>
          Users
        </h1>
        </span>
      </NavLink>
    </div>
  )
}

export default Header