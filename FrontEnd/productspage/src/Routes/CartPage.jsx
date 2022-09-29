import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import styles from "../Styles/CartPage.module.css";

const CartPage = () => {
  const { count, data, handleRemove } = useContext(CartContext);
  const navigate = useNavigate();
  // console.log(data,count)
  return (
    <>
      {count == 0 ? (
        <>
          <h2>Cart is Empty</h2>
          <div className={styles.Cart_btn}>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
          </div>
        </>
      ) : (
        <div>
          <div className={styles.Cart_btn}>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
          </div>
          <h2>No. of Items: {count}</h2>
          {data && (
            <div className={styles.CartMainCard_cont}>
              {data.map(
                (el) => (
                  <div key={el.id} className={styles.CartCard_cont}>
                    <div className={styles.Cartimg_cont}>
                      <img src={el.image} alt={el.image} />
                    </div>
                    <div>
                      <Link
                        to={`/${el.id}`}
                        key={el.id}
                        className={styles.Details_cont}
                      >
                        <h3>{`${el.title.slice(0, 40)}.....`}</h3>
                        <p>{`${el.description.slice(0, 20)}.....`}</p>
                      </Link>
                    </div>

                    <div>
                      <p>Cost: {` ${el.price}`}</p>
                      <button
                        onClick={() => handleRemove(el.id)}
                        className={styles.Cart_Removebtn}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
                // console.log(el.productBrand)
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default CartPage;
