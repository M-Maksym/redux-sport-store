import React, {Fragment} from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { useSelector, useDispatch } from 'react-redux';
  import { Tooltip } from "@material-tailwind/react";
  import { removeFromWish } from '../../features/slices/wishSlice';

const Wish = ({openModal, setOpen}) =>{
    const wish = useSelector((state) => state.wish.wish);
    const totalPrice = useSelector((state) => state.wish.totalPrice);
    const dispatch = useDispatch();
    return (<div>
        {wish.length > 0 ? <Fragment>
        <Dialog 
        className='border-0 outline-0'
        open={openModal} 
        handler={() =>  setOpen(false)} 
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
        }}>
            <DialogHeader>Wish List</DialogHeader>
            <DialogBody divider className='flex flex-col justify-center items-start overflow-y-scroll h-[80vh]'>
                {wish.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className='grid grid-cols-2 py-4'>
                                <div>
                                    <img className='h-[100px] rounded-md' src={item.img} alt={item.name} />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h4 className='text-black text-base font-inter font-bold tracking-normal leading-none pt-2'
                                    >{item.name}</h4>
                                </div>
                                <div className='max-w-xs'>
                                    <p className='text-black text-xs font-inter tracking-normal leading-none pt-2'
                                    >
                                        {item.text}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'
                                    >
                                        Selected size:{" "} <span className='ml-2'>{item.size}</span>
                                    </p>
                                    <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'
                                    >
                                        Selected color:{" "} <span className='ml-2 rounded-full px-2' style={{backgroundColor: item.color}}></span>
                                    </p>
                                    <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'
                                    >
                                        Amount:{" "} <span className='ml-2'>{item.amount}</span>
                                    </p>
                                    <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'
                                    >
                                        single item price:{" "} <span className='ml-2'>{item.price}$</span>
                                    </p>
                                    <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'
                                    >
                                        Total Item Prices:{" "} <span className='ml-2'>{item.totalPrice}$</span>
                                    </p>
                                    <div className='ml-7 mt-2'>
                                        <Tooltip content='Remove from the Wish List' placement='bottom'>
                                            <Button size='sm' color='red' ripple={true} variant='filled' onClick={()=> dispatch(removeFromWish(item))}>Remove</Button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </DialogBody>
            <DialogFooter className='flex justify-start items-center'>
                <p className='text-black text-base font-inter tracking-normal leading-none pt-2'
                >
                    Total Price of All Products: <span className='ml-2'>{totalPrice}$</span>
                </p>
            </DialogFooter>
        </Dialog>
        </Fragment> 
        : 
        <Fragment>
        <Dialog 
        className='border-0 outline-0'
        open={openModal} 
        handler={() =>  setOpen(false)} 
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
        }}>
            <DialogHeader>Wish List</DialogHeader>
            <DialogBody divider>
                <div>
                    <h1 className='text-black text-2xl font-inter font-bold tracking-normal leading-none py-4'>
                        You don't have any desired items added yet
                    </h1>
                    <p className='text-black text-base font-inter tracking-normal leading-none py-4'>
                        Please add them
                    </p>
                </div>
            </DialogBody>

        </Dialog>
        </Fragment>}
        
    </div>)
}
export default Wish;