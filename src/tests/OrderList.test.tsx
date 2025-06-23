import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux';
import Order from '../components/Order/Order';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Order Component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
        jest.clearAllMocks();
    });

    test('renders empty cart message when no items are present', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue([]);

        render(<Order />);

        expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    });

    test('renders items in the cart and the order form', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue([
            { id: '1', meal: 'Pizza', price: 12.99, quantity: 1, img: 'pizza.jpg' },
            { id: '2', meal: 'Burger', price: 8.99, quantity: 2, img: 'burger.jpg' },
        ]);

        render(<Order />);

        expect(screen.getByText('Pizza')).toBeInTheDocument();
        expect(screen.getByText('Burger')).toBeInTheDocument();
        expect(screen.getByText(/finish your order/i)).toBeInTheDocument();


        expect(screen.getByPlaceholderText(/enter your street/i)).toBeInTheDocument();
    });


});
