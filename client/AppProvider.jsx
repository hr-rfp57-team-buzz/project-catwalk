import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = (props) => {

  const [productId, setProductId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        console.log('products', res.data);
        const id = res.data[0].id;
        setProductId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AppContext.Provider value={[productId, setProductId]}>
      {props.children}
    </AppContext.Provider>
  );
};
