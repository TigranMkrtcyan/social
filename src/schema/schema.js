import * as YUP from 'yup'

const validation = YUP.object().shape({
    password: YUP.string().min(6, 'your password must be more than 6 characters').max(16, 'your password should beless than 16 characters').required('Please write your Password'),
    email: YUP.string().email('Write the correct email').required('Please write your Email'),
})

export default validation 