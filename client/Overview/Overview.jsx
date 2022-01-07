import React, { useState, useContext, useRef } from 'react';
import { OverviewContext } from './OverviewContext.jsx';
import OverviewExpanded from './OverviewExpanded.jsx';
import OverviewAnnouncement from './OverviewAnnouncement.jsx';
import OverviewGallery from './OverviewGallery.jsx';
import OverviewDetails from './OverviewDetails.jsx';
import OverviewDescription from './OverviewDescription.jsx';

const Overview = (props) => {

  const [product, updateProduct] = useContext(OverviewContext);
  const [expandedView, setExpandedView] = useState(false);
  const counter = useRef(1);

  const updateExpandedView = (e) => {
    if (e.target.classList.value !== 'po-slide' && e.target.classList.value !== 'po-expanded') {
      return;
    }
    document.body.classList.toggle('active');
    setExpandedView(!expandedView);
  };


  return (
    <div id="product-overview">
      {expandedView ? <OverviewExpanded product={product} counter={counter} updateExpandedView={updateExpandedView} /> : ''}
      <OverviewAnnouncement />
      <div className="po-flex">
        <OverviewGallery product={product} expandedCounter={counter} updateExpandedView={updateExpandedView} />
        <OverviewDetails product={product} updateProduct={updateProduct} />
      </div>
      <OverviewDescription product={product} />
    </div>
  );
};

export default Overview;