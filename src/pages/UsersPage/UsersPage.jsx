import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/User/User'
import style from './UsersPage.module.css'
import { useState, useEffect, useCallback } from 'react'
import { getUserTH, minusSize, plusSize } from '../../store/reducers/usersReducer'
import { NavLink } from 'react-router-dom'

const UsersPage = () => {
    const dispatch = useDispatch()
    const { users, size } = useSelector(store => store.usersReducer)

    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([])

    const handlePage = useCallback((page) => {
        if (page !== currentPage) {
            dispatch(getUserTH(page))
            setCurrentPage(page)
        }
    }, [dispatch, currentPage])

    const plus = useCallback(() => {
        dispatch(plusSize(size + 60))
    }, [dispatch, size])

    const minus = useCallback(() => {
        if (size > 0) {
            dispatch(minusSize(size - 60))
        }
    }, [dispatch, size])

    useEffect(() => {
        if (users.totalCount && pages.length === 0) {
            const totalPages = Math.ceil(users.totalCount / 100)
            setPages(new Array(totalPages).fill(null).map((_, ind) => ind + 1))
        }
    }, [users.totalCount, pages.length])

    useEffect(() => {
        if (users.items.length === 0) {
            dispatch(getUserTH(1))
        }
    }, [dispatch, users.items.length])

    return (
        <div className={style.userpage}>
            <div className={style.slider}>
                <div className={style.btns} style={{ left: `-${size}px` }} >
                    {pages.map((el) => (
                        <button
                            key={el}
                            onClick={() => handlePage(el)}
                            className={style.btn}
                        >
                            {el}
                        </button>
                    ))}
                </div>
            </div>
            <div className={style.arows}>
                <button className={style.btn} onClick={minus}>&#8592;</button>
                <button className={style.btn} onClick={plus}>&#8594;</button>
            </div>
            <div className={style.users}>
                {users.items.map((user) => (
                    <NavLink 
                        key={user.id} 
                        to={`/profile/${user.id}`}
                    >
                        <User user={user} />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default UsersPage