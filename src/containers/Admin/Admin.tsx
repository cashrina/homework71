import {NavLink} from "react-router-dom";

const Admin = () => {
    return (
        <div className="my-4">
            <NavLink to="/newDish" className="btn btn-primary">Add new Dish</NavLink>
        </div>
    );
};

export default Admin;