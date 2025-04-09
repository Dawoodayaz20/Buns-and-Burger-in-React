import React from "react";
import ItemButton from "../custombutton/itembutton.component";
import { useCart } from "../../components/cart/cartcontext"; // Import useCart

const ItemCard = ({ name, price, ImgLink }) => {

  const { addToCart } = useCart();
  
  let imagePath;
  try {
    imagePath = new URL(`../../../public/images/${ImgLink}`, import.meta.url);
  } catch (error) {
    console.error(`Image not found: ${ImgLink}`, error);
  }


  // Create an item object to add to cart
  const item = { id: name, name, price, ImgLink };

  return (
    <div className="w-72 border border-yellow-200 rounded-lg bg-yellow-200 shadow-md text-center  p-4 m-8 flex flex-col items-center">
      <div className="w-72 h-48 bg-black overflow-hidden">
        <img className="w-full h-full object-contain" src={imagePath} alt={name} />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold text-red-700 mb-2">{name}</h2>
        <div className="text-lg text-red-700">{price}</div>
      </div>
      <div className="inline-flex">
      <ItemButton 
      buttonname="Add to Cart" onClick={() => addToCart(item)}
      />
      <ItemButton 
      buttonname="Buy Now"
      />
      </div>
    </div>
  );
};

export default ItemCard;
