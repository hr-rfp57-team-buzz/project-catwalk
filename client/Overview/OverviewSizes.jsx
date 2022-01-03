import React from 'react';

const OverviewSizes = (props) => {
  let selectSize = 'Select Size';
  let uniqueSizes = [];
  for (let i = 0; i < props.sizes.length; i++) {
    if (uniqueSizes.length === 0 || (props.sizes[i][0] !== uniqueSizes[uniqueSizes.length - 1] && props.sizes[i][1])) {
      uniqueSizes.push(props.sizes[i][0]);
    }
    if (i === props.sizes.length - 1 && uniqueSizes.length === 0) {
      selectSize = 'Out of Stock';
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

export default OverviewSizes;