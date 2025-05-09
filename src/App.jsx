import React, {Component} from "react";
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from "./components/Footer/Footer.jsx";

import './App.css';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: {},
            totalQuantity: 0,
        };
    }

    handleAddToCart = (product) => {
        this.setState((prevState) => {
            const updatedCartItems = { ...prevState.cartItems };
            const productId = product.id;
            const productQuantity = Number(product.quantity);

            if (updatedCartItems[productId]) {
                updatedCartItems[productId] = {
                    ...updatedCartItems[productId],
                    quantity: updatedCartItems[productId].quantity + productQuantity
                };
            } else {
                updatedCartItems[productId] = {
                    ...product,
                    quantity: productQuantity
                };
            }

            return {
                cartItems: updatedCartItems,
                totalQuantity: prevState.totalQuantity + productQuantity
            };
        });
    };

    render() {
        const { totalQuantity } = this.state;

        return (
            <>
                <Header totalQuantity={totalQuantity} />
                <Main onAddToCart={this.handleAddToCart} />
                <Footer />
            </>
        );
    }
}

export default App;