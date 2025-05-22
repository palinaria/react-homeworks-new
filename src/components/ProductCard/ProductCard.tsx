import React, {useRef} from "react";
import "./ProductCard.css";
import Button from "../Button/Button";
import Input from "../Input/Input"


export type CartProduct = {
    productId: string;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
};

type ProductCardProps = {
    productId: string;
    title: string;
    price: number | string;
    description: string;
    image: string;
    onAdd: (item: CartProduct) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ productId, title, price, description, image, onAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddClick = () => {
        const quantityValue = inputRef.current?.value ?? "1";
        const quantity = parseInt(quantityValue, 10);

        onAdd({
            productId,
            title,
            price: typeof price === "string" ? parseFloat(price) : price,
            description,
            image,
            quantity: isNaN(quantity) ? 1 : quantity,
        });
    };

    return (
        <div className="product_card">
            <img src={image} alt="product" className="prod_img" />
            <div className="price highlight">${parseFloat(price.toString()).toFixed(2)}</div>

            <div className="product_info">
                <div className="title">{title}</div>
                <div className="description common_font">{description}</div>
                <div className="add_to_cart">
                    <Input
                        type="number"
                        defaultValue="1"
                        min="1"
                        inputSize="small"
                        ref={inputRef}
                    />
                    <Button onClick={handleAddClick}>Add to cart</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;