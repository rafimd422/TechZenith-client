import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const Brands = () => {
  const brands = [
    { id: 1, name: 'apple', icon:"https://i.ibb.co/ySnB4vx/5f0f6c96988ee32372206555.webp" },
    { id: 2, name: 'Samsung', icon:"https://images.samsung.com/is/image/samsung/assets/bd/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$" },
    { id: 3, name: 'intel', icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHemE6wxf_EQ5_FAoek2DJ8YfTg2w4VUm-Dsp2SKSO8sto3qtoKc3b7-cJRZyz-VS6ts&usqp=CAU" },
    { id: 4, name: 'sony', icon: "https://image.isu.pub/100820125933-85ed8c0c69ea47ef816949db8b642165/jpg/page_1_thumb_large.jpg" },
    { id: 5, name: 'google', icon: "https://design.google/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgd-prod%2Fimages%2Fa910d418-7123-4bc4-aa3b-ef7e25e74ae6.799a99c1196c2fd4.webp&w=1080&q=75" },
    { id: 6, name: 'xiaomi', icon: "https://data1.ibtimes.co.in/en/full/666548/xiaomi.jpg?h=450&l=50&t=40"},
  ];

  return (
    <div className="lg:mt-6 pb-6">
      <p className="text-3xl text-center">Explore our products from top-rated brands</p>

      <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 justify-center my-8">
        {brands.map(brand => (
          <div key={brand.id} className="text-center my-2">
            <img src={brand.icon} className="h-20 w-28 mx-auto mb-2" alt="" />
            <p className="capitalize">{brand.name}</p>
            <Button className="my-4" variant="outlined">View Products</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
