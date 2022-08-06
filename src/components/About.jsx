import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4' >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Syed, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am passionate about programming both in frontend and backend development.
                            I've done projects in C#, React/JavaScrpt, CSS and exploring other programming
                            languages and libraries to learn. Recently I've started using tailwind to improve
                            fortend web development and exploring how to make better APIs.
                        </p>
                    </div>
                </div>
                <div className='visible lg:invisible pt-20'>
                    <div>
                        <p className='text-center text-4xl font-bold text-pink-600 hover:text-white'>
                        Links
                        </p>
                        
                    </div>
                    <div className='justify-center items-center w-full h-full'>
                        <a className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 m-8 flex items-center'
                        href='https://www.linkedin.com/in/syed-malik-73512516/'>
                            LinkedIn
                        </a>
                        <a className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 m-8 flex items-center'
                        href='https://github.com/symalik'>
                            GitHub
                        </a>
                        <a className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 m-8 flex items-center'
                        href='https://symalik.github.io/Resume/Syed_Malik_Resume.pdf'>
                            Resume
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default About