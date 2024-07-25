import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Admin from "./containers/Admin/Admin.tsx";
import Orders from "./containers/Orders/Orders.tsx";
import Dishes from "./containers/Dishes/Dishes.tsx";

const App = () => {
  return (
    <>
        <Toolbar />
        <div className="container">
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/dishes" element={<Dishes />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    </>
  )
};

export default App
