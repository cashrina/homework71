export interface Pizza {
    id: string;
    title: string;
    price: number;
    image: string;
}

export type ApiPizza = Omit<Pizza, 'id'>;

export interface PizzaId extends Pizza {
    id: string;
}

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

export interface CartDish {
    dish: Pizza;
    amount: number;
}

export interface Customer {
    name: string;
    address: string;
    phone: string;
}

export interface ApiOrder {
    customer: Customer;
    dishes: CartDish[];
}

export interface ApiOrders {
    [id: string]: ApiOrder;
}

export interface Order extends ApiOrder {
    id: string;
    totalPrice: number;
}

export interface OrderId {
    [id: string]: number;
}