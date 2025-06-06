import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
import OrderItem from '../OrderItem/OrderItem';
import OrderForm from '../OrderForm/OrderForm';
import './Order.css';

const Order: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="order_wrapper">
            <h2 className="order_title">Finish your order</h2>
            {items.length > 0 ? (
                <div className="order_items">
                    {items.map((item) => (
                        <OrderItem key={item.id} item={item} />
                    ))}
                    <OrderForm />
                </div>
            ) : (
                <p className="order_empty">Your cart is empty</p>
            )}
        </div>
    );
};

export default Order;
