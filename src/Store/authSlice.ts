import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: {
        email: string | null;
    } | null;
}

const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string }>) => {
            state.user = { email: action.payload.email };
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;