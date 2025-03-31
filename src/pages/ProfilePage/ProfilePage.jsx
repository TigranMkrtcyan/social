import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getprofileThunk } from '../../store/reducers/profileReducer'

import style from './ProfilePage.module.css'
import EditPhoto from '../../components/EditPhoto/EditPhoto'

const ProfilePage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { profile, loading } = useSelector(store => store?.profileReducer)
  const { userId } = useSelector(store => store?.loginReducer)

  const { fetching } = useSelector(store => store?.usersReducer)


  useEffect(() => {
    if (id) {
      if (!profile || profile?.userId !== Number(id)) {
        dispatch(getprofileThunk(id))
      }
    }
  }, [id, profile, dispatch])

  if (fetching || loading) {
    return <div className={style?.loading}>Загрузка...</div>
  }

  const isLogin = userId === id

  console.log(isLogin);
  
  return (
    <div className={style.profileContainer}>
    <div className={style.profileCard}>
      <div className={style.profileHeader}>
        <h1 className={style.profileName}>{profile?.fullName}</h1>
      </div>
      <div className={style.profileContent}>
        <div className={style.profileImageContainer}>
          <img
            className={style.profileImage}
            src={profile?.photos?.large || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"}
            alt="Profile"
          />
        </div>
        <div className={style.profileInfo}>
          <p className={style.profileStatus}>{profile?.status || "No status"}</p>
          {profile?.lookingForAJob && (
            <p className={style.lookingForJob}>Looking for a job</p>
          )}
          {profile?.lookingForAJobDescription && (
            <div className={style.jobDescription}>
              <h3>Job Description:</h3>
              <p>{profile.lookingForAJobDescription}</p>
            </div>
          )}
          {profile?.aboutMe && (
            <div className={style.aboutMe}>
              <h3>About me:</h3>
              <p>{profile.aboutMe}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    {isLogin && <EditPhoto />}
  </div>
  )
}

export default ProfilePage