import React from 'react'
import coverpic from '../assets/coverpic.jpg'


export const Home = () => {
  return (
    <div className='min-h-screen relative bg-cover' style={{ backgroundImage: `url(${coverpic})` }}>
        <div className='flex flex-col text-white font-bold absolute mt-36 ml-36'>
        <h3 className='text-6xl'>
        Discover Your Next <br/> Adventure
        </h3>
        <h1 className='text-md'>
        Choose from our curated experiences, customized for every <br/> kind of traveler.
         </h1>
        <button className='rounded-2xl max-w-60 px-8 py-1 bg-orange-400 mt-8'>Book Now</button>
        </div>

    </div>
  )
}

