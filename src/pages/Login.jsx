import React from 'react'

import LoginRight from '../component/LoginRight'
import Loginleft from '../component/Loginleft'
import RegisterForm from '../component/RegisterForm'
import Checkemail from '../component/Checkemail'
import Resetpassword from '../component/Resetpassword'
import MailError from '../component/MailError'
import Aboutus from './Aboutus'

const Login = () => {
    return (
        <section className='bg-primary-black h-full'>
            {/* <div className='grid grid-cols-2'> */}
                {/* left part */}
                    {/* <Loginleft/> */}
                    {/* <RegisterForm/> */}
                    {/* <Checkemail/> */}
                    {/* <Resetpassword/> */}
                    {/* <MailError/> */}
                {/* right part */}   
                    {/* <LoginRight/> */}

                    {/* Aboutus */}
                    <Aboutus/>
            {/* </div> */}
        </section>
    )
}

export default Login
