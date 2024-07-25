import {PizzaMutation} from "../../types.ts";
import * as React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectPizzaCreating} from "../../store/pizzaSlice.ts";
import {createPizza} from "../../store/pizzaThunks.ts";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const emptyState: PizzaMutation = {
    title: '',
    price: '',
    image: '',
};
const PizzaForm = () => {
    const navigate = useNavigate();
    const isCreating = useAppSelector(selectPizzaCreating);
    const dispatch = useAppDispatch();

    const [pizzaMutationState, setPizzaMutationState] = React.useState<PizzaMutation>(emptyState);

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
            await dispatch(createPizza({...pizzaMutationState})).unwrap();
            navigate("/admin");
            toast.success("Pizza successfully created!");
        } catch (e) {
            toast.error('Could not create Pizza');
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
            <button type="submit" className="btn btn-primary mt-3" disabled={isCreating}>Submit</button>

        </form>
    );
};

export default PizzaForm;