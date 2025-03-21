import React from 'react'
import logo from '../assets/SpecWizard 1.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-primary-black py-14'>
      <div className='max-sm:max-w-[95%] py-3 max-w-9/10 mx-auto '>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex justify-between items-center text-primary-white text-small w-3/5'>
                    <NavLink to=''>About us</NavLink>
                    <NavLink to=''>Privacy Policy</NavLink>
                    <NavLink to=''>Terms & Conditions</NavLink>
                </div>
            </div>
            <div className='text-center py-8'>
                <a href="" className='text-secondary-gray text-small'>All Rights Reserved</a>
            </div>
      </div>
    </div>
  )
}

export default Footer
