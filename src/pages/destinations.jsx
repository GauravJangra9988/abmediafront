import React from 'react'
import { useQuery } from '@tanstack/react-query'
import pic from '../assets/pic.png'
import { getDestination, getPackages } from '../../services/api.js'
import { Skeleton } from '@mui/material'


import keralaImg from '../assets/kerala.jpg'
import maharashtraImg from '../assets/maharashtra.jpg'
import assamImg from '../assets/assam.jpg'
import goaImg from '../assets/goa.jpg'
import himachalImg from '../assets/himachal.jpg'
import jammukashmirImg from '../assets/jammukashmir.jpg'
import defaultImg from '../assets/pic.png'

//map images name to their names in database
const destinationImages = {
  'Kerala': keralaImg,
  'Maharashtra': maharashtraImg,
  'Assam': assamImg,
  'Goa': goaImg,
  'Himachal Pradesh': himachalImg,
  'Jammu & Kashmir': jammukashmirImg,
}

//skeleton for destination cards
const DestinationSkeleton = () => {
  return (
    <div className='max-w-sm border rounded-2xl shadow-2xl overflow-hidden'>
      <Skeleton variant="rectangular" height={192} className="w-full" />
      <div className='flex flex-row items-center justify-between py-4 px-2'>
        <Skeleton variant="text" width={100} height={30} />
        <Skeleton variant="text" width={120} height={30} />
      </div>
    </div>
  )
}


export const DestinationsPage = () => {
  const { isPending, error, data: destinations } = useQuery({
    queryKey: ['destinationData'],
    queryFn: getDestination
  });


  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center mt-12'>
        <div className='flex flex-col items-center mb-10'>
          <h3 className='text-4xl font-bold text-[#058ea1]'>
            Explore Most Popular Destinations
          </h3>
          <h1 className='mt-5 text-center'>
            Plan your perfect trip with our most loved and best-selling <br />tour packages.
          </h1>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          {isPending ? (
            <>
              <DestinationSkeleton />
              <DestinationSkeleton />
              <DestinationSkeleton />
              <DestinationSkeleton />
              <DestinationSkeleton />
              <DestinationSkeleton />
            </>
          ) : (
            destinations?.map((destination) => (
              <div key={destination._id} className='max-w-sm border rounded-2xl shadow-2xl'>
                <img 
                  className="w-full h-48 object-cover rounded-2xl" 
                  src={destinationImages[destination.destinationName] || defaultImg}  
                  alt={destination.destinationName} 
                />
                <div className='flex flex-row items-center justify-between py-4 px-4'>
                  <h1 className=' text-[#058ea1] uppercase'>{destination.destinationName}</h1>
                  <h1>Starting from <span className='text-[#058ea1]'>₹{destination.price}/-</span></h1>
                </div>
              </div>
            ))
          )}
        </div>
        
    </div>
  )
}

