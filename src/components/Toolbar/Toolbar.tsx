import {NavLink, useLocation} from "react-router-dom";

const Toolbar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    Turtie Pizza Admin
                </NavLink>
                {(location.pathname === "/admin/dishes" || location.pathname === "/admin/orders" || location.pathname === "/admin") ? (
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
                ) : null}
            </div>
        </nav>
    );
};

export default Toolbar;