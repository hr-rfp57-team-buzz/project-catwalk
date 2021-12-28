import React from 'react';

const OverviewStyles = (props) => {
  return (
    <div className="po-styles">
      {
        props.fashion.map((item) => {
          return (<OverviewStyle fashion={item} key={Math.random().toFixed(8)} />);
        })
      }
    </div>
  );
};

const OverviewStyle = (props) => {
  let styling;
  if (props.fashion) {
    styling = {
      'background': 'url(' + props.fashion.photos[0].thumbnail_url + ')',
      'backgroundSize': 'cover',
      'backgroundPosition': 'center'
    };
  }

  return (
    <div className="po-style" style={styling}></div>
  );
};

export default OverviewStyles;