import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Orders from "./containers/Orders/Orders.tsx";
import Dishes from "./containers/Dishes/Dishes.tsx";
import PizzaForm from "./components/PizzaForm/PizzaForm.tsx";

const App = () => {
  return (
    <>
        <Toolbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Dishes />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/dishes" element={<Dishes />} />
                <Route path="/newDish" element={<PizzaForm />} />
                <Route path="/edit/:id" element={<PizzaForm />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    </>
  )
};

export default App
