import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/User/User'

import style from './UsersPage.module.css'
import { useState, useEffect } from 'react'
import { getUserTH, minusSize, plusSize } from '../../store/reducers/usersReducer'

const UsersPage = () => {
    const dispatch = useDispatch()
    const { users, size } = useSelector(store => store.usersReducer)

    const [pages, setPages] = useState([])

    const handlepage = (page) => {
        dispatch(getUserTH(page))
    }

    const plus = () => {
        dispatch(plusSize(size + 60))
    }

    const minus = (num) => {
        if (size == 0) {
            size
        } else {
            dispatch(minusSize(size - num))
        } 
    }

    useEffect(() => {
        if (users.totalCount) {
            const totalPages = Math.ceil(users.totalCount / 100)
            setPages(new Array(totalPages)
                .fill(null)
                .map((_, ind) => ind + 1))
        }
    }, [users.totalCount])

    return (
        <div className={style.userpage}>
            <div className={style.slider}>
                <div className={style.btns} style={{ left: `-${size}px` }} >
                    {pages.map((el) => (
                        <button
                            key={el}
                            onClick={() => handlepage(el)}
                            className={style.btn}
                        >
                            {el}
                        </button>
                    ))}
                </div>
            </div>
            <div className={style.arows}>
                <button className={style.btn} onClick={() => minus(60)}>&#8592;</button>
                <button className={style.btn} onClick={() => plus()}>&#8594;</button>
            </div >
    <div className={style.users}>
        {users.items.map((user) => (
            <User key={user.id} user={user} />
        ))}
    </div>
        </div >
    )
}

export default UsersPage