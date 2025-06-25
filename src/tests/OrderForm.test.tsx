import { fireEvent, render, screen } from '@testing-library/react';
import OrderForm from '../components/OrderForm/OrderForm';

test('submits the form and shows alert with correct data', () => {

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<OrderForm />);


    const streetInput = screen.getByPlaceholderText('Enter your street') as HTMLInputElement;
    const houseInput = screen.getByPlaceholderText('Enter your house number') as HTMLInputElement;


    const submitButton = screen.getByRole('button', { name: /order/i });


    fireEvent.change(streetInput, { target: { value: 'Maple Street' } });
    fireEvent.change(houseInput, { target: { value: '101B' } });


    fireEvent.click(submitButton);


    expect(alertMock).toHaveBeenCalledWith('Order placed for Maple Street, house 101B');


    alertMock.mockRestore();
});
