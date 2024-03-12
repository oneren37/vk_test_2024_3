import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {reducer} from "../../pages/Cart/model";

export const store = configureStore({
    reducer: {
        cart: reducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
