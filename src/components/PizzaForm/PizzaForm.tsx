import {ApiPizza, PizzaMutation} from "../../types.ts";
import * as React from "react";

interface Props {
    onSubmit: (dish: ApiPizza) => void;
    existingPizza?: ApiPizza;
    isLoading?: boolean;
}

const emptyState: PizzaMutation = {
    title: '',
    price: '',
    image: '',
};
const PizzaForm: React.FC<Props> = (onSubmit, existingPizza, isLoading = false) => {
    const initialState: PizzaMutation = existingPizza
        ? {...existingPizza, price: existingPizza.price.toString()}
        : emptyState;

    const [pizzaMutation, setPizzaMutation] = React.useState<PizzaMutation>(initialState);

    const changePizza = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPizzaMutation((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onSubmit({
            ...pizzaMutation,
            price: parseFloat(pizzaMutation.price),
        });
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
                    value={pizzaMutation.title}
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
                    value={pizzaMutation.price}
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
                    value={pizzaMutation.image}
                    onChange={changePizza}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>

        </form>
    );
};

export default PizzaForm;