import React from 'react';

const OverviewSizes = (props) => {
  let selectSize = 'select Size';
  let uniqueSizes = [];
  for (let i = 0; i < props.sizes.length; i++) {
    if (uniqueSizes.length === 0 || props.sizes[i][0] !== uniqueSizes[uniqueSizes.length - 1]) {
      if (props.sizes[i][1]) {
        uniqueSizes.push(props.sizes[i][0]);
      }
    }
    if (i === props.sizes.length - 1) {
      if (uniqueSizes.length === 0) {
        selectSize = 'OUT OF STOCK';
      }
    }
  }
  return (
    <select id="po-select-size" onChange={(e) => { props.updateQty(e); }}>
      <option selected disabled>{selectSize}</option>
      {
        uniqueSizes.map((size, index) => {
          return <OverviewSize key={index} size={size} />;
        })
      }
    </select>
  );
};

const OverviewSize = (props) => {
  return (
    <option value={props.size}>{props.size}</option>
  );
};

// class OverviewSizes extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
    // let selectSize = 'select Size';
    // let uniqueSizes = [];
    // for (let i = 0; i < this.props.extra.sizes.length; i++) {
    //   if (uniqueSizes.length === 0 || this.props.extra.sizes[i][0] !== uniqueSizes[uniqueSizes.length - 1]) {
    //     if (this.props.extra.sizes[i][1]) {
    //       uniqueSizes.push(this.props.extra.sizes[i][0]);
    //     }
    //   }
    //   if (i === this.props.extra.sizes.length - 1) {
    //     if (uniqueSizes.length === 0) {
    //       selectSize = 'OUT OF STOCK';
    //     }
    //   }
    // }
//     return (
      // <select id="po-select-size" onChange={(e) => { this.props.updateSize(e); }}>
      //   <option selected disabled>{selectSize}</option>
      //   {
      //     uniqueSizes.map((size, index) => {
      //       return <OverviewSize key={index} size={size} />;
      //     })
      //   }
      // </select>
//     );
//   }
// }

// class OverviewSize extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <option value={this.props.size}>{this.props.size}</option>
//     );
//   }
// }

export default OverviewSizes;