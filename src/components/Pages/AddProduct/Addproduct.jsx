import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [category, setCategory] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const brand = e.target.brand.value.toLowerCase();
    const shortdescription = e.target.shortdescription.value;
    const rating = e.target.rating.value;
    const price = e.target.price.value;
    const avaiablity = e.target.avaiablity.value;
const formDetails = { name, photourl, brand, category , shortdescription , rating ,price,avaiablity}
console.log(formDetails)

fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
            Swal.fire(
                'Good job!',
                'Your Product is Added Successfully',
                'success'
              )
              e.target.reset()
        }
      })
  



  };























  const handleChange = (value) => {
    setCategory(value);
    console.log("Selected category: ", value);
  };

  return (
    <div className="min-h-screen mb-12 bg-gray-100 p-0 sm:p-12">
      <h3 className="text-3xl font-bold mb-8 text-center">Product Showcase</h3>
      <p>
        Welcome to our platform! We're excited to help you showcase your product
        to a wider audience. Please use the form below to add your product
        details.
      </p>
      <div className="my-6 mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Add a new Product</h1>
        <form onSubmit={handleAddProduct}>
          <div className="w-full mb-5">
            <input
              type="text"
              name="name"
              placeholder="Enter Product Name"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
            <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0">
              Enter name
            </label>
          </div>
          <div className="w-full mb-5">
            <input
              type="url"
              name="photourl"
              placeholder="Enter Photo Url"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
            <label htmlFor="photourl" className="absolute duration-300 top-3 -z-1 origin-0">
              Enter Photo Url
            </label>
          </div>
          <div className="w-full mb-5">
            <input
              type="text"
              name="brand"
              placeholder="Enter Brand Name"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
            <label htmlFor="brand" className="absolute duration-300 top-3 -z-1 origin-0">
              Enter Brand Name
            </label>
          </div>
          <Select
            name="category"
            variant="standard"
            label="Select Category"
            value={category}
            onChange={(value) => handleChange(value)} // Pass the selected value
          >
            <Option value="Phone">Phone</Option>
            <Option value="PC">PC</Option>
            <Option value="Headphone">Headphone</Option>
            <Option value="Soundbox">Soundbox</Option>
            <Option value="Keyboard">Keyboard</Option>
          </Select>



          <div className="w-full my-5">
            <input
              type="text"
              name="shortdescription"
              placeholder="Short Description"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
            <label htmlFor="shortdescription" className="absolute duration-300 top-3 -z-1 origin-0">
              Write a short description
            </label>
          </div>
          <div className="w-full mb-5">
            <input
              type="number"
              name="rating"
              placeholder="Add product rating"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
            <label htmlFor="rating" className="absolute duration-300 top-3 -z-1 origin-0">
              Write a short description
            </label>
          </div>
          <div className="w-full mb-5">
            <input
              type="number"
              name="price"
              placeholder="product price"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
            <label htmlFor="price" className="absolute duration-300 top-3 -z-1 origin-0">
            </label>
          </div>
          <div className="w-full mb-5">
            <input
              type="text"
              name="avaiablity"
              placeholder="Available or Sold Out"
              required
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
            />
            <label htmlFor="avaiablity" className="absolute duration-300 top-3 -z-1 origin-0">
              
            </label>
          </div>

          <button
            id="button"
            type="submit"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
