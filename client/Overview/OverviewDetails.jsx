import React from 'react';
import OverviewStyles from './OverviewStyles.jsx';

class OverviewDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sale = 'po-price';
    if (this.props.extra.sale_price) {
      sale = 'po-price active';
    }
    return (
      <div className="po-details">
        <div className="po-rating-reviews">
          <div className="po-rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
          </div>
          <div className="po-reviews">Read all reviews</div>
        </div>
        <div className="po-category">{this.props.product.category ? this.props.product.category : ''}</div>
        <div className="po-product-name">{this.props.product.name ? this.props.product.name : ''}</div>
        <div className={sale}>
          <div className="po-sale">{this.props.extra.sale_price ? '$' + this.props.extra.sale_price : ''}</div>
          <div className="po-retail">{this.props.extra.original_price ? '$' + this.props.extra.original_price : ''}</div>
        </div>
        <div className="po-style-name">
          <div>Style <i className="fas fa-chevron-right"></i></div>
          {/* <div className="po-selected-style-name">{this.props.variations.length > 0 ? this.props.variations.selected : ''}</div> */}
          <div className="po-style-name-selected">{this.props.extra.name ? this.props.extra.name : ''}</div>
        </div>
        <OverviewStyles variations={this.props.variations} handleStyleChange={this.props.handleStyleChange} />
        <div className="po-select-section">
          <OverviewSizes extra={this.props.extra} />
          <OverviewQty />
        </div>
        <div className="po-flex">
          <button className="po-add-to-bag">Add to Bag <i className="fas fa-plus"></i></button>
          <button className="po-favorite"><i className="far fa-star"></i></button>
        </div>
      </div>
    );
  }
}

class OverviewSizes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select id="po-select-size">
        <option selected disabled>Select Size</option>
        {
          this.props.extra.sizes.map((size) => {
            return <OverviewSize size={size} />;
          })
        }
      </select>
    );
  }
}

class OverviewSize extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option>{this.props.size[0]}</option>
    );
  }
}

class OverviewQty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default OverviewDetails;