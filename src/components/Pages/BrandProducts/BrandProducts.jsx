import { useLoaderData } from "react-router-dom"
import { Carousel, Typography, Button } from "@material-tailwind/react";
import OnlyProducts from "./OnlyProducts";




const BrandProducts = () => {
    const data = useLoaderData()
  return (
    <div>
    <Carousel className="rounded-xl">
      <div className="relative xl:h-[80vh] h-full w-full">
        <img
          src="https://i.ibb.co/Fq3TtvG/deon-fosu-ZQZrv-L7-Dwi-I-unsplash.jpg"
          alt="image 1"
          className="xl:h-[80vh] h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid xl:h-[80vh] h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 font-semibold text-3xl md:text-4xl lg:text-5xl"
            >
             We Provide Best Products in town
            </Typography>
            <div className="flex justify-center gap-2">
            </div>
          </div>
        </div>
      </div>
      <div className="relative xl:h-[80vh] h-full w-full">
        <img
          src="https://i.ibb.co/37KXrZd/artem-beliaikin-p-Pz-QP35zh4o-unsplash.jpg"
          alt="image 2"
          className="xl:h-[80vh] h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid xl:h-[80vh] h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              <p>New Offer Is On the way</p>
            </Typography>
            
            <div className="flex gap-2">
            </div>
          </div>
        </div>
      </div>
      <div className="relative xl:h-[80vh] h-full w-full">
        <img
          src="https://i.ibb.co/gjDYkwM/nikhil-mitra-1o-I-wlv-Zk-X8-unsplash.jpg"
          alt="image 3"
          className="xl:h-[80vh] h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid xl:h-[80vh] h-full w-full items-end bg-black/75">
        <Typography
              variant="h1"
              color="white"
              className="my-auto mx-auto text-4xl md:text-5xl lg:text-6xl"
            >
              <p>Our Japan Branch is comming soon</p>
            </Typography>

        </div>
      </div>
    </Carousel>

    <div className="my-8"> 
    <p className="my-12 mx-auto text-center text-3xl font-semibold capitalize">Our Products From {data[0].brand}</p>

    <div className="my-4 grid xl:grid-cols-3 gap-4 grid-cols-1 items-center lg:container mx-auto justify-center">
  {data.map((data) => (
    <OnlyProducts key={data._id} data={data} />
  ))}
</div>


</div>
    </div>
  )
}

export default BrandProducts
