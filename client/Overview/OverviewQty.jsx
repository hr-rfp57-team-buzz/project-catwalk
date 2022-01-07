import React from 'react';

const OverviewQty = (props) => {
  let quantities;
  if (props.qty) {
    quantities = [...Array(props.qty).keys()].map((item) => {
      return item + 1;
    });
  } else {
    quantities = ['-'];
  }

  return (
    <select id="po-select-qty" onChange={(e) => { props.updateQty(e); }}>
      {
        quantities.map((qty) => {
          return <OverviewQtyOption key={qty} qty={qty} />;
        })
      }
    </select>
  );
};

const OverviewQtyOption = (props) => {
  return (
    <option value={props.qty}>{props.qty}</option>
  );
};

export default OverviewQty;