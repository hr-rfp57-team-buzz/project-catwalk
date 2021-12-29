import React from 'react';

class OverviewSizes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select id="po-select-size">
        <option selected disabled>Select Size</option>
        {
          this.props.extra.sizes.map((size, index) => {
            return <OverviewSize key={index} size={size} />;
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

export default OverviewSizes;