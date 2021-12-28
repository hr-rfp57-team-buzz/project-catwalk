import React from 'react';
import OverviewImage from './OverviewImage.jsx';
import OverviewDetails from './OverviewDetails.jsx';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      variations: []
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        console.log(res.data);
        const id = res.data[0].id;
        return axios.get(`http://localhost:3000/products/${id}`);
      })
      .then((res) => {
        console.log(res.data);
        this.setState({product: res.data});
      })
      .then((res) => {
        return axios.get('http://localhost:3000/products/40344/styles');
      })
      .then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
          res.data.results[i].selected = false;
        }
        res.data.results[0].selected = true;
        this.setState({variations: res.data.results});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleStyleChange(index) {
    console.log('hello')
    // for (let i = 0; i < this.state.variations.length; i++) {
    //   variations[i].selected = false;
    // }
    // variations[index].selected = true;
    // this.setState({variations: variations});
  }

  render() {
    return (
      <div id="product-overview">
        <div className="po-announcement">Site-Wide Announcement Message! -- Sale / Discount <strong>Offer</strong> -- <u>New Product Highlight</u></div>
        <div className="po-flex">
          <OverviewImage />
          <OverviewDetails product={this.state.product} variations={this.state.variations} handleStyleChange={this.handleStyleChange} />
        </div>
      </div>
    );
  }
}

export default Overview;