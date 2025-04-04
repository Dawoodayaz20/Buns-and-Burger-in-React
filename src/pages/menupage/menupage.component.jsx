import React from "react";
import ItemCard from "../../components/ItemCards/item-card.component";
import menuData from "../../assets/burgersdata/burgers_data";

class MenuPage extends React.Component {
    constructor() {
        super();

        this.state= {
            menuData
        }
    }

    render() {
        return(
        <div>
            <h1 className="text-red-700 font-bold text-4xl mt-40 text-center">Burgers</h1>
            <div className="inline-flex flex-wrap justify-items-center justify-between">
                {this.state.menuData.Burgers.map(({id, ...otherMenuProps}) => (
                    <ItemCard key={id} {...otherMenuProps} />
                ))}
            </div>
                <h1 className="text-red-700 font-bold text-4xl text-center">Pizzas</h1>
            <div className="inline-flex flex-wrap justify-items-center justify-between">
                {this.state.menuData.Pizza.map(({id, ...otherMenuProps}) => (
                    <ItemCard key={id} {...otherMenuProps} />
            ))}
            </div>
        </div>
        )
    }
}

export default MenuPage;