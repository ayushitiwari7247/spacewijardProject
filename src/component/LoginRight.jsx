import React from 'react'
import rightbglogin from '../assets/LoginRightbg.svg'
function LoginRight() {
  return (
    <div className='bg-primary-black'>
        <div className='w-3/4 mx-auto'>
            <div className='w-[244px] flex flex-col mt-[45%] gap-3'>
                <h2 className='text-primary-white text-[72px] font-semibold'>99%</h2>
                <p className='text-secondary-gray text-small'>of clients are satisfied ☺️ <br /> with our bank according to the survey</p>
            </div>
        </div>
        <div className="img-block text-right">
          <div className="img-wrap max-w-[680px] ml-auto">
            <img src={rightbglogin} alt="login illustration" className='inline-block w-full' />
          </div>
        </div>
    </div>
  )
}

export default LoginRight