import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import React, { useState, useEffect} from 'react';
import RatingReview from './RatingReviews.jsx';
import App from '../App.jsx';
import Rating from './Rating.jsx';
import Review from './Review.jsx';
import AddAReview from './AddAReview.jsx';

Enzyme.configure({adapter: new Adapter() });

describe('RatingReviews.jsx', () => {

  //Test to see if Ratings
  it('RatingReviews.jx renders div#rating-reviews that contains two componenets', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Rating));
    expect(wrapper.find(Review));
  });

  it('RR.jsx renders out addAReview.jsx', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AddAReview));
  });

  it('Should contain a div with clickable Stars somewhere inside <RR />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('.reviewClickableStars'));
  });


});



