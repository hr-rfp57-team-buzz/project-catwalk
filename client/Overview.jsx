import React, { useState } from 'react';

const Overview = () => {
  const [photo, setPhoto] = useState('photograph');

  return (
    <div id="product-overview">
      <div className="announcement">Site-Wide Announcement Message! -- Sale / Discount <strong>Offer</strong> -- <u>New Product Highlight</u></div>
      <div className="po-flex">
        <h2>Testing</h2>
        <OverviewImage photo={photo} />
        <OverviewDetails />
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

const OverviewDetails = (props) => {
  return (
    <div className="po-details">
      <div className="po-ratings">
        <div className="po-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
        </div>
        <div className="po-reviews">Read all reviews</div>
      </div>
      <div className="po-category">Category</div>
      <div className="po-product-name">Expanded Product Name</div>
      <div className="po-price">$365</div>
      <div className="po-style-name">
        <div>Style <i class="fas fa-chevron-right"></i></div>
        <div className="po-selected-style-name">Selected Style</div>
      </div>
      <div className="po-styles">
        <div className="po-indv-style"></div>
        <div className="po-indv-style"></div>
        <div className="po-indv-style"></div>
        <div className="po-indv-style"></div>
        <div className="po-indv-style"></div>
        <div className="po-indv-style"></div>
        <div className="po-indv-style"></div>
        <div className="po-indv-style"></div>
      </div>
      <div className="po-select-section">
        <select id="po-select-size">
          <option selected disabled>Select Size</option>
          <option>Extra Small</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </select>
        {/* <div className="po-arrow-down"><i class="fas fa-chevron-down"></i></div> */}
        <select id="po-select-qty">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="po-add-to-bag">
        <button id="po-add-to-bag">Add to Bag <i className="fas fa-plus"></i></button>
        <button id="po-favorite"><i className="far fa-star"></i></button>
      </div>
    </div>
  );
};

export default Overview;