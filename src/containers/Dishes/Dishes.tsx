import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectPizzaFetching, selectPizzas} from "../../store/pizzaSlice.ts";
import {useEffect} from "react";
import {fetchPizza} from "../../store/pizzaThunks.ts";
import Spinner from "../../Spinner/Spinner.tsx";

const Dishes = () => {
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(selectPizzas);
    const isFetching = useAppSelector(selectPizzaFetching);

    useEffect(() => {
        dispatch(fetchPizza());
    }, [dispatch]);

    
    return isFetching ? (
        <Spinner/>
    ) : (
        <div className="d-flex flex-row align-items-around my-4 gap-3 col-lg-12">
            {pizzas.map((pizza) => (
                <div className="card" style={{width: "18rem", height: "23rem"}} key={pizza.id}>
                    <img className="card-img-top" src={pizza.image} alt="Card image cap" style={{height: "27rem"}} />
                    <div className="card-body">
                        <h5 className="card-title">{pizza.title}</h5>
                        <p className="card-text">{pizza.price} KGS</p>
                        <button className="btn btn-danger">Delete</button>
                        <a href="/edit" className="btn btn-primary">Edit</a>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Dishes;