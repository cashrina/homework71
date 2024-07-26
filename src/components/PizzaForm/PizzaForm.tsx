import { PizzaMutation } from "../../types.ts";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { selectPizzaCreating, selectPizzas } from "../../store/pizzaSlice.ts";
import { createPizza, updatePizza, fetchOnePizza } from "../../store/pizzaThunks.ts";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const emptyState: PizzaMutation = {
    title: '',
    price: '',
    image: '',
};

const PizzaForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isCreating = useAppSelector(selectPizzaCreating);
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(selectPizzas);

    const [pizzaMutationState, setPizzaMutationState] = React.useState<PizzaMutation>(emptyState);

    useEffect(() => {
        if (id) {
            const pizza = pizzas.find(p => p.id === id);
            if (pizza) {
                setPizzaMutationState({
                    title: pizza.title,
                    price: pizza.price.toString(),
                    image: pizza.image
                });
            } else {
                dispatch(fetchOnePizza(id));
            }
        } else {
            setPizzaMutationState(emptyState);
        }
    }, [id, pizzas, dispatch]);

    const changePizza = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPizzaMutationState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const body = {
                ...pizzaMutationState,
                price: parseInt(pizzaMutationState.price)
            }
            if (id !== undefined) {
                await dispatch(updatePizza({id, apiPizza: body}));
                toast.success("Pizza successfully updated!");
            } else {
                await dispatch(createPizza({ ...pizzaMutationState })).unwrap();
                toast.success("Pizza successfully created!");
            }
            navigate("/admin");
            setPizzaMutationState(emptyState);
        } catch (e) {
            toast.error('Could not save Pizza');
        }
    };

    return (
        <form className="col-md-6" onSubmit={onFormSubmit}>
            <h4 className="mb-5 text-primary text-center">Pizza time</h4>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="form-control my-2"
                    value={pizzaMutationState.title}
                    onChange={changePizza}
                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    required
                    className="form-control my-2"
                    value={pizzaMutationState.price}
                    onChange={changePizza}
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    required
                    className="form-control my-2"
                    value={pizzaMutationState.image}
                    onChange={changePizza}
                />
            </div>

            <button className="btn btn-primary" type="submit" disabled={isCreating}>
                {id ? 'Save' : 'Add'}
            </button>
        </form>
    );
};

export default PizzaForm;
