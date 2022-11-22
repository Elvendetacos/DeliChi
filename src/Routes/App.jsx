import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessRegister from "../Pages/BusinessRegister";
import ListRestaurant from "../Pages/ListRestaurant";
import RestauranrEdit from "../Pages/RestaurantEdit";
import Home from "../Pages/Home";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BusinessRegister />}></Route>
                <Route path="/List" element={<ListRestaurant />}></Route>
                <Route path="/Restaurant" element={<RestauranrEdit />}></Route>
                <Route path="/Home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
     );
}

export default App;