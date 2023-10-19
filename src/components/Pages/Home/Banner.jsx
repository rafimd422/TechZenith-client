import './banner.css'

const Banner = () => {
  return (
    <div className="banner lg:h-screen sm:min-h-[50vh] min-h-[40vh] bg-contain xl:bg-cover xl:bg-top flex items-center">
     <div className='md:container mx-auto text-center bg-gray-900 bg-opacity-30 p-2 rounded-sm'>
       {/*  <p className='text-3xl font-extrabold py-4'>Empowering Your Digital World</p>
        <h3 className='sm:text-4xl text-3xl font-semibold'>Discover the Latest Tech Essentials <br /> at <span className='font-extrabold'>Tech<span className='text-orange-900'>Zenith</span></span></h3> */}
        {/* <div className="sm:max-w-lg"> */}
  <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl text-white">
  Empowering Your Digital World
  </h1>
  <p className="mt-4 text-xl text-white">
  Discover the Latest Tech Essentials <br /> at <span className='font-extrabold'>Tech<span className='text-orange-900'>Zenith</span></span>
  </p>

        </div> 
    </div>
  )
}

export default Banner
