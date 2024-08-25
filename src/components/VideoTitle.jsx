import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-6'>
    <h1 className='text-4xl font-bold'> {title}</h1>
    <p className='text-lg py-6 w-1/3'>{overview}</p>
    <div className='flex gap-3'>
        <button className='bg-gray-500 text-white p-4 px-12 text-lg rounded-lg bg-opacity-50' >▶Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-lg rounded-lg bg-opacity-50'>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle
