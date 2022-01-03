import React, { useState } from 'react';
import OverviewStyles from './OverviewStyles.jsx';
import OverviewSizes from './OverviewSizes.jsx';
import OverviewQty from './OverviewQty.jsx';

const OverviewDetails = (props) => {

  const [qty, setQty] = useState(0);

  let sale = 'po-price';
  if (props.product.sale_price) {
    sale = 'po-price active';
  }

  const updateQty = (e) => {
    let qty = 0;
    for (let i = 0; i < props.product.sizes.length; i++) {
      if (props.product.sizes[i][0] === e.target.value) {
        qty += props.product.sizes[i][1];
      }
    }
    qty > 15 ? qty = 15 : qty = qty;
    setQty(qty);
  };

  return (
    <div className="po-details">
      <div className="po-rating-reviews">
        <div className="po-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <div className="po-reviews">Read all reviews</div>
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
        <OverviewSizes sizes={props.product.sizes} updateQty={updateQty} />
        <OverviewQty qty={qty} />
      </div>
      <div className="po-flex">
        <button className="po-add-to-bag">Add to Bag <i className="fas fa-plus"></i></button>
        <button className="po-favorite"><i className="far fa-star"></i></button>
      </div>
    </div>
  );
};

export default OverviewDetails;