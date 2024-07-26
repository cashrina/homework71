import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { selectPizzaFetching, selectPizzas } from "../../store/pizzaSlice.ts";
import { useEffect } from "react";
import { deletePizza, fetchPizza } from "../../store/pizzaThunks.ts";
import Spinner from "../../Spinner/Spinner.tsx";
import { Pizza } from "../../types.ts";
import { addPizza } from "../../store/cartSlice.ts";
import {NavLink, useLocation} from "react-router-dom";

const Dishes = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(selectPizzas);
    const isFetching = useAppSelector(selectPizzaFetching);

    useEffect(() => {
        dispatch(fetchPizza());
    }, [dispatch]);

    const removeDish = async (id: string) => {
        try {
            dispatch(deletePizza(id));
            dispatch(fetchPizza());
        } catch (error) {
            console.error("Failed to delete the pizza: ", error);
        }
    };

    const addDishToCart = (dish: Pizza) => {
        dispatch(addPizza(dish));
    };

    return isFetching ? (
        <Spinner/>
    ) : (
        <div>
            {location.pathname === "/admin/dishes" && (
                <NavLink to="/newDish" className="btn btn-success shadow-lg">Add new Dish</NavLink>
            )}
            <div className="d-flex flex-row align-items-around my-4 gap-3 col-lg-12">
                {pizzas.map((pizza) => (
                    <div
                        className="card shadow-lg bg-body-tertiary"
                        style={{width: "18rem", height: "23rem", cursor: "pointer"}}
                        key={pizza.id}
                        onClick={() => addDishToCart(pizza)}
                    >
                        <img className="card-img-top" src={pizza.image} alt="Card image cap" style={{height: "13rem"}}/>
                        <div className="card-body">
                            <h5 className="card-title text-success">{pizza.title}</h5>
                            <p className="card-text">{pizza.price} KGS</p>
                            {location.pathname === "/admin/dishes" && (
                                <div className="d-flex justify-content-end mt-auto">
                                    <button className="btn btn-danger me-3" onClick={() => removeDish(pizza.id)}>Delete
                                    </button>
                                    <NavLink className="btn btn-primary" to={`/edit/${pizza.id}`}>Edit</NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Dishes;
