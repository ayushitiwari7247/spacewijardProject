import React from 'react'
import Navbar from '../component/Navbar'
import Button from '../component/Button'
import section2Img from '../assets/IMG 1.svg'
import bansec1 from '../assets/banner illustration.svg'
import bansec2 from '../assets/Group 1.svg'
import card_img_1 from '../assets/19.svg'
import sec5ban from '../assets/sec_5ban.svg'
import Footer from '../component/Footer'

const Home = () => {
    const cardData = [
        {
            para: "There is no such app that give you the best results like @SpecWizard, try once and you get addicted to it.",
            img: card_img_1,
            name: "Mary",
            email: "@dani_dev"
        },
        {
            para: "We’re working on a new pricing page and we’re loving it.",
            img: card_img_1,
            name: "Mary Clark",
            email: "@mary_clark"
        },
        {
            para: "I created Perfect AP’s with SpecWizard.AI, it took me less than a minutes.",
            img: card_img_1,
            name: "Richard Hernandez",
            email: "@Richard Hernandez"
        },
        {
            para: "Super excited to show what we can do with this awesome tool!",
            img: card_img_1,
            name: "Linda Simmons",
            email: "@Linda Simmons"
        },
        {
            para: "I ❤️ @SpecWizard",
            img: card_img_1,
            name: "Barbara Rodriquez",
            email: "@Barbara Rodriquez"
        },
        {
            para: "@SpecWizard y’all never let me down!",
            img: card_img_1,
            name: "Daniel Mansfhattan",
            email: "@dani_dev"
        },
        {
            para: "You gotta try @SpecWizard App, easy to generate API’s! Trust me!",
            img: card_img_1,
            name: "Jennifer Johnson",
            email: "@jjohnson"
        },
        {
            para: "There is no such app that give you the best results like @SpecWizard, try once and you get addicted to it.",
            img: card_img_1,
            name: "Dasfniel Manhattan",
            email: "@dani_dev"
        },
        {
            para: "Just had my first hands-on experience with @SpecWizard and oh boy... This changes everything.",
            img: card_img_1,
            name: "Kenneth Young",
            email: "@KennethYoung"
        },
    ]
    return (
        <>
            <Navbar />
            <section className='h-[712px] bg-primary-black bg-center bg-no-repeat' style={{ backgroundImage: `url(${bansec1})` }}>

                <div className='max-sm:max-w-[95%] max-w-9/10 mx-auto bg-[url(../assets/banner illustration.svg)]' >
                    <div className='max-w-[708px] mx-auto flex flex-col gap-5'>
                        <h2 className='text-large text-primary-white font-semibold text-center mt-[150px]'>/Working on <span className='text-primary-violet'>API’s: </span>
                            <br />  and  <span className='text-text-blue'>codes</span> that yield vibrant</h2>
                        <p className='text-secondary-gray text-small font-semibold w-9/10 mx-auto text-center'>Turn your inputs into perfect API’s. Simply copy and paste in your code.
                            Very simple, right? Introducing you to SpecWizard, AI-Powered API’s Platform.</p>
                        <div className='flex justify-center'>
                            <Button />
                        </div>
                    </div>
                </div>
            </section>

            {/* section no 2 */}
            <section className='bg-primary-black bg-bottom bg-no-repeat py-20' style={{ backgroundImage: `url(${bansec2})` }}>
                <div className='max-sm:max-w-[95%] max-w-9/10 mx-auto'>
                    <div className='max-w-[708px] mx-auto flex flex-col gap-5'>
                        <h2 className='text-large text-primary-white font-semibold text-center mt-14 leading-14'>Unlike any API’s tool <br />
                            you’ve used before</h2>
                        <p className='text-secondary-gray text-small font-semibold w-3/4 mx-auto text-center'>Well, we’re really different with another API’s platform.
                            <br /> But with AI, did you get what we mean? Yes, that’s it.</p>
                    </div>
                    <div className="w-full lg:w-[1029px] mx-auto mt-14 drop-shadow-[0_0px_40px_rgba(255,255,255,.5)] ">
                        <img src={section2Img} alt="section2Img" className='w-full object-cover' />
                    </div>
                </div>
            </section>
            {/* section no 3 */}
            <section className='bg-primary-black py-20'>
                <div className='max-sm:max-w-[95%] max-w-9/10 mx-auto'>
                    <h2 className='text-large w-7/8 mx-auto text-primary-white font-semibold text-center mt-14 leading-14'>We are building Specwizard with feedback
                        from the best devs in the world
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-14'>
                        {

                            cardData.map((item) => (

                                <div key={item.name} className='bann-card px-8 flex flex-col gap-5 justify-between py-10 bg-card-bg rounded-[25px] rounded-es-sm'>
                                    <p className='text-primary-white text-small'>{item.para}</p>
                                    <div className='flex gap-4'>
                                        <div className='w-14'>
                                            <img src={item.img} alt="card-img" className='w-full' />
                                        </div>
                                        <div>
                                            <p className='text-primary-white'>{item.name}</p>
                                            <p className='text-secondary-gray text-xs'>{item.email}</p>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className='bg-primary-black py-20'>
                <div className='max-sm:max-w-[95%] max-w-9/10 mx-auto'>
                    <div className='flex flex-col justify-center gap-6 sm:w-7/8 mx-auto'>

                        <h2 className='text-large text-center text-primary-white font font-semibold'>We couldn’t build this without you.</h2>
                        <div className='w-53 mx-auto rounded-full flex justify-center items-center gap-4 py-1 bg-card-bg'>
                            <a href="" className='text-primary-white px-4 py-2  font-semibold'>Monthly</a>
                            <a href="" className='text-primary-white px-4 py-2 font-semibold bg-primary-blue rounded-full'>Annually</a>
                        </div>
                        <p className='text-primary-white text-small text-center'>Yes, you heard it right, be monthly or Annually its FREE</p>
                    </div>
                </div>
            </section>
              {/* section 5 */}
              <section className='bg-primary-black py-20 border-b border-secondary-gray'>
                <div className='max-sm:max-w-[95%] max-w-9/10 mx-auto bg-no-repeat bg-right py-10' style={{ backgroundImage: `url(${sec5ban})`}}>
                    <div className='flex flex-col gap-6 w-4/5' >

                        <h2 className='text-large text-primary-white font leading-14  font-semibold'>Just enter your needs <br />
                        and rest on us and get your API</h2>   
                        <p className='text-primary-white text-small'>Whether you're part of a team or an individual, SpecWizard helps you supercharge your API’s seamlessly.</p>
                        <Button/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>


    )
}

export default Home
