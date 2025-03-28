import React from 'react'
import Login from '../../components/Login/Login'

const HomePage = ({valid}) => {
  return (
    <div>
        <Login valid={valid}/>
    </div>
  )
}

export default HomePage