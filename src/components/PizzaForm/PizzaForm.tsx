const PizzaForm = () => {
    return (
        <form className="col-md-6">
            <h4 className="mb-5 text-primary text-center">Pizza time</h4>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="form-control my-2"
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
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>

        </form>
    );
};

export default PizzaForm;