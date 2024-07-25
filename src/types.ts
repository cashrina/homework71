export interface Pizza {
    id: string;
    title: string;
    price: number;
    image: string;
}

export type ApiPizza = Omit<Pizza, 'id'>;

export interface ApiPizzas {
    [id: string]: ApiPizza;
}

export interface PizzaMutation {
    title: string;
    price: string;
    image: string;
}

export interface CartPizza {
    pizza: Pizza;
    amount: number;
}