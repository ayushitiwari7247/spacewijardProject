import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Specwizard 1.svg'
import linkedinicon from '../assets/linked.svg'
import googleicon from '../assets/google_icon.svg'
import error_icon from '../assets/alert-icon.svg'
const Loginleft = () => {
    return (
        <div className='bg-secondary-black'>
            <div className='w-2/4 mx-auto py-14'>
                {/* heading */}
                <div className='w-50'>
                    <Link to='/' className='mt-3'>
                        <img src={logo} alt="logo" className='w-full' />
                    </Link>
                </div>
                {/* loging form */}
                <div className='flex flex-col gap-3 mt-[45%]'>
                    <h2 className='text-primary-white text-semi-large font-semibold'>Log In</h2>
                    <p className='text-small text-primary-white font-bold'>Welcome back!</p>
                    <div className='flex flex-col gap-6 mt-4'>
                        <div className='flex gap-3 items-center text-danger border border-danger py-4 px-6 rounded-xl text-semi-small'><img src={error_icon} alt=" error notification" /><p>Oops, your email or password is incorrect. Please try again or contact support.</p></div>
                        <div>
                            <input type="email" placeholder='E-mail' className='text-secondary-gray w-full pl-4 py-2.5 rounded-xl bg-primary-black border border-primary-black' />
                             <label htmlFor="" className='text-semi-small text-danger mt-4 ml-3'>Email must contain the “@” symbol.</label>
                        </div>
                        <input type="email" placeholder='Password' className='text-secondary-gray w-full pl-4 py-2.5 rounded-xl bg-primary-black border border-primary-black' />
                        <button className='text-primary-white w-full pl-4 py-2 rounded-xl bg-primary-blue'> Login</button>
                    </div>
                    <Link className='text-text-blue font-semibold text-center'> Forgot your Password </Link>
                    <div className='text-secondary-gray text-center py-2'>
                        OR
                    </div>

                    <div className='grid grid-cols-2 gap-3'>

                        <Link className='flex gap-2 items-center border border-secondary-gray rounded-xl py-2 px-4'>
                            <div className='w-8'>
                                <img src={linkedinicon} alt="" className='w-full' />
                            </div>
                            <p className='text-primary-white'>LinkedIn</p>
                        </Link>
                        
                        <Link className='flex gap-2 items-center border border-secondary-gray rounded-xl py-2 px-4'>
                            <div className='w-8'>
                                <img src={googleicon} alt="" className='w-full' />
                            </div>
                            <p className='text-primary-white'>Google</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginleft
