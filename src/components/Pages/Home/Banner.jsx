import './banner.css'

const Banner = () => {
  return (
    <div className="banner lg:h-screen sm:min-h-[50vh] min-h-[40vh] bg-contain xl:bg-cover xl:bg-top flex items-center">
     <div className='ms-6 bg-gray-400 bg-opacity-30 p-2 rounded-sm'>
        <p className='text-3xl font-extrabold py-4'>Empowering Your Digital World</p>
        <h3 className='sm:text-4xl text-3xl font-semibold'>Discover the Latest Tech Essentials <br /> at <span className='font-extrabold'>Tech<span className='text-orange-900'>Zenith</span></span></h3>
        <button className='bg-white p-3 my-4 rounded-md font-semibold hover:text-white hover:bg-black'>Shop Now</button>
        </div> 
    </div>
  )
}

export default Banner
