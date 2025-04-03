import React from "react";
import "./ProductCard.css"
import product_img from "../../assets/product_img.png"

const ProductCard = ({title, price, description}) => {
    return (
        <div className="product_card">
            <img src={product_img} alt="product" className="prod_img" />
            <div className="product_info">
                <div className="title_price">
                    <div className="title">{title}</div>
                    <div className="price highlight">${price} USD</div>
                </div>
                <div className="description common_font">{description}</div>
                <div className="add_to_cart">
                    <div className="amount">1</div>
                    <button className="btn_add_cart btn btn_colored">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;