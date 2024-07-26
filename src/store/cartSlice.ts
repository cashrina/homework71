import { CartPizza, Pizza } from "../types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    cartPizza: CartPizza[];
}

const initialState: CartState = {
    cartPizza: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizza: (state, { payload: pizza }: PayloadAction<Pizza>) => {
            const index = state.cartPizza.findIndex(
                (cartDish) => cartDish.pizza.id === pizza.id
            );

            if (index !== -1) {
                state.cartPizza[index].amount++;
            } else {
                state.cartPizza.push({
                    amount: 1,
                    pizza,
                });
            }
        },

        updatePizzas: (state, { payload: pizzas }: PayloadAction<Pizza[]>) => {
            const newCartPizza: CartPizza[] = [];
            state.cartPizza.forEach((cartPizza: CartPizza) => {
                const existingCartPizza: Pizza | undefined = pizzas.find(
                    (pizza: Pizza) => cartPizza.pizza.id === pizza.id
                );

                if (!existingCartPizza) {
                    return;
                }

                newCartPizza.push({
                    ...cartPizza,
                    pizza: existingCartPizza,
                });
            });
            state.cartPizza = newCartPizza;
        },
        clearPizza: (state) => {
            state.cartPizza = [];
        },

    },
    selectors: {
        selectPizzaCard: (state) => state.cartPizza,
    }
});

export const cartReducer = cartSlice.reducer;
export const { addPizza, updatePizzas } = cartSlice.actions;
export const {selectPizzaCard} = cartSlice.selectors;
