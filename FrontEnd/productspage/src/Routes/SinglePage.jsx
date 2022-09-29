import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../API/api";
import { CartContext } from "../Context/CartContext";
import styles from "../Styles/SinglePage.module.css";

const SinglePage = () => {
  const [data, setData] = useState([]);
  const { handleClick } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const getData = async (id) => {
    setIsLoading(true);
    console.log(id);
    try {
      let data = await getProductsById(id);
      //   console.log(data.data);
      setData(data.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  console.log(data);
  useEffect(() => {
    getData(params.id);
  }, [params.id]);
  return (
    <div>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        data && (
          <>
            <div className={styles.singlePage_btn}>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
            </div>

            <div key={data.id} className={styles.SingleCard_cont}>
              <div className={styles.Singleimg_cont}>
                <img src={data.image} alt={data.image} />
              </div>
              <div className={styles.Details_cont}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p>Price: {`$ ${data.price}`}</p>
                <div className={styles.singlePage_btn}>
                  <button onClick={() => handleClick(data)}>Add To Cart</button>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default SinglePage;
