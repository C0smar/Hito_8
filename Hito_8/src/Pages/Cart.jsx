import React, { useState, useContext } from "react";
import CartCardPizza from "../components/CartCardPizza";
import { MyContext } from "../Context";

const Cart = () => {
  const {
    pizzaCart,
    incrementarCantidad,
    disminuirCantidad,
    totalPrice,
    token,
  } = useContext(MyContext);
  const enviarCompra = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(pizzaCart),
      });

      if (response.ok) {
        alert("Compra realizada con éxito");
      } else {
        alert("Error al realizar la compra");
      }
    } catch (error) {
      console.error("Error en enviarCompra:", error);
    }
  };

  return (
    <div>
      <div className="grilla">
        {pizzaCart.map((pizza, index) => (
          <div key={index}>
            <CartCardPizza pizza={pizza} />
            <div className="cajaBtn">
              <button
                className="btnDisminuir"
                onClick={() => disminuirCantidad(index)}
              >
                -
              </button>

              <button
                className="btnIncremento"
                onClick={() => incrementarCantidad(index)}
              >
                +
              </button>
            </div>
            <p className="subTotal">
              Subtotal: ${pizza.price * pizza.cantidad}
            </p>
          </div>
        ))}
      </div>

      <div className="cajaTotal">
        <h2 className="totalCompra"> 🛒Total de la compra: ${totalPrice}</h2>
        <button
          className={`btnTotal ${!token ? "disabled" : ""}`}
          onClick={enviarCompra}
          disabled={!token}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
