import {createSlice} from "@reduxjs/toolkit";
import {createPizza, deletePizza, fetchPizza, updatePizza, fetchOnePizza} from "./pizzaThunks.ts";
import {ApiPizza, PizzaId} from "../types.ts";
import {toast} from "react-toastify";

export interface PizzaState {
    item: PizzaId[];
    isFetching: boolean;
    isCreating: boolean;
    isDeleting: false | string;
    isUpdating: boolean;
    isOnePizza: boolean;
    oneDish: null | ApiPizza;
}

export const initialState: PizzaState = {
    item:[],
    isFetching: false,
    isCreating: false,
    isDeleting: false,
    isUpdating: false,
    isOnePizza: false,
    oneDish: null,
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
        });

        builder.addCase(deletePizza.pending, (state, { meta : {arg : dishId}  }) => {
            state.isDeleting = dishId;
        }).addCase(deletePizza.fulfilled, (state) => {
            state.isDeleting = false;
            toast.success('Pizza was delete!');
        }).addCase(deletePizza.rejected, (state) => {
                state.isDeleting = false;
        });

        builder.addCase(updatePizza.pending, (state) => {
            state.isUpdating = true;
        }).addCase(updatePizza.fulfilled, (state) => {
            state.isUpdating = false;
        }).addCase(updatePizza.rejected, (state) => {
            state.isUpdating = false;
        });

        builder
            .addCase(fetchOnePizza.pending, (state) => {
                state.oneDish = null;
                state.isOnePizza = true;
            })
            .addCase(fetchOnePizza.fulfilled, (state, { payload: apiDish }) => {
                state.oneDish = apiDish;
                state.isOnePizza = false;
            })
            .addCase(fetchOnePizza.rejected, (state) => {
                state.isOnePizza = false;
            });
    },
    selectors: {
        selectPizzaCreating: (state) => state.isCreating,
        selectPizzas:(state) => state.item,
        selectPizzaFetching: (state) => state.isFetching,
        selectPizzaDelete: (state) => state.isDeleting,
        selectPizzaOne: (state) => state.isOnePizza,
    }
});

export const pizzaReducer = pizzaSlice.reducer;

export const {selectPizzaCreating,
    selectPizzas,
    selectPizzaFetching,
    selectPizzaDelete,
    selectPizzaOne,
} = pizzaSlice.selectors;