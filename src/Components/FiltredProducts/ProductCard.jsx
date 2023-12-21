import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
  } from "@material-tailwind/react";


const ProductCard = ({id, name, text, img, price, colors}) =>{
    return (<Card className="mt-6 w-95">
    <CardHeader color="blue-gray" className="relative h-96">
      <img
        src={img}
        alt="card"
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {name}
      </Typography>
      <Typography>{text}</Typography>
    </CardBody>
    <CardFooter className="flex items-center justify-between py-3">
    <Typography>{price}$</Typography>
    <Typography variant="small" color='gray' className='flex gap-1'>{colors.map((color, index) => {
        return <i className='fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4' 
        key={index} style={{backgroundColor: color}}></i>;
    })}
    </Typography>
    </CardFooter>
  </Card>
)
};
export default ProductCard;