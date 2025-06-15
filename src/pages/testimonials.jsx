import React from 'react'
import { FaStar } from 'react-icons/fa'



//testimoials 
//used from my previous projects as time was limited
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        location: "New York, USA",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        text: "The Rajasthan tour was absolutely incredible! The cultural experiences and historical sites were breathtaking. Our guide was knowledgeable and made the trip unforgettable."
    },
    {
        id: 2,
        name: "Michael Chen",
        location: "London, UK",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        text: "The Golden Temple tour exceeded all expectations. The spiritual atmosphere and the beautiful architecture left me speechless. Highly recommend this experience!"
    },
    {
        id: 3,
        name: "Emma Wilson",
        location: "Sydney, Australia",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        text: "Our trip to Goa was perfect! Beautiful beaches, amazing food, and great accommodations. The local experiences were authentic and memorable."
    },
    
]

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
            </div>
            <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                    <FaStar 
                        key={index}
                        className={`${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
                    />
                ))}
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
        </div>
    )
}

export const Testimonials = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#058ea1] mb-4">
                        What Our Travelers Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover the experiences of our satisfied customers who have explored India with us
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </div>
    )
} 