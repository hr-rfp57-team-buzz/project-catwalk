import React from 'react';

class OverviewQty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr;
    if (this.props.qty) {
      arr = [...Array(this.props.qty).keys()].map((item) => {
        return item + 1;
      });
    } else {
      arr = ['-'];
    }
    return (
      <select id="po-select-qty">
        {
          arr.map((qty) => {
            return <QtyOption qty={qty} />;
          })
        }
      </select>
    );
  }
}

class QtyOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value={this.props.qty}>{this.props.qty}</option>
    );
  }
}

export default OverviewQty;