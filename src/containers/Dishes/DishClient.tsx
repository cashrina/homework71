import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectPizzas} from "../../store/pizzaSlice.ts";
import {useEffect} from "react";
import {fetchPizza} from "../../store/pizzaThunks.ts";
import {Pizza} from "../../types.ts";
import {addPizza,} from "../../store/cartSlice.ts";

const DishClient = () => {
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(selectPizzas);

    useEffect(() => {
        dispatch(fetchPizza());
    }, [dispatch]);

    const addDishToCart = (dish: Pizza) => {
        dispatch(addPizza(dish));
    };


    return (
        <div className="container my-4">
            <div className="row row-cols-1 row-cols-md-4 g-5">
                {pizzas.map((pizza) => (
                    <div className="col" key={pizza.id}>
                        <div
                            className="card shadow-lg bg-body-tertiary"
                            style={{cursor: "pointer"}}
                            onClick={() => addDishToCart(pizza)}>

                            <img className="card-img-top" src={pizza.image} alt="Card image cap"
                                 style={{height: "13rem"}}/>
                            <div className="card-body">
                                <h5 className="card-title text-success">{pizza.title}</h5>
                                <p className="card-text">{pizza.price} KGS</p>
                            </div>
                        </div>
                    </div>

                ))}
                <button className="btn btn-primary">Checkout</button>
            </div>
        </div>

    );
};

export default DishClient;