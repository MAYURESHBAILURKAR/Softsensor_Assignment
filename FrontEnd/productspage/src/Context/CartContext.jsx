import React, { useContext } from "react";
import { useState } from "react";

export const CartContext = React.createContext();

function CartDataContext({ children }) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handleClick = (el, id) => {
    const checkProductInCart = data.find((item) => item.id === el.id);
    if (checkProductInCart) {
      const updatedCartItems = data.map((cartProduct) => {
        if (cartProduct.id === el.id) alert(`Product already in cart`);
        return cartProduct;
      });
      setData(updatedCartItems);
    } else {
      setCount(count + 1);
      setData([...data, { ...el }]);
    }
  };

  const handleRemove = (id) => {
    let handleDelete = data.filter((el) => el.id != id);
    setData(handleDelete);
    setCount(count - 1);
  };
  console.log(data, count);

  let value = { count, data, handleClick, handleRemove };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartDataContext;
