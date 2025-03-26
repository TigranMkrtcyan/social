import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserTH } from './store/reducers/usersReducer'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import UsersPage from './pages/UsersPage/UsersPage'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const { fetching } = useSelector(store => store.usersReducer)

  useEffect(() => {
    dispatch(getUserTH())
  }, [dispatch])
  
  return (
    <div>
      {fetching ? <div className='loading'></div> :
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/users' element={<UsersPage />} />
          </Route>
        </Routes>}
    </div >
  )
}

export default App
