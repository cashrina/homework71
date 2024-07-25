import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiPizza, ApiPizzas, PizzaId, PizzaMutation} from "../types.ts";
import {RootState} from "../app/store.ts";
import axiosApi from "../axiosApi.ts";

export interface UpdateDishArg {
    id: string;
    apiPizza: ApiPizza;
}

export const createPizza = createAsyncThunk<void, PizzaMutation, {state: RootState}>
('/pizzas/create',async (apiPizza) => {
    await axiosApi.post('/pizzas.json', apiPizza)
});

export const fetchPizza = createAsyncThunk<PizzaId[],void, {state: RootState}>(
    'pizzas/fetchPizza',
    async () => {
        const {data: pizzas} = await axiosApi.get<null | ApiPizzas>('/pizzas.json');
        if (pizzas === null) {
            return[];
        }

        let newPizzas: PizzaId[] = [];

        if (pizzas) {
            newPizzas = Object.keys(pizzas).map((key: string) => {
                const dish = pizzas[key];
                return {
                    id: key,
                    ...dish,
                };
            });
        }
        // thunkAPI.dispatch(updateDishes(newDishes));
        return newPizzas;
    });

        // return Object.keys(pizzas).map((id) => {
        //     console.log(id)
        // });






































// export const  fetchPizzas  = createAsyncThunk<
//     Pizza[],
//     string,
//     { dispatch: AppDispatch }>(
//         'pizzas/fetchPizzas', async (_, thunkAPI) => {
//             const pizzaResponse = await axiosApi.get<ApiPizzas | null>('/pizzas.json');
//             const pizzas = pizzaResponse.data;
//
//             let newPizzas: Pizza[] = [];
//
//             if (pizzas) {
//                 newPizzas = Object.keys(pizzas).map((key: string) => {
//                     const pizza = pizzas[key];
//                     return {id: key, ...pizza,};
//                 });
//             }
//             thunkAPI.dispatch(updatePizzas(newPizzas));
//             return newPizzas;
//     }
// );


//
// export const deletePizza = createAsyncThunk<void, string, {state: RootState}>(
//     'pizzas/deletePizza',
//     async (pizzaId) => {
//         await axiosApi.delete(`/pizzas/${pizzaId}.json`);
//     },
// );
//
// export const updatePizza = createAsyncThunk<void, UpdateDishArg, {state: RootState}> (
//     'pizzas/updatePizza',
//     async ({id, apiPizza}) => {
//         await axiosApi.put(`/pizzas/${id}.json`, apiPizza);
//     },
// );
//
//
// export const fetchOnePizza = createAsyncThunk<ApiPizza, string, {state: RootState}>(
//     'pizzas/fetchOnePizza',
//     async (id) => {
//         const { data: pizza } = await axiosApi.get<ApiPizza | null>(
//             `/dishes/${id}.json`,
//         );
//
//         if (pizza === null) {
//             throw new Error('Not found');
//         }
//
//         return pizza;
//     },
// );

