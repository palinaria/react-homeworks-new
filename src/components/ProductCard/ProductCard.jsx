import React from "react";
import "./ProductCard.css"
import Button from "../Button/Button.jsx";

const ProductCard = ({title, price, description,image}) => {
    return (
        <div className="product_card">
            <img src={image} alt="product" className="prod_img" />
            <div className="product_info">
                <div className="title_price">
                    <div className="title">{title}</div>
                    <div className="price highlight">${price} USD</div>
                </div>
                <div className="description common_font">{description}</div>
                <div className="add_to_cart">
                    <div className="amount">1</div>
                    <Button >Add to cart</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;