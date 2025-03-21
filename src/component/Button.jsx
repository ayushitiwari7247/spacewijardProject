import React from 'react'

const Button = () => {
  return (
    <div className='flex gap-4'>
       <button className='px-4 py-2 cursor-pointer text-primary-white font-semibold bg-primary-blue border-2 border-text-blue rounded-full'>Get Started</button>
       <button className='px-4 py-2 cursor-pointer text-primary-white font-semibold border border-secondary-gray rounded-full'>Watch a Demo</button>
    </div>
  )
}

export default Button
