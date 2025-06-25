import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import OrderItem from '../components/OrderItem/OrderItem';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

describe('OrderItem Component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
        jest.clearAllMocks();
    });

    const item = {
        id: '1',
        meal: 'Pizza',
        price: 12.99,
        quantity: 1,
        img: 'pizza.jpg',
        instructions: 'Delicious cheesy pizza',
    };

    test('renders item details with correct data attributes', () => {
        render(<OrderItem item={item} />);

        const name = screen.getByText('Pizza');
        const price = screen.getByText('$12.99');
        const quantity = screen.getByRole('spinbutton');
        const img = screen.getByAltText('Pizza');

        expect(name).toHaveAttribute('data-text-id', 'name');
        expect(price).toHaveAttribute('data-text-id', 'price');
        expect(quantity).toHaveValue(1);
        expect(img).toBeInTheDocument();
    });

    test('dispatches updateQuantity on valid quantity change', () => {
        render(<OrderItem item={item} />);
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '3' } });
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'cart/updateQuantity',
            payload: { id: '1', quantity: 3 },
        });
    });

    test('does not dispatch updateQuantity on invalid quantity (0)', () => {
        render(<OrderItem item={item} />);
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '0' } });
        expect(mockDispatch).not.toHaveBeenCalled();
    });

    test('dispatches removeItem on remove button click', () => {
        render(<OrderItem item={item} />);
        const btn = screen.getByRole('button', { name: 'remove' }); // <--- здесь изменено
        fireEvent.click(btn);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'cart/removeItem',
            payload: '1',
        });
    });


    test('renders product image with correct alt and data-testid', () => {
        render(<OrderItem item={item} />);

        const img = screen.getByTestId('item-img');

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'pizza.jpg');
        expect(img).toHaveAttribute('alt', 'Pizza');
    });
});