// import React from "react";
// import './item-card.styles.css'

// const ItemCard = ({ name, price, ImgLink }) => {

//     let imagePath;
//     try {
//         imagePath = new URL(`../../assets/${ImgLink}`, import.meta.url);
//     } catch (error) {
//         console.error(`Image not found: ${ImgLink}`, error);
//         // imagePath = require(`../../assets/default.jpg`); // Fallback image
//     }
//     return (
//         <div className="item">
//             <div className="item-image">
//             <img className="item-image" src={imagePath} alt={name} />
//             </div>
//             <div className="item-details">
//                 <h2 className="item-title">
//                 {name}
//                 </h2>
//                 <div className="item-price">
//                 {price}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ItemCard

import React from "react";

const ItemCard = ({ name, price, ImgLink }) => {
  let imagePath;
  try {
    imagePath = new URL(`../../assets/${ImgLink}`, import.meta.url);
  } catch (error) {
    console.error(`Image not found: ${ImgLink}`, error);
  }

  return (
    <div className="cursor-pointer w-72 border border-yellow-200 rounded-lg bg-yellow-200 shadow-md text-center transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 p-4 m-8 flex flex-col items-center">
      <div className="w-72 h-48 bg-black overflow-hidden">
        <img className="w-full h-full object-contain" src={imagePath} alt={name} />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold text-red-700 mb-2">{name}</h2>
        <div className="text-lg text-red-700">{price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
