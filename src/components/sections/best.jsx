import React from 'react'

export const Best = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-6 p-10 bg-(--primary-color) text-(--text-color) lg:flex-row lg:space-x-10 lg:space-y-0'>
        <div className='space-y-4 max-w-lg text-center lg:text-left'>
            <h3 className='font-bold capitalize text-2xl'>
                The best car distibutor around you
            </h3>
            <p className='font-medium capitalize text-md '>
                We offer a wide range of high-quality car's that are perfect for any occasion. Whether you're looking for classic styles or the latest trends, we've got you covered. Our car's are made from durable materials and designed to provide a comfortable fit, ensuring you look and feel your best. Visit us today to find your perfect dream car!
            </p>
        </div>
        <div>
            <img src="https://i.pinimg.com/1200x/10/00/b4/1000b4e50c92a9bd76a43e0cbff89957.jpg " alt="best jeans" className='rounded-2xl ' />
        </div>
    </div>
  )
}
