import React from 'react';
import OverviewStyles from './OverviewStyles.jsx';

class OverviewDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="po-details">
        <div className="po-ratings">
          <div className="po-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
          </div>
          <div className="po-reviews">Read all reviews</div>
        </div>
        <div className="po-category">{this.props.product ? this.props.product.category : 'placeholder'}</div>
        <div className="po-product-name">{this.props.product ? this.props.product.name : 'placeholder'}</div>
        <div className="po-price">${this.props.product ? this.props.product.default_price : 'placeholder'}</div>
        <div className="po-style-name">
          <div>Style <i className="fas fa-chevron-right"></i></div>
          <div className="po-selected-style-name">{this.props.product ? this.props.product.selectedStyle : 'placeholder'}</div>
        </div>
        <OverviewStyles variations={this.props.variations} handleStyleChange={this.props.handleStyleChange} />
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
  }
}

export default OverviewDetails;