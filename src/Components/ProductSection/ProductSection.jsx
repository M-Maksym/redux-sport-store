import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
    return (<div className="bg-black p-2 w-[90%] mx-auto rounded-md max-w-7xl">
        <h2 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
            SUMMER T-Shirt SALE 30%
        </h2>
        <div className="grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto">
            {storeData.slice(0, 6).map((product, index) => {
                return <div key={index}>
                    <ProductSectionItem 
                    id={product.id} 
                    name={product.name} 
                    img={product.img} 
                    text={product.text}
                    price={product.price}
                    totalPrice={product.totalPrice}
                    color={product.color}
                    size={product.size}   
                    >

                    </ProductSectionItem>
                </div>
            })}
        </div>
    </div>)
}
export default ProductSection;