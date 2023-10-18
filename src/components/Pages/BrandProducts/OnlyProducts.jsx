import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";



const OnlyProducts = ({data}) => {
console.log(data)
return (
    <Card className="w-96 mx-auto shadow-lg">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={data.photourl}
          alt="card-image"
          className="h-full w-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {data.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-green-800">
            ${data.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {data.shortdescription.slice(0,148)}...
        </Typography>
        <div className="flex justify-between w-full">        
  <p className="capitalize my-2"><span className="font-bold">Brand:</span> {data.brand}</p>
  <p className="capitalize mt-2"><span className="font-bold">Category:</span> {data.category}</p>

</div>

      </CardBody>

<div className="flex flex-col">
<CardFooter className="pt-0 flex justify-between">
        <Button
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          View Details
        </Button>

        <Button
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Update Details
        </Button>
      </CardFooter>
      <button className={data.avaiablity === "Available" ? `bg-green-500  mb-2mt-2hover:bg-green-700 text-white font-bold py-2 px-4 rounded` : `bg-red-500 hover:bg-red-700 text-white font-bold ms-auto w-full py-2 mt-2 px-4 rounded`}>
    {data.avaiablity}
    </button>
</div>



    </Card>
  );
}

export default OnlyProducts
