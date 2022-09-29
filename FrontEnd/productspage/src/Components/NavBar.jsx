import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { count } = useContext(CartContext);
  console.log(count);
  const link = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/cart",
      title: `Cart ${count == 0 ? "" : count + " " + "items"}`,
    },
  ];

  return (
    <nav className={styles.NavDiv}>
      {link.map((el) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={el.path}
          to={el.path}
        >
          {el.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
