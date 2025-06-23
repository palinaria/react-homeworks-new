import React from 'react';
import {useDispatch} from 'react-redux';
import {updateQuantity, removeItem} from '../../Store/cartSlice';
import {CartProduct} from '../../interfaces/menuItem';
import './OrderItem.css';
import { formatPrice } from "../../../utils/formatPrice";

interface OrderItemProps {
    item: CartProduct;
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(e.target.value, 10);
        if (quantity > 0) {
            dispatch(updateQuantity({ id: item.id, quantity }));
        }
    };

    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <div className="order_item">
            <div className="order_item__left">
                <img src={item.img} alt={item.meal} className="order_img" data-testid="item-img" />
                <div className="product_title" data-text-id="name">{item.meal}</div>
            </div>

            <div className="order_item__right">
                <div className="order_price" data-text-id="price">
                    {formatPrice(item.price)}
                </div>
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    className="order_quantity"
                    aria-label="quantity"
                />
                <button onClick={handleRemove} className="order_remove" aria-label="remove">×</button>
            </div>
        </div>
    );
};

export default OrderItem;
