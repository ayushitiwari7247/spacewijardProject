import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <section className='aboutsection bg-primary-black'>
        <div className='max-sm:max-w-[95%] py-14 max-w-9/10 mx-auto'>
          <div className='flex gap-4'>

            {/* left part */}
            <div className='w-[32%] mt-4'>
              <h4 className='text-primary-violet font-semibold text-small'>Table of Contents</h4>
              <div className='flex flex-col gap-5 mt-7'>
                <a href="" className='text-text-blue text-small'>Terms & Condition</a>
                <a href="" className='text-primary-white text-small'>Disclaimer</a>
                <a href="" className='text-primary-white text-small'>Privacy Policy</a>
              </div>
            </div>

            {/* right part */}
            <div className='w-full'>
                  <h2 className='text-semi-large font-semibold text-primary-white mb-6'>Terms & Condition</h2>

                  <div className='mb-4'>
                    <p className='text-seni-small text-secondary-gray'>Praesent placerat dictum elementum. Nam pulvinar urna vel lectus maximus, eget faucibus turpis hendrerit. Sed iaculis molestie arcu, et accumsan nisi. Quisque molestie velit vitae ligula luctus bibendum. Duis sit amet eros mollis, viverra ipsum sed, convallis sapien. Donec justo erat, pulvinar vitae dui ut, finibus euismod enim. Donec velit tortor, mollis eu tortor euismod, gravida lacinia arcu.</p>
                      <ul className='text-secondary-gray text-semi-small list-disc flex flex-col gap-2 mt-5 pl-4'>
                        <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdu</li>
                        <li>Curabitur luctus sapien augue, mattis faucibus nisl vehicula nec. Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
                        <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor</li>
                        <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                        <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                      </ul>
                  </div>

                  <div className='mb-4'>
                    <p className='text-seni-small text-secondary-gray'>In pretium est sit amet diam feugiat eleifend. Curabitur consectetur fringilla metus. Morbi hendrerit facilisis tincidunt. Sed condimentum lacinia arcu. Ut ut iaculis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel erat elit. In vitae turpis tempor, accumsan sapien vitae, rutrum eros. Integer pulvinar mattis turpis, ac fermentum leo ullamcorper a. Nam finibus eros libero, sit amet mattis lacus tristique eu. Donec nec ex convallis, ultricies eros ut, mollis libero. Ut scelerisque lacus interdum consectetur sodales.</p>
                      <ul className='text-secondary-gray text-semi-small list-disc flex flex-col gap-2 mt-5 pl-4'>
                        <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdu</li>
                        <li>Curabitur luctus sapien augue, mattis faucibus nisl vehicula nec. Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
                        <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor</li>
                        <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                        <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                      </ul>
                  </div>

                  <div className='mb-4'>
                    <p className='text-seni-small text-secondary-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex neque, elementum eu blandit in, ornare eu purus. Fusce eu rhoncus mi, quis ultrices lacus. Phasellus id pellentesque nulla. Cras erat nisi, mattis et efficitur et, iaculis a lacus. Fusce gravida augue quis leo facilisis.</p>
                      <ul className='text-secondary-gray text-semi-small list-disc flex flex-col gap-2 mt-5 pl-4'>
                        <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdu</li>
                        <li>Curabitur luctus sapien augue, mattis faucibus nisl vehicula nec. Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
                        <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor</li>
                        <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                        <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                      </ul>
                  </div>

                  <div className='mb-4'>
                    <p className='text-seni-small text-secondary-gray'>Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus. Vivamus sit amet turpis sem. Integer vitae tortor ac ex scelerisque facilisis ac vitae urna. In hac habitasse platea dictumst. Maecenas imperdiet tortor arcu, nec tincidunt neque malesuada volutpat.</p>
                      <ul className='text-secondary-gray text-semi-small list-disc flex flex-col gap-2 mt-5 pl-4'>
                        <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdu</li>
                        <li>Curabitur luctus sapien augue, mattis faucibus nisl vehicula nec. Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
                        <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor</li>
                        <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
                        <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
                      </ul>
                  </div>
                  <p className='text-seni-small text-secondary-gray'>Fusce rutrum mauris sit amet justo rutrum, ut sodales lorem ullamcorper. Aliquam vitae iaculis urna. Nulla vitae mi vel nisl viverra ullamcorper vel elementum est. Mauris vitae elit nec enim tincidunt aliquet. Donec ultrices nulla a enim pulvinar, quis pulvinar lacus consectetur. Donec dignissim, risus nec mollis efficitur, turpis erat blandit urna, eget elementum lacus lectus eget lorem.</p>
            </div>
          </div>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default About
