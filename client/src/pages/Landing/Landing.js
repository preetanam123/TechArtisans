import React from 'react'
import './Landing.css'

const Landing = () => {
  return (
    <>
      <div className="justify-right mx-5">
      <header className='text-right my-5'>
        <nav className='text-right'>
          <a href="" className='text-right my-5 p-5 text-2xl mx-7'>
            Login
          </a>
          <button className='bg-button-orange text-[#FFFFFF] rounded-full px-7 py-3 text-2xl '>
          <a href="" className=''>
            Sign Up
          </a>
          </button>
          
        </nav>
      </header>
      </div>
      <div className='flex'>
      <div className='mx-[200px] text-5xl my-[100px] font-bold w-1/2'>
        <span className='text-blue'> Find </span>
        <br />
        <br />
         your <span className='text-orange'> Best </span> 
        <br />
        <br />

        <span className='text-red'> Career </span> path 

        <br />
        <br />

         <span>within a snap</span> 
        <br />
        <br />
      </div>
      <div className='image'>
        <img src='https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/07/1600356731_career-counselling.jpg'>

        </img>
    
        
      
      </div>
      </div>

      
    </>
  )
}

export default Landing