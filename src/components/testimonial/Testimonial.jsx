import React, { useContext } from 'react'
import myContext from '../../context/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>Project Leader</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzApghBBpzRXlFYW0Fag06oof0HJpSiu0UXw&usqp=CAU" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">As a software developer, I'm always looking for opportunities to showcase my projects and learn from others in the field. I uploaded my Smart Home Automation System project on this website and found it incredibly helpful. Not only did I showcase my work to others, but I also gained inspiration from projects uploaded by fellow students. It's a fantastic platform for sharing ideas and learning from each other.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32J_jXtMby898p-eszvpVLcYtblIiBa9lCg&usqp=CAU" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">As a fitness trainer, I'm passionate about leveraging technology to help people achieve their fitness goals. I recently uploaded my Virtual Fitness Coach project on this platform, and I must say, it's been a game-changer for me. Not only did I receive valuable feedback on my project, but I also got inquiries from potential clients interested in virtual coaching sessions. It's an excellent resource for fitness enthusiasts and professionals alike</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOeFkZWkkq0d73AluMU2uj4tWB5jDdQrO_A&usqp=CAU" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">As a healthcare technologist, I'm always exploring innovative ways to promote healthy living and nutrition. I stumbled upon this website while researching project ideas, and I'm so glad I did. I uploaded my Recipe Recommender project here and received positive responses from peers and nutritionists alike. It's a fantastic platform for showcasing health-related projects and connecting with professionals in the field</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Healthcare Technologist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial