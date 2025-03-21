import React from 'react'
import logo from '../assets/Specwizard 1.svg'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const navlinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ]
    return (
        <div className='navbar bg-primary-black border-b border-secondary-gray'>
            <div className='max-sm:max-w-[95%] py-3 max-w-9/10 mx-auto '>
                <div className='flex items-center justify-between'>
                    <Link to='/' className='mt-3'>
                        <img src={logo} alt="logo" className='w-full'/>
                    </Link>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center list-none gap-10'>
                            {
                                navlinks.map((links) => (
                                    <li key={links.name} className=''>
                                        <NavLink to={links.link} className="text-primary-white text-small">
                                            {links.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </div>
                        <div className='flex gap-10 text-small items-center'>
                        <Link to='/login' className='text-primary-white'>Login</Link>
                        <Link to='signup' className='text-primary-white bg-primary-violet px-4 py-1 rounded-full'>SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
