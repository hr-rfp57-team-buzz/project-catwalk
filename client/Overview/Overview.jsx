import React from 'react';
import OverviewAnnouncement from './OverviewAnnouncement.jsx';
import OverviewImage from './OverviewImage.jsx';
import OverviewDetails from './OverviewDetails.jsx';
import OverviewDescription from './OverviewDescription.jsx';
import axios from 'axios';

const sortSizes = (product) => {
  const result = {
    sizes: []
  };
  for (let key in product.skus) {
    result['sizes'].push([product.skus[key]['size'], product.skus[key]['quantity']]);
  }
  return result;
};

const resetSelection = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].selected = false;
  }
};

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      extra: {
        sizes: []
      },
      variations: []
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        const id = res.data[0].id;
        return axios.get(`http://localhost:3000/products/${id}`);
      })
      .then((res) => {
        this.setState({product: res.data});
      })
      .then((res) => {
        return axios.get('http://localhost:3000/products/40344/styles');
      })
      .then((res) => {
        resetSelection(res.data.results);
        const selected = res.data.results[0];
        selected.selected = true;
        const container = sortSizes(selected);
        container['name'] = selected.name;
        container['original_price'] = selected.original_price;
        container['sale_price'] = selected.sale_price;
        container['photos'] = selected.photos;
        this.setState({extra: container});
        this.setState({variations: res.data.results});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleStyleChange(index) {
    resetSelection(this.state.variations);
    const selected = this.state.variations[index];
    selected.selected = true;
    const container = sortSizes(selected);
    container['name'] = selected.name;
    container['original_price'] = selected.original_price;
    container['sale_price'] = selected.sale_price;
    container['photos'] = selected.photos;
    this.setState({extra: container});
    this.setState({variations: this.state.variations});
  }

  render() {
    return (
      <div id="product-overview">
        <OverviewAnnouncement />
        <div className="po-flex">
          <OverviewImage extra={this.state.extra} />
          <OverviewDetails product={this.state.product} extra={this.state.extra} variations={this.state.variations} handleStyleChange={this.handleStyleChange} />
        </div>
        <OverviewDescription product={this.state.product} />
      </div>
    );
  }
}

export default Overview;