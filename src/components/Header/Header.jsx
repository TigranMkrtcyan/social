import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import style from './Header.module.css'

const Header = () => {
  const { userId, user } = useSelector(store => store.loginReducer)
   
  return (
    <div className={style.header}>
      <NavLink to={'/users'}>
        <h1>
          Users
        </h1>
      </NavLink>
      <NavLink to={'/'}>
        {
          userId ? <div className={style.user}>
            <h1>{user?.fullName}</h1>
            <img
              className={style?.userImage}
              src={user?.photos?.large || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"}
            />
          </div>
            : <h1>Login</h1>
        }
      </NavLink>
    </div>
  )
}

export default Header