import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICartState} from "../types";
import {fetchCartProducts} from "../api";
import {IProduct} from "../../../entities";

const initialState: ICartState = {
    products: [],
    status: 'idle',
};

export const fetchData = createAsyncThunk('cart/fetchData', fetchCartProducts);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<{id: IProduct['id']}>) => {
            const product = state.products.find(el => el.id === action.payload.id);
            if (product) {
                product.count += 1;
            }
        },
        decrement: (state, action: PayloadAction<{id: IProduct['id']}>) => {
            const product = state.products.find(el => el.id === action.payload.id);
            if (product) {
                product.count -= 1;
            }
        },
        deleteProduct: (state, action: PayloadAction<{id: IProduct['id']}>) => {
            state.products = state.products.filter(el => el.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const {
    increment,
    decrement,
    deleteProduct
} = cartSlice.actions;

export default cartSlice.reducer;
