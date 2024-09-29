import { createContext, useState, useEffect } from "react";
import React from "react";

export const MyContext = createContext({});

export const Context = ({ children }) => {
  const [pizzasApi, setPizzasApi] = useState([]);
  const [pizzaCart, setPizzaCart] = useState([]);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    userFetch();
  }, []);

  useEffect(() => {
    if (pizzasApi.length > 0) {
      setPizzaCart(pizzasApi.map((pizza) => ({ ...pizza, cantidad: 0 })));
    }
  }, [pizzasApi]);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  async function userFetch() {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const pizzasApi = await response.json();
    setPizzasApi(pizzasApi);
  }

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        alert("Error al obtener el perfil");
      }
    } catch (error) {
      console.error("Error en getProfile:", error);
    }
  };

  const logout = () => {
    console.log("Logging out...");
    setToken(null);
    setEmail(null);
  };

  const incrementarCantidad = (index) => {
    const actualizarCart = [...pizzaCart];
    actualizarCart[index].cantidad += 1;
    setPizzaCart(actualizarCart);
  };

  const disminuirCantidad = (index) => {
    const actualizarCart = [...pizzaCart];
    if (actualizarCart[index].cantidad > 1) {
      actualizarCart[index].cantidad -= 1;
    } else {
      actualizarCart.splice(index, 1);
    }
    setPizzaCart(actualizarCart);
  };

  const totalPrice = pizzaCart.reduce(
    (total, pizza) => total + pizza.price * pizza.cantidad,
    0
  );

  const formatTotal = (amount) => {
    return amount.toLocaleString("es-ES", {
      style: "currency",
      currency: "CLP",
    });
  };

  const login = async (mail, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: mail, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setToken(data.token);
        setEmail(data.email);
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  const register = async (mail, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: mail, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setToken(data.token);
        setEmail(data.email);
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.error("Error en register:", error);
    }
  };

  const globalState = {
    pizzasApi,
    totalPrice,
    disminuirCantidad,
    incrementarCantidad,
    pizzaCart,
    logout,
    login,
    register,
    token,
    email,
    formatTotal,
    getProfile,
  };

  return (
    <MyContext.Provider value={globalState}>{children}</MyContext.Provider>
  );
};
