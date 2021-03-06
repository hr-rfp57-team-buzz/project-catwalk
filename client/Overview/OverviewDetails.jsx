import React, { useState, useRef } from 'react';
import OverviewStyles from './OverviewStyles.jsx';
import OverviewSizes from './OverviewSizes.jsx';
import OverviewQty from './OverviewQty.jsx';
import ImportStarsForProduct from '../RatingReviews/ImportStarsForProduct.jsx';

const OverviewDetails = (props) => {

  const [qty, setQty] = useState(0);
  const selectedQty = useRef('1');
  const selectedSize = useRef(null);

  let sale = 'po-price';
  if (props.product.sale_price) {
    sale = 'po-price active';
  }

  const updateSize = (e) => {
    selectedSize.current = e.target.value;
    let qty = 0;
    for (let i = 0; i < props.product.sizes.length; i++) {
      if (props.product.sizes[i][0] === e.target.value) {
        qty += props.product.sizes[i][1];
      }
    }
    qty < selectedQty.current ? selectedQty.current = '1' : selectedQty.current = selectedQty.current;
    qty > 15 ? qty = 15 : qty = qty;
    setQty(qty);
  };

  const updateQty = (e) => {
    selectedQty.current = e.target.value;
  };

  const addToCart = () => {
    if (!selectedSize.current) {
      return;
    }
    console.log(props.product.style_name, selectedSize.current, selectedQty.current);
  };

  return (
    <div className="po-details">
      <div className="po-rating-reviews">
        <ImportStarsForProduct />
        <a href="#ratings-reviews"><div className="po-reviews">Read all reviews</div></a>
      </div>
      <div className="po-category">{props.product.category}</div>
      <div className="po-product-name">{props.product.name}</div>
      <div className={sale}>
        <div className="po-sale">{props.product.sale_price ? '$' + props.product.sale_price : ''}</div>
        <div className="po-retail">{props.product.original_price ? '$' + props.product.original_price : ''}</div>
      </div>
      <div className="po-style-name">
        <div>Style <i className="fas fa-chevron-right"></i></div>
        <div className="po-style-name-selected">{props.product.style_name}</div>
      </div>
      <OverviewStyles allStyles={props.product.all_styles} updateProduct={props.updateProduct} />
      <div className="po-select-section">
        <OverviewSizes sizes={props.product.sizes} updateSize={updateSize} />
        <OverviewQty qty={qty} updateQty={updateQty} />
      </div>
      <div className="po-flex">
        <button onClick={addToCart} className="po-add-to-bag">Add to Bag <i className="fas fa-plus"></i></button>
        <button className="po-favorite"><i className="far fa-star"></i></button>
      </div>
      <div className="po-social-media">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  );
};

export default OverviewDetails;