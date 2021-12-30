import React from 'react';
import OverviewStyles from './OverviewStyles.jsx';
import OverviewSizes from './OverviewSizes.jsx';
import OverviewQty from './OverviewQty.jsx';

class OverviewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.updateSize = this.updateSize.bind(this);
  }

  updateSize(e) {
    let qty = 0;
    for (let i = 0; i < this.props.extra.sizes.length; i++) {
      if (this.props.extra.sizes[i][0] === e.target.value) {
        qty += this.props.extra.sizes[i][1];
      }
    }
    qty > 15 ? qty = 15 : qty = qty;
    this.setState({qty, qty});
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
          <div className="po-style-name-selected">{this.props.extra.name ? this.props.extra.name : ''}</div>
        </div>
        <OverviewStyles variations={this.props.variations} handleStyleChange={this.props.handleStyleChange} />
        <div className="po-select-section">
          <OverviewSizes extra={this.props.extra} updateSize={this.updateSize} />
          <OverviewQty qty={this.state.qty} />
        </div>
        <div className="po-flex">
          <button className="po-add-to-bag">Add to Bag <i className="fas fa-plus"></i></button>
          <button className="po-favorite"><i className="far fa-star"></i></button>
        </div>
      </div>
    );
  }
}

export default OverviewDetails;