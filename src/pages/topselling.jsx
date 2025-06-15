import React from 'react'
import pic from '../assets/pic.png'
import { useQuery } from '@tanstack/react-query'
import { getPackages } from '../../services/api'
import { Skeleton } from '@mui/material'

import rajasthanImg from '../assets/rajasthantour.jpg'
import goldentempleImg from '../assets/goldentempletour.jpg'
import goaImg from '../assets/triptogoa.jpg'
import nainitalImg from '../assets/nainitalescape.jpg'
import kashmirImg from '../assets/kashmirholidaytour.jpeg'
import keralaImg from '../assets/keralatour.jpg'

//remove spaces and lowercase the name of packages in database to match the mapping
const normalizePackageName = (name) => {
    return name.toLowerCase().replace(/\s+/g, '');
}

//map the images name to packages name in database
const packagesImages = {
    'goldentempletour': goldentempleImg,
    'rajasthantour': rajasthanImg,
    'triptogoa': goaImg,
    'nainitalescape': nainitalImg,
    'kashmirholidaytour': kashmirImg,
    'amazingkeralatour': keralaImg
}

//skeleton for packages cards
const TopSellingSkeleton = () => {
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

export const TopSelling = () => {
    const {isPending, error, data: packages} = useQuery({
        queryKey: ['packagesData'],
        queryFn: getPackages
    });

    if(error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-red-500">Error: {error.message}</div>
            </div>
        )
    }

    return (
        <div className='mt-16 flex flex-col items-center'>
            <div className='flex flex-col items-center mb-12'>
                <h3 className='text-4xl font-bold text-[#058ea1]'>
                    Top Selling Tour Packages of India
                </h3>
                <h1 className='text-center mt-5'>
                    Stay updated with our latest news and happenings through <br/> Informe.
                </h1>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {isPending ? (
                    <>
                        <TopSellingSkeleton/>
                        <TopSellingSkeleton/>
                        <TopSellingSkeleton/>
                        <TopSellingSkeleton/>
                        <TopSellingSkeleton/>
                    </>
                ) : (
                    packages?.map((Package) => (
                        <div key={Package._id} className='max-w-sm flex flex-col items-center border rounded-2xl shadow-2xl'>
                            <img 
                                className="w-full h-48 object-cover rounded-2xl mb-4" 
                                src={packagesImages[normalizePackageName(Package.packageName)] || pic} 
                                alt={Package.packageName} 
                            />
                            <h1 className='mb-2'>{Package.packageName}</h1>
                            <button className='rounded-2xl px-20 py-1 bg-[#77c8c9] text-white font-bold mb-4'>View Details</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

