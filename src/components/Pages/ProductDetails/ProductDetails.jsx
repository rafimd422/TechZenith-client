import { useLoaderData } from "react-router-dom"


const ProductDetails = () => {
    const data = useLoaderData()


    const addToCart = () => {
      const { brand, category, name, price, rating, photourl } = data;
      const newObject = { brand, name, category, price, photourl, rating };
    
      fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Fixed header
        },
        body: JSON.stringify(newObject),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    





  return (
    <div className="lg:container lg:mx-auto md:px-0 px-12 flex flex-wrap gap-6 p-2 items-center justify-center">
<div className="w-80">
    <img src={data.photourl} className="object-contain" alt="" />
</div>
<div className="p-2">
<div className="flex flex-wrap justify-between px-4 gap-2 items-center">
    <h3 className="text-2xl font-bold">
        {data.name}
    </h3>
    <button className={data.avaiablity === "Available" ? `bg-green-500 mb-2 cursor-default hover:bg-green-700 text-white font-bold py-2 px-4 rounded` : `bg-red-500 hover:bg-red-700 text-white font-bold ms-auto mb-2 py-2 cursor-default px-4 rounded`}>
    {data.avaiablity}
    </button>
    </div>
    <p className="my-2 text-gray-700 text-justify">
{data.shortdescription}
    </p>
<div className="flex justify-between items-center px-4">    
<h3 className="font-bold text-2xl text-red-500">Price: ${data.price}</h3>
                <button
                onClick={addToCart}
                  className="px-5 py-2 bg-red-600 text-white font-extrabold transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
            to cart</button>
</div>
</div>

      
    </div>
  )
}

export default ProductDetails
