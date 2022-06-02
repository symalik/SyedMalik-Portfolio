import React from 'react'
import WorkImg from '..//assets/workImg.jpeg'
import realEstate from '..//assets/realestate.jpg'
import EurekaApp from '..//assets/EurekaApp.png'
import EurekaAPI from '..//assets/EurekaAPI.png'
import Weather from '..//assets/Weather.png'
import Calculator from '..//assets/Calculator.png'
import Hangman from '..//assets/Hangman.png'
import TicTacToe from '..//assets/TicTacToe.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pd-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${EurekaApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Eureka Application
                        </span>
                        <div className='pt-8 text-center'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                React/JS 
                            </span>
                            <a href='https://github.com/symalik/eureka-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${EurekaAPI})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Eureka API
                        </span>
                        <div className='pt-8 text-center'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                C#
                            </span>
                            <a href='https://github.com/symalik/Eureka'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather Application
                        </span>
                        <div className='pt-8 text-center'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                React/JS
                            </span>
                            <a href='https://github.com/symalik/weather-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Calculator})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Calculator
                        </span>
                        <div className='pt-8 text-center'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                C#
                            </span>
                            <a href='https://github.com/symalik/Calculator'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Hangman})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Hangman
                        </span>
                        <div className='pt-8 text-center'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                C#
                            </span>
                            <a href='https://github.com/symalik/HangmanProject'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TicTacToe})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tic-Tac-Toe
                        </span>
                        <div className='pt-8 text-center'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                React/JS
                            </span>
                            <a href='https://github.com/symalik/Tic-tac-toe_React'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work