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

    test('renders item details', () => {
        render(<OrderItem item={item} />);
        expect(screen.getByText('Pizza')).toBeInTheDocument();
        expect(screen.getByText('$12.99')).toBeInTheDocument();
        expect(screen.getByRole('spinbutton')).toHaveValue(1);
        expect(screen.getByAltText('Pizza')).toBeInTheDocument();
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
        const btn = screen.getByRole('button', { name: '×' });
        fireEvent.click(btn);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'cart/removeItem',
            payload: '1',
        });
    });
});
