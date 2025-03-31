import React from 'react'
import Login from '../../components/Login/Login'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const HomePage = () => {
  const {userId , user} = useSelector(store => store.loginReducer)
  
  if(userId) {
    return <Navigate to={`/profile/${userId}`}/> 
  } 

  return (
    <div>
        <Login />
    </div>
  )
}

export default HomePage