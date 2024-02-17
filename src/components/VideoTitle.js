import React from 'react'

const VideoTitle = ({movie}) => {
  return (
    <div className='w-screen aspect-video font-sans absolute max-[400px]:h-[300px] bg-black bg-opacity-5 bg-gradient-to-r from-black   px-10 z-1'>
     <div className=' relative top-[20%]  '>

      <h1 className='text-white  w-1/2  text-5xl max-sm:text-3xl '>{movie?.title}</h1>
      <p className='text-white  w-1/2 py-6 text-lg max-[700px]:hidden max-md:w-full '>{movie?.overview}</p>
     </div>
    </div>
  )
}

export default VideoTitle
