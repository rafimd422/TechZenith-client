import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const data = useLoaderData()
  const intdata = data.map(data => parseInt(data.price))
intdata.push(0) // to not showing error for empty array with reduce method
 const getSum = intdata.reduce((total,num) => {
return total + num
  })

  const deleteCart = (id) => {
 
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to remove this item from the cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: 'DELETE', 
          headers: { 'Content-Type': 'application/json' },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.deletedCount > 0){
            Swal.fire('Deleted!', 'Your item has been removed from the cart.', 'success')
            window.location.reload()
          }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    });
  };
  





  return (
    <div className="h-fit bg-gray-100 py-14">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {data.map(data => 
            <div key={data._id} className="justify-between mb-6 rounded-lg bg-white p-4 shadow-md sm:flex sm:justify-start">
            <img
              src={data.photourl}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">{data.name}</h2>
                <p className="mt-1 text-xs text-gray-700">{data.category}</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">

                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">{data.price}$</p>
                  <Tooltip content="Remove form cart" placement="top-start">
                <p className="p-2" onClick={()=>deleteCart(data._id)}>
                <FaDeleteLeft className="text-2xl cursor-pointer"/></p>
                </Tooltip>
                </div>
              </div>
            </div>
            </div>
            )}
        </div>

        
        {/* Subtotal */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${getSum}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">${getSum + 4.99} USD</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover-bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

