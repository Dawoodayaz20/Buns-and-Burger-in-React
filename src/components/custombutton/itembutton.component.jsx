import React from "react";

const ItemButton = ({buttonname, onClick}) => {
    return (
        <button className="text-yellow-200 rounded-lg px-4 py-2 text-lg font-bold transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 bg-red-700 space-x-2" 
            onClick={onClick} 
        >
            {buttonname}
        </button>
    )
}

// padding: 10px bg-red-700 text-yellow-300 hover:

export default ItemButton;