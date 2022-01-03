import React from 'react';

const OverviewDescription = (props) => {
  return (
    <div className="po-description">
      <div className="po-desc-expanded">
        <div className="po-desc-wrap">
          <h2>{props.product.slogan}</h2>
          <p>{props.product.description}</p>
        </div>
      </div>
      <div className="po-desc-points">
        <ul>
          <li><i className="fas fa-check"></i> GMO and Pesticide-free</li>
          <li><i className="fas fa-check"></i> Made with 100% Genetic Modification</li>
          <li><i className="fas fa-check"></i> This is made up</li>
          <li><i className="fas fa-check"></i> It doesn't matter</li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewDescription;