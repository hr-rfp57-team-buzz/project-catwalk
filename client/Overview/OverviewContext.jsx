import React, {useState, createContext} from 'react';
export const OverviewContext = createContext();

export const OverviewProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);

  return (
    <OverviewContext.Provider value={[products, setProducts, styles, setStyles]}>
      {props.children}
    </OverviewContext.Provider>
  );
};