import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink to="/admin" className="navbar-brand">
                    Turtie Pizza Admin
                </NavLink>
                <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
                    <li className="nav-item">
                        <NavLink to="/admin/dishes" className="nav-link">
                            Dishes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/admin/orders" className="nav-link">
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;