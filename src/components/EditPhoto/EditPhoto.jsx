import style from './EditPhoto.module.css'
import { useDispatch } from 'react-redux'
import { changephotoThunk } from '../../store/reducers/profileReducer'
import { logoutAC, logoutThunk } from '../../store/reducers/loginReducer'
import { Navigate, useNavigate } from 'react-router-dom'

const EditPhoto = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const editPhoto = (e) => {
    const file = e.target.files[0]
    dispatch(changephotoThunk(file))
  }

  const out = () => {
    dispatch(logoutAC())
    navigate('/')
  }

  return (
    <div className={style.editPhotoContainer}>
      <input type="file" onChange={editPhoto} />
      <button onClick={() => out()}>Log Out</button>
    </div>
  )
}

export default EditPhoto