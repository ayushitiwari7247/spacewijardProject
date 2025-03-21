import React from 'react'

const Loginleft = () => {
    return (
        <div>
            <div className='bg-secondary-black h-full'>
                <div className='w-2/4 mx-auto mt-14'>
                    {/* heading */}
                    <div className='w-50'>
                        <Link to='/' className='mt-3'>
                            <img src={logo} alt="logo" className='w-full' />
                        </Link>
                    </div>
                    {/* loging form */}
                    <div className='flex flex-col gap-3 mt-[50%]'>
                        <h2 className='text-primary-white text-semi-large font-semibold'>Log In</h2>
                        <p className='text-small text-primary-white font-bold'>Welcome back!</p>
                        <div className='flex flex-col gap-4 mt-4'>
                            <input type="email" placeholder='email' className='text-secondary-gray w-full pl-4 py-2 rounded-xl bg-primary-black' />
                            <button className='text-primary-white w-full pl-4 py-2 rounded-xl bg-primary-blue'> Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginleft
