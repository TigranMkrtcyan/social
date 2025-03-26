import style from './User.module.css'

const User = ({user}) => {

  return (
    <div className={style.user}>
        <img className={style.img} src={user.photos.large === null ? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" :  user.photos.large } alt="user" />
        <h2>{user.name}</h2>
    </div>
  )
}

export default User