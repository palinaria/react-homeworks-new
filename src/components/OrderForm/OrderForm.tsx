import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './OrderForm.css';

const OrderForm: React.FC = () => {
    const [formData, setFormData] = useState({
        street: '',
        house: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Order placed for ${formData.street}, house ${formData.house}`);
    };

    return (
        <form onSubmit={handleSubmit} className="order_form">
            <div className="form_group">
                <label htmlFor="street">Street</label>
                <Input
                    id="street"
                    type="text"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Enter your street"
                />
            </div>
            <div className="form_group">
                <label htmlFor="house">House</label>
                <Input
                    id="house"
                    type="text"
                    value={formData.house}
                    onChange={handleChange}
                    placeholder="Enter your house number"
                />
            </div>
            <Button  type="submit">Order</Button>
        </form>
    );
};

export default OrderForm;
