import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import screenshort from'../assets/screenshort.svg'
const Contact = () => {
    return (
        <>
            <Navbar />
            <section className='contactsection bg-primary-black'>
                <div className='w-full sm:w-7/8 lg:w-[856px] mx-auto pt-6'>
                    {/* heading part */}
                    <h2 className='font-bold text-semi-large text-primary-white text-center'>Send Us a Message</h2>

                    <form action="" className=''>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>First Name</label>
                                <input type="text" name="" id="" placeholder='First Name' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>Last Name</label>
                                <input type="text" name="" id="" placeholder='Last Name' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>Phone Number</label>
                                <input type="number" name="" id="" placeholder='Phone Number' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>e-mail</label>
                                <input type="email" name="" id="" placeholder='e-mail' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 mt-3'>
                            <label htmlFor="message" className="text-primary-white font-semibold">message</label>
                            <textarea id="message" rows="4" className=" bg-primary-white rounded-2xl p-2.5 w-full " placeholder="Massage"></textarea>
                        </div>
                        <div>
                            <button className='w-full  rounded-2xl mt-5 py-2 cursor-pointer text-primary-white bg-primary-blue'>Send Massage</button>
                        </div>
                    </form>
                </div>

                <div className='w-full sm:w-7/8 lg:w-[856px] mx-auto py-6'>
                    {/* heading part */}
                    <h2 className='font-bold text-semi-large text-primary-white text-center'>Want to report a <span className='text-primary-violet'>bug?</span></h2>

                    <form action="" className='my-6'>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>First Name</label>
                                <input type="text" name="" id="" placeholder='First Name' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>Last Name</label>
                                <input type="text" name="" id="" placeholder='Last Name' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>Phone Number</label>
                                <input type="number" name="" id="" placeholder='Phone Number' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>e-mail</label>
                                <input type="email" name="" id="" placeholder='e-mail' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-primary-white font-semibold'>Bug Type</label>
                                <input type="email" name="" id="" placeholder='design error' className='bg-primary-white w-full pl-4 py-2 rounded-2xl' />
                            </div>
                            <div className='mt-9'>
                                <button className='flex w-full bg-primary-violet py-2 rounded-2xl gap-3 items-center justify-center'>
                                    <img src={screenshort} alt="" />
                                    <span className='text-primary-white'>Upload Screenshort</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 mt-3'>
                            <label htmlFor="message" className="text-primary-white font-semibold">message</label>
                            <textarea id="message" rows="4" className=" bg-primary-white rounded-2xl p-2.5 w-full " placeholder="Massage"></textarea>
                        </div>
                        <div>
                            <button className='w-full rounded-2xl mt-5 py-2 cursor-pointer text-primary-white bg-primary-blue'>Report Bug</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact
