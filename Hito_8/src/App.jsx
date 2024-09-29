import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import RegisterPages from "./Pages/RegisterPages";
import LoginPages from "./Pages/LoginPages";
import Cart from "./Pages/Cart";
import Pizza from "./Pages/Pizza";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import { Context } from "./Context";
import { MyContext } from "./Context";
import { useContext } from "react";

function App() {
  const { token } = useContext(MyContext);

  return (
    <>
          
        <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={token ? <Navigate to="/" /> : <RegisterPages />}
            />
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <LoginPages />}
            />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
            />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
            
      
    </>
  );
}

export default App;
