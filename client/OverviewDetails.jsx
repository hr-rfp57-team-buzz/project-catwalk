import React from 'react';
import OverviewStyles from './OverviewStyles.jsx';

const OverviewDetails = (props) => {
  console.log('fashion', props.fashion);
  console.log(props.fashion[0]);
  let selectedStyle = '';
  let style1;
  let style2;
  let style3;
  let style4;
  let styling1;
  let styling2;
  let styling3;
  let styling4;
  if (props.fashion[0]) {
    selectedStyle = props.fashion[0].name;
    style1 = props.fashion[0].photos[0].thumbnail_url;
    style2 = props.fashion[1].photos[1].thumbnail_url;
    style3 = props.fashion[2].photos[2].thumbnail_url;
    style4 = props.fashion[3].photos[3].thumbnail_url;
    styling1 = {
      'background': 'url(' + style1 + ')',
      'background-size': 'cover',
      'background-position': 'center'
    };
    styling2 = {
      'background': 'url(' + style2 + ')',
      'background-size': 'cover',
      'background-position': 'center'
    };
    styling3 = {
      'background': 'url(' + style3 + ')',
      'background-size': 'cover',
      'background-position': 'center'
    };
    styling4 = {
      'background': 'url(' + style4 + ')',
      'background-size': 'cover',
      'background-position': 'center'
    };
  }
  return (
    <div className="po-details">
      <div className="po-ratings">
        <div className="po-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
        </div>
        <div className="po-reviews">Read all reviews</div>
      </div>
      <div className="po-category">{props.product.category}</div>
      <div className="po-product-name">{props.product.name}</div>
      <div className="po-price">${props.product.default_price}</div>
      <div className="po-style-name">
        <div>Style <i className="fas fa-chevron-right"></i></div>
        <div className="po-selected-style-name">{selectedStyle}</div>
      </div>
      <OverviewStyles fashion={props.fashion} />
      <div className="po-select-section">
        <select id="po-select-size">
          <option selected disabled>Select Size</option>
          <option>Extra Small</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </select>
        <select id="po-select-qty">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="po-add-to-bag">
        <button id="po-add-to-bag">Add to Bag <i className="fas fa-plus"></i></button>
        <button id="po-favorite"><i className="far fa-star"></i></button>
      </div>
    </div>
  );
};

export default OverviewDetails;