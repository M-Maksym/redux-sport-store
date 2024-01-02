import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Error from '../Error/Error';
import {filterProducts,
  filterGender, 
  sortByPrice, 
  filterBySize, 
  filterByColor
} from '../../features/slices/productsSlice'; 

const FiltredProducts = () =>{
    const products = useSelector((state) => state.products.filteredProducts);
    const error  = useSelector((state) => state.products.error);
    const {type} = useParams();
    const dispatch = useDispatch();

    const genderButtons = ['male', 'female'];
    const colorsButtons = ['red', 'green', 'purple', 'yellow', 'orange', 'blue', 'black', 'brown'];
    const sizeButtons = ['S', 'M', 'L', 'XL'];

    return (
    <div>
        <div className='pt-16'>
            <div className='pl-14'>
                <h1 className='text-4xl font-inter text-gray-300 tracking-normal leading-none font-bold'>{type}</h1>
              <div className='flex items-center justify-between py-8'>
                <div className='flex items-center'>
                  {genderButtons.map((item, index) => {
                    return(
                    <div key={index}>
                      <Button color='gray' size='lg' variant='outlined' ripple={true} 
                      className='text-black hover:bg-gray-300 duration-300 easy-in-out mr-4'
                      onClick={() => dispatch(filterGender(item))}
                      >
                        {item}
                      </Button>
                    </div>
                    )
                  })}
                </div>
                <Button color='gray' 
                size='lg' 
                variant='outlined' 
                ripple={true} 
                className='text-black hover:bg-gray-300 duration-300 easy-in-out mr-4'
                onClick={() => dispatch(sortByPrice())}>
                  High Price
                </Button>
                <Menu>
                  <MenuHandler>
                    <Button color='gray' 
                    size='lg' 
                    variant='outlined' 
                    ripple={true} 
                    className='text-black hover:bg-gray-300 duration-300 easy-in-out mr-4'
                    >
                      Select a color
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {colorsButtons.map((item, index) => {
                      return(
                        <MenuItem style={{color: item}} key={index} onClick={() => dispatch(filterByColor(item))}>{item}</MenuItem>
                      )
                    })}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button 
                    disabled={type==='Bags' || type==='Shoes'}
                    color='gray' 
                    size='lg' 
                    variant='outlined' 
                    ripple={true} 
                    className='text-black hover:bg-gray-300 duration-300 easy-in-out mr-4'
                    >
                      Select a size
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {sizeButtons.map((item, index) => {
                      return(
                        <MenuItem key={index} onClick={() => dispatch(filterBySize(item))}>{item}</MenuItem>
                      )
                    })}
                  </MenuList>
                </Menu>
              </div>
              <div className='pr-14'>
                <Button
                color='gray' 
                size='lg' 
                variant='outlined' 
                ripple={true} 
                className='text-black hover:bg-gray-300 duration-300 easy-in-out mr-4'
                onClick={() => dispatch(filterProducts(type))}
                >
                  Clear Filter
                </Button>
              </div>
            </div>
            </div>
            {error ? <Error/> :
            (<div>
                <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
                {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index} className="">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
              
            </div>
        </div>)}
    </div>)
}
export default FiltredProducts;