import React from 'react'
import icon_19 from '../assets/19.svg'
import logo from '../assets/Specwizard 1.svg'
import spaceman from '../assets/speaceman.svg'
import error_bg from '../assets/404.svg'
import ecllipe from '../assets/ecllipecurv.svg'

const Error = () => {
    return (
        <section className='errorpages bg-primary-black h-screen'>
            {/* heading nav */}
            <div className='navbar  border-b border-secondary-gray'>
                <div className='max-sm:max-w-[95%] py-3 max-w-9/10 mx-auto '>
                    <div className='flex items-center justify-between'>
                        <div className='mt-3'>
                            <img src={logo} alt="logo" className='w-full' />
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className='text-small text-primary-white'>Hello Raju</p>
                            <div className='w-8'>
                                <img src={icon_19} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* body content */}
            <div className='max-sm:max-w-[95%] m-36 max-w-9/10 mx-auto '>
                <div className='w-2/4 mx-auto bg-no-repeat bg-top'style={{backgroundImage:`url(${error_bg})`}}>
                    <div className='w-[250px] m-auto'>
                        <img src={spaceman} alt="spaceman" className='object-center w-full' />
                    </div>
                    <div className='flex flex-col gap-4'>
                    <p className='text-primary-white text-center text-semi-large font-semibold'>Oops! You travelled to space.</p>
                    <button className='cursor-pointer text-primary-white w-3/4 mx-auto bg-primary-blue py-2 text-center rounded-2xl'>Pull Me Back</button>
                    </div>
                </div>
                <div className=' w-2/4 absolute left-[25%] bottom-0'>
                    <img src={ecllipe} alt="" className='w-full' />
                </div>
            </div>
          
        </section>
    )
}

export default Error
