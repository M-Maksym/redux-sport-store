import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCard } from '../../features/slices/cartSlice';
import { addToWish } from '../../features/slices/wishSlice';
import { useDispatch } from 'react-redux';

const SingleProduct = () =>{
    const product = useSelector((state) => state.products.singleProduct);
    const productSize = product[0].size ? product[0].size[0] : "";
    const productColor = product[0].color ? product[0].color[0] : "";
    const [size, setSize] = useState(productSize);
    const [color, setColor] = useState(productColor);
    const {id} = useParams();
    const dispatch = useDispatch();

    return (<div>
        {product.filter((product) => product.id === id).map((item, index) => {
            return <div key={index} className='flex justify-center items-center py-10'>
                <div className='pl-44 grow-[2px]'>
                    <img className='h-[850px] rounded-lg' src={item.img} alt={item.name}></img>
                </div>
                <div className='grow-[3] ml-5'>
                    <div className='max-w-lg'>
                        <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-5'>
                            {item.name}
                        </h5>
                        <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                            15% OFF
                        </p>
                        <p className='text-gray-300 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                            {item.text}
                        </p>
                        <div className='pb-4'>
                            {item.size ? (<div>
                            <label htmlFor="size" 
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Pick a size
                            </label>
                                <select name='size'
                                id='size'
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                    {item.size.map((item, index) => {
                                        return (<option key={index} value={item}>
                                            {item}
                                            </option>)
                                    })}
                                </select>
                            </div>)
                            : (<div>
                                <label htmlFor="size" 
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Pick a size
                                </label>
                                    <select name='size'
                                    id='size'
                                    disabled={true}
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                        {item?.size?.map((item, index) => {
                                            return (<option key={index} value={item}>
                                                {item}
                                                </option>)
                                        })}
                                    </select>
                                </div>
                            )}                            
                        </div>
                        <div className='pb-4'>
                            <label htmlFor="color" 
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Pick a color
                            </label>
                                <select name='color'
                                id='color'
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                    {item.color.map((color, index) => {
                                        return (<option key={index} value={color}>
                                            {color}
                                            </option>)
                                    })}
                                </select>
                            </div>
                            <Tooltip content='Add to card' placement='bottom'>
                                <Button 
                                color='gray' 
                                size='lg' 
                                variant='outlined' 
                                ripple={true}
                                onClick={()=>dispatch(addToCard({
                                    id: item.id,
                                    name: item.name,
                                    img: item.img,
                                    text: item.text,
                                    size: size,
                                    color: color,
                                    price: item.price,
                                    amount: 1,
                                    totelPrice: item.price,

                                }))}
                                >
                                    Add to Cart
                                </Button>
                            </Tooltip>
                            <Tooltip content='Add to Wish List' placement='bottom'>
                                <Button 
                                color='gray' 
                                size='lg' 
                                variant='outlined' 
                                ripple={true}
                                className='ml-2'
                                onClick={()=>dispatch(addToWish({
                                    id: item.id,
                                    name: item.name,
                                    img: item.img,
                                    text: item.text,
                                    size: size,
                                    color: color,
                                    price: item.price,
                                    amount: 1,
                                    totelPrice: item.price,

                                }))}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 24 24" 
                                        stroke-width="1.5" 
                                        stroke="currentColor" 
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </Button>
                            </Tooltip>
                    </div>
                </div>
            </div>
        })}
    </div>)
}
export default SingleProduct;