import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CartProduct} from "../interfaces/menuItem";


interface CartState {
    items:CartProduct[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartProduct>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        resetCart: (state) => {
            state.items = [];
        },
    },
});

export const selectTotalQuantity = (state: { cart: CartState }) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const { addItem, removeItem, updateQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;