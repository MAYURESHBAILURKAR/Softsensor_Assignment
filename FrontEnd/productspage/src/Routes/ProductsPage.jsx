import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../API/api";
import { CartContext } from "../Context/CartContext";
import styles from "../Styles/ProductPage.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [slice, setSlice] = useState([]);
  const [count, setCount] = useState(10);
  const { handleClick } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      let resdata = await getProducts();
      setData(resdata.data);
      setSlice(resdata.data.slice(0, 10));
      setIsLoading(false);
      // console.log(resdata.data);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  // console.log(slice);
  const fetchData = () => {
    // console.log("indside");
    setCount(count + 10);
    let sli = data;
    let sliced = sli.slice(count, count + 10);
    setSlice((prev) => [...prev, ...sliced]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <InfiniteScroll
          className={styles.MainCard_cont}
          dataLength={data.length}
          next={fetchData}
          hasMore={true}
        >
          {slice.map((el) => (
            <div key={el.id} className={styles.Card_cont}>
              <div className={styles.Details_cont}>
                <h5>{`Catergory: ${el.category}`}</h5>
              </div>
              <Link to={`/${el.id}`} key={el.id}>
                {
                  <div className={styles.img_cont}>
                    <img src={el.image} alt={el.image} />
                  </div>
                }
              </Link>
              <div className={styles.Details_cont}>
                <Link
                  to={`/${el.id}`}
                  key={el.id}
                  className={styles.Details_cont}
                >
                  <h3>{`${el.title.slice(0, 40)}.....`}</h3>
                  <p>{`${el.description.slice(0, 60)}.....`}</p>
                </Link>
                <p>Price: {`$ ${el.price}`}</p>
                <div className={styles.Review_div}>
                  <p>{`Reviews ${el.rating.count}`}</p>
                  <p>{`Rating ${el.rating.rate}`}</p>
                </div>
                <div className={styles.btn_div}>
                  <button onClick={() => handleClick(el, el.id)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ProductsPage;
