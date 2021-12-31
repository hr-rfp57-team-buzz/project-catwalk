import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const OverviewContext = createContext();

export const OverviewProvider = (props) => {
  const defaultProduct = {
    id: '',
    category: '',
    name: '',
    description: '',
    slogan: '',
    sizes: [],
    allStyles: []
  };

  const defaultAllStyles = [];

  const [product, setProduct] = useState(defaultProduct);
  const [allStyles, setAllStyles] = useState(defaultAllStyles);
  let productPending;
  let stylePending;
  let styles;

  const resetSelection = (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i].selected = false;
    }
  };

  const sortSizes = (product) => {
    const result = [];
    for (let key in product.skus) {
      result.push([product.skus[key]['size'], product.skus[key]['quantity'], key]);
    }
    return result;
  };

  const updateAllStyles = (index) => {
    const clone = allStyles.slice();
    resetSelection(clone);
    const selected = clone[index];
    selected.selected = true;
    const productClone = Object.assign({}, product);
    productClone['style_name'] = selected.name;
    productClone['original_price'] = selected.original_price;
    productClone['sale_price'] = selected.sale_price;
    productClone['photos'] = selected.photos;
    productClone['counter'] = 1;
    setAllStyles(clone);
    setProduct(productClone);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        productPending = res.data[0];
        const id = res.data[0].id;
        return axios.get(`http://localhost:3000/products/${id}/styles`);
      })
      .then((res) => {
        stylePending = res.data.results[0];
        stylePending['style_name'] = stylePending['name'];
        delete stylePending['name'];
        stylePending['sizes'] = sortSizes(stylePending);
        delete stylePending['skus'];
        Object.assign(productPending, stylePending);
        setProduct(productPending);
        resetSelection(res.data.results);
        res.data.results[0].selected = true;
        setAllStyles(res.data.results);
      });

  }, []);

  return (
    <OverviewContext.Provider value={[product, setProduct, allStyles, updateAllStyles]}>
      {props.children}
    </OverviewContext.Provider>
  );
};