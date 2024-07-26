import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { selectPizzaFetching, selectPizzas } from "../../store/pizzaSlice.ts";
import { useEffect } from "react";
import { deletePizza, fetchPizza } from "../../store/pizzaThunks.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
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

    return isFetching ? (
        <Spinner/>
    ) : (
        <div>
            <div className="d-flex">
                {location.pathname === "/admin/dishes" && (
                    <NavLink to="/newDish" className="btn btn-success shadow-lg mt-3 mb-2 mx-2 ms-auto px-5">Add new
                        Dish</NavLink>
                )}
            </div>
            <div className="container my-4">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {pizzas.map((pizza) => (
                        <div className="col" key={pizza.id}>
                            <div
                                className="card shadow-lg bg-body-tertiary"
                            >
                                <img className="card-img-top" src={pizza.image} alt="Card image cap"
                                     style={{height: "13rem"}}/>
                                <div className="card-body">
                                    <h5 className="card-title text-success">{pizza.title}</h5>
                                    <p className="card-text">{pizza.price} KGS</p>
                                    {location.pathname === "/admin/dishes" && (
                                        <div className="d-flex justify-content-end mt-auto">
                                            <button className="btn btn-danger me-3"
                                                    onClick={() => removeDish(pizza.id)}>Delete
                                            </button>
                                            <NavLink className="btn btn-primary" to={`/edit/${pizza.id}`}>Edit</NavLink>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
    export default Dishes;
