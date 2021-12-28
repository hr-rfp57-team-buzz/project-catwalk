import React, { useState, useEffect, useContext } from 'react';
import OverviewDetails from './OverviewDetails.jsx';
import {OverviewContext} from './OverviewContext.jsx';
import axios from 'axios';

const Overview = () => {
  // const [photo, setPhoto] = useState('photograph');
  const [currentProduct, setCurrentProduct] = useState([]);
  const [products, setProducts, styles, setStyles] = useContext(OverviewContext);

  useEffect(() => {
    axios.get('/products')
      .then((res) => {
        console.log(res.data);
        setCurrentProduct(res.data[0]);
        console.log(res.data[0].id);
        const url = '/products/' + res.data[0].id + '/styles';
        axios.get(url)
          .then((res) => {
            console.log(res.data.results);
            setStyles(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, []);

  return (
    <div id="product-overview">
      <div className="announcement">Site-Wide Announcement Message! -- Sale / Discount <strong>Offer</strong> -- <u>New Product Highlight</u></div>
      <div className="po-flex">
        <OverviewImage />
        <OverviewDetails product={currentProduct} fashion={styles} />
      </div>
    </div>
  );
};

const carousel = () => {
  console.log('clicked');
};


const OverviewImage = (props) => {
  // const rightArrow = document.querySelector('.po-right-arrow');
  // rightArrow.addEventListener('click', carousel);
  let counter = 0;
  const prevSlide = () => {
    const slideReel = document.querySelector('.slide-reel');
    counter--;
    const move = (counter * -100) + '%';
    slideReel.style.transform = 'translateX(' + move + ')';
  };

  const nextSlide = () => {
    const slideReel = document.querySelector('.slide-reel');
    counter++;
    const move = (counter * -100) + '%';
    slideReel.style.transform = 'translateX(' + move + ')';
  };

  return (
    <div className="po-image">
      <div onClick={prevSlide} className="po-left-arrow"><i className="fas fa-arrow-left"></i></div>
      <div onClick={nextSlide} className="po-right-arrow"><i className="fas fa-arrow-right"></i></div>
      <div className="po-mini-images">
        <div className="po-mini-indv"></div>
        <div className="po-mini-indv"></div>
        <div className="po-mini-indv"></div>
        <div className="po-mini-indv"></div>
        <div className="po-mini-indv"></div>
      </div>
      <div className="slide-reel">
        <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
        <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
        <img src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
      </div>
    </div>
  );
};

export default Overview;