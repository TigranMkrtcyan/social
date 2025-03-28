import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../store/reducers/loginReducer'
import { useNavigate } from 'react-router-dom'

import style from './Login.module.css'

const Login = ({valid}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userId } = useSelector(store => store.loginReducer)

    const handleLogin = ({ email, password }) => {
        dispatch(loginThunk(email, password))
        console.log(userId);
        if (userId) {
            navigate(`/profile/${userId}`)
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}

                validationSchema={valid}

                onSubmit={(value) => handleLogin(value)}
            >
                <Form>
                    <div className={style.formGroup}>
                        <Field name="email" placeholder="Email" className={style.inputField} />
                        <ErrorMessage name='email'/>
                        <Field name="password" placeholder="Password" className={style.inputField} />
                        <ErrorMessage name='password'/>
                        <button type='submit' className={style.submitButton}>Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Login