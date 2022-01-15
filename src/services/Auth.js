import axios from "axios"
import API_URL from '../config/constants';

const Auth = {
    Register: (username, email, password, phone, type) => {
        console.log('phone', phone)
        return axios.post(`${API_URL}/user/auth/register`,
            {
                username,
                email,
                password,
                phone: {
                    code: "+92",
                    number: phone
                },
                loginType: "local",
                type
            })
    },
    Login: (email, password) => {
        console.log('email===>', email, 'password===>', password)
        return axios.post(`${API_URL}/user/auth/login`,
            {
                email,
                password,
                loginType: "local"
            })

    },
    ForgotPassword: (email) => {
        //console.log('email',email)
        return axios.post(`${API_URL}/user/auth/forget-password`,
            {
                email
            })
    },
    ForgotPasswordCode: (digit) => {
        console.log('digit form auth', digit)
        return axios.post(`${API_URL}/user/auth/verifyOTP`,
            {
                email: "zeekhan7872@gmail.com",
                otp: digit
            })
    },
    UpdatePassword: (password) => {
        console.log('digit form password', password)
        return axios.post(`${API_URL}/user/auth/reset-password`,
            {
                email: "zeekhan7872@gmail.com",
                password
            })
    },
}
export default Auth;