import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center mx-60 gap-9'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'
        >
            <span className='text-[#a03ee6ef] whitespace-nowrap'>Discover Your Next Adventure With AI:</span><br />Personalized Itineraries at Your Fingertips</h1>
            <p className='text-xl text-gray-500 text-center'> Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget. </p>
            <Link to={'/create-trip'} >
                <Button>Get Started, It's Free</Button>
            </Link>
            
    </div>
  )
}

export default Hero