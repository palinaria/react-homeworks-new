import React, { Component } from "react";
import Menu from '../Menu/Menu.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import "./Main.css";
import Tooltip from "../Tooltip/Tooltip.jsx";
import Button from "../Button/Button.jsx";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            visibleCount: 6,
        };
    }

    componentDidMount() {
        this.fetchItems();
    }

    async fetchItems() {
        try {
            const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
            const result = await response.json();
            this.setState({ menuItems: result });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    handleSeeMore = () => {
        this.setState((prevState) => ({
            visibleCount: prevState.visibleCount + 6,
        }));
    };

    render() {
        const { menuItems, visibleCount } = this.state;
        const visibleItems = menuItems.slice(0, visibleCount); //блюда,которые показываются сейчас,от 0 до 6
        const hasMoreItems = visibleCount < menuItems.length;//проверочка

        return (
            <main className="main">
                <div className="main__title">Browse our menu</div>
                <div className="main__subtitle common_font">
                    Use our menu to place an order online, or{" "}
                    <Tooltip text="Call us: +37067683921">
                        <span className="highlight">phone</span>
                    </Tooltip>{" "}
                    our store <br /> to place a pickup order. Fast and fresh food.
                </div>

                <Menu />

                <div className="main_menu">
                    {visibleItems.map((el) => (
                        <ProductCard
                            key={el.id}
                            index={el.id}
                            title={el.meal}
                            price={el.price}
                            description={el.instructions}
                            image={el.img}
                        />
                    ))}
                </div>

                {hasMoreItems && ( //условие ,если hasMoreItems===true
                    <Button type="btn__primary" onClick={this.handleSeeMore}>
                        See more
                    </Button>
                )}
            </main>
        );
    }
}

export default Main;