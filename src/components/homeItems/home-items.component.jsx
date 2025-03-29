import React from "react"
import ItemCard from "../ItemCards/item-card.component"
import './home-items.styles.css'

class HomeItems extends React.Component {
    constructor() {
        super()

        this.state = {
                "Burgers": [
                    {
                        name: "Zinger Cheeseburger",
                        id: 1,
                        price : "$5.99",
                        ImgLink: "Zing Burger.jpg",
                        quant: 15,
                        detail: "The Zinger Cheeseburger is a delicious combination of a Zinger fillet, cheese, lettuce, and mayo all on a seeded bun. It's a burger that's sure to satisfy any hunger."
                    },
                    {
                        name: "Mega Zinger Burger",
                        id: 2,
                        price : "$4.99",
                        ImgLink: "Mega Zing Burger.jpg",
                        quant: 15,
                        detail: "The Mega Zinger Burger is a delicious combination of a Zinger fillet, lettuce, and mayo all on a seeded bun. It's a burger that's sure to satisfy any hunger."
                    },
                    {
                        name: "Bacon Zinger Burger",
                        id: 3,
                        price : "$6.99",
                        ImgLink: "Smash Zing Burger.webp",
                        quant: 15,
                        detail: "The Bacon Zinger Burger is a delicious combination of a Zinger fillet, bacon, lettuce, and mayo all on a seeded bun. It's a burger that's sure to satisfy any hunger."
                    },{
                        name: "Libertine Burger",
                        id: 4,
                        price : "$7.99",
                        ImgLink: "Libertine Burger.jpg",
                        quant: 15,
                        detail: "The Libertine Burger is a delicious combination of a Zinger fillet, bacon, cheese, lettuce, and mayo all on a seeded bun. It's a burger that's sure to satisfy any hunger."
                    },{
                        name: "3 Zingers Deal",
                        id: 5,
                        price : "$19.99",
                        ImgLink: "3Zingerdeal.jpg",
                        quant: 15,
                        detail: "The 3 Zingers Deal is a delicious combination of 3 Zinger fillets, lettuce, and mayo all on a seeded bun. It's a burger that's sure to satisfy any hunger."
                    },{
                        name: "4 Zingers Deal",
                        id: 6,
                        price : "$24.99",
                        ImgLink: "4ZingersDeal.jpg",
                        quant: 15,
                        detail: "The 4 Zingers Deal is a delicious combination of 4 Zinger fillets, lettuce, and mayo all on a seeded bun. It's a burger that's sure to satisfy any hunger."
                    }
                ]
            }
    }

    render() {
        return(
            <div className="inline-flex flex-wrap justify-items-center justify-between">
                {this.state.Burgers.map(({id, ...otherMenuProps}) => (
                    <ItemCard key={id} {...otherMenuProps} />
                ))}
            </div>
        )
    }
}

export default HomeItems