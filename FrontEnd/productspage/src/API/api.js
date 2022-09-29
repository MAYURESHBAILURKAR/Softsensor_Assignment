// API calls through Node ==========================================================>

export const getProducts = async () => {
  // console.log(order)
  return fetch(`http://localhost:8080`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return { data };
    });
};

export const getProductsById = async ( id ) => {
    // console.log(id)
  return fetch(`http://localhost:8080/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data)
      return { data };
    });
};


// Direct API calls ==========================================================>

// export const getProducts = async () => {  
//   return fetch(`https://fakestoreapi.com/products`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return { data };
//     });
// };

// export const getProductsById = async ( id ) => { 
//   return fetch(`https://fakestoreapi.com/products/${id}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       // console.log(data)
//       return { data };
//     });
// };