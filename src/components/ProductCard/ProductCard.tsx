import { FC, useRef } from "react";
import "./ProductCard.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { MenuItem } from "../../interfaces/menuItem";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/cartSlice";

const ProductCard: FC<Omit<MenuItem, 'category'>> = ({ id, meal, price, instructions, img }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const handleAddClick = () => {
        const quantityValue = inputRef.current?.value ?? "1";
        const quantity = parseInt(quantityValue, 10);

        dispatch(addItem({
            id,
            meal,
            price,
            instructions,
            img,
            quantity: isNaN(quantity) ? 1 : quantity,
        }));
    };

    return (
        <div className="product_card">
            <img src={img} alt="product" className="prod_img" />
            <div className="price highlight">${parseFloat(price.toString()).toFixed(2)}</div>

            <div className="product_info">
                <div className="title">{meal}</div>
                <div className="description common_font">{instructions}</div>
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
