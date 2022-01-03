import React from 'react';

const OverviewStyles = (props) => {
  return (
    <div className="po-styles">
      {
        props.allStyles.map((singleStyle, index) => {
          return (<OverviewStyle key={singleStyle.style_id} index={index} singleStyle={singleStyle} updateProduct={props.updateProduct} />);
        })
      }
    </div>
  );
};

const OverviewStyle = (props) => {
  let styling = {
    'background': 'url(' + props.singleStyle.photos[0].thumbnail_url + ')',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center'
  };
  let checkmark = 'po-style-check';
  props.singleStyle.selected ? checkmark = 'po-style-check active' : checkmark = 'po-style-check';

  return (
    <div className="po-style" style={styling} onClick={() => { props.updateProduct(props.index); }}>
      <div className={checkmark}><i className="fas fa-check"></i></div>
    </div>
  );
};

export default OverviewStyles;