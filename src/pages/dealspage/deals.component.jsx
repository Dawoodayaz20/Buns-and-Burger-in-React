import React from "react";
import ItemCard from "../../components/ItemCards/item-card.component"; 
import dealsdata from "../../assets/burgersdata/dealsdata"


class DealsPage extends React.Component {
    constructor(){
        super()

        this.state = {
            dealsdata
        }
    }

    render() {
        return(
        <div className='mt-52 md:mt-40'>
            <h1 className="text-red-700 font-bold text-4xl text-center">Burgers</h1>
            <div className="inline-flex flex-wrap justify-items-center justify-between">
                {this.state.dealsdata.Burgers.slice(0, 4).map(({id, ...otherMenuProps}) => (
                    <ItemCard key={id} {...otherMenuProps} />
                ))}
            </div>
            
            <h1 className="text-red-700 font-bold text-4xl text-center">Pizzas</h1>
            <div className="inline-flex flex-wrap justify-items-center justify-between">
                {this.state.dealsdata.Pizzas.slice(0, 4).map(({id, ...otherMenuProps}) => (
                    <ItemCard key={id} {...otherMenuProps} />
                ))}
            </div>
        </div >
    )
}
}

export default DealsPage