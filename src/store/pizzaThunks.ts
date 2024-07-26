import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiPizza, ApiPizzas, PizzaId, PizzaMutation} from "../types.ts";
import {RootState} from "../app/store.ts";
import axiosApi from "../axiosApi.ts";

export interface UpdateDishArg {
    id: string;
    apiPizza: ApiPizza;
}

export const createPizza = createAsyncThunk<void, PizzaMutation, { state: RootState }>
('/pizzas/create', async (apiPizza) => {
    await axiosApi.post('/pizzas.json', apiPizza)
});

export const fetchPizza = createAsyncThunk<PizzaId[], void, { state: RootState }>(
    'pizzas/fetchPizza',
    async () => {
        const {data: pizzas} = await axiosApi.get<ApiPizzas | null>('/pizzas.json');
        if (pizzas === null) {
            return [];
        }

        return Object.keys(pizzas).map((key: string) => {
            const dish = pizzas[key];
            return {
                id: key,
                ...dish,
            };
        });

    });

export const deletePizza = createAsyncThunk<void, string, { state: RootState }>(
    'pizzas/deletePizza',
    async (pizzaId) => {
        await axiosApi.delete(`/pizzas/${pizzaId}.json`);
    },
);

export const updatePizza = createAsyncThunk<void, UpdateDishArg, {state: RootState}> (
    'pizzas/updatePizza',
    async ({id, apiPizza}) => {
        await axiosApi.put(`/pizzas/${id}.json`, apiPizza);
    },
);

export const fetchOnePizza = createAsyncThunk<ApiPizza, string, { state: RootState }>(
    'pizzas/fetchOnePizza',
    async (id) => {
        try {
            const { data: pizza } = await axiosApi.get<ApiPizza>(`/pizzas/${id}.json`);
            if (!pizza) {
                throw new Error('Pizza not found');
            }
            return pizza;
        } catch (error) {
            console.error("Failed to fetch pizza:", error);
            throw error;
        }
    }
);


