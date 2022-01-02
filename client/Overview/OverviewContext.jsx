import React, {useState, useEffect, createContext} from 'react';
import { resetSelectedStyle, sortSizes } from './OverviewHelper.jsx';

import axios from 'axios';

export const OverviewContext = createContext();

export const OverviewProvider = (props) => {
  const defaultProduct = {
    id: '',
    category: '',
    name: '',
    slogan: '',
    description: '',
    'style_name': '',
    'original_price': '',
    'sale_price': '',
    photos: [],
    sizes: []
  };

  const defaultAllStyles = [];

  const [product, setProduct] = useState(defaultProduct);
  const [allStyles, setAllStyles] = useState(defaultAllStyles);

  let productPending;
  let stylePending;

  const updateAllStyles = (index) => {
    const stylesClone = allStyles.slice();
    resetSelectedStyle(stylesClone);
    const selected = stylesClone[index];
    console.log('selected', selected);
    selected.selected = true;
    const productClone = Object.assign({}, product);
    productClone['style_name'] = selected.name;
    productClone['sizes'] = sortSizes(selected);
    productClone['original_price'] = selected.original_price;
    productClone['sale_price'] = selected.sale_price;
    productClone['photos'] = selected.photos;
    setProduct(productClone);
    setAllStyles(stylesClone);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        productPending = res.data[0];
        const id = res.data[0].id;
        return axios.get(`http://localhost:3000/products/${id}/styles`);
      })
      .then((res) => {
        stylePending = Object.assign({}, res.data.results[0]);
        stylePending['style_name'] = stylePending['name'];
        delete stylePending['name'];
        stylePending['sizes'] = sortSizes(stylePending);
        delete stylePending['skus'];
        Object.assign(productPending, stylePending);
        setProduct(productPending);
        resetSelectedStyle(res.data.results);
        res.data.results[0].selected = true;
        setAllStyles(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <OverviewContext.Provider value={[product, allStyles, updateAllStyles]}>
      {props.children}
    </OverviewContext.Provider>
  );
};