import {createSlice} from "@reduxjs/toolkit";
import {createPizza, fetchPizza} from "./pizzaThunks.ts";
import {PizzaId} from "../types.ts";

export interface PizzaState {
    item: PizzaId[];
    isFetching: boolean;
    isCreating: boolean;
}

export const initialState: PizzaState = {
    item:[],
    isFetching: false,
    isCreating: false,
}

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPizza.pending, (state) => {
            state.isCreating = true;
        }).addCase(createPizza.fulfilled, (state) => {
            state.isCreating = false;
        }).addCase(createPizza.rejected, (state) => {
            state.isCreating = false;
        });

        builder.addCase(fetchPizza.pending, (state) => {
            state.isFetching = true;
        }).addCase(fetchPizza.fulfilled , (state, {payload: items}) => {
            state.isFetching = false;
            state.item = items;
        }).addCase(fetchPizza.rejected, (state) => {
            state.isFetching = false;
        })
    },
    selectors: {
        selectPizzaCreating: (state) => state.isCreating,
        selectPizzas:(state) => state.item,
        selectPizzaFetching: (state) => state.isFetching
    }
});

export const pizzaReducer = pizzaSlice.reducer;

export const {selectPizzaCreating,
    selectPizzas,
    selectPizzaFetching
} = pizzaSlice.selectors;