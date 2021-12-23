import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div id="container">
        <h1>Simple App</h1>
        <h2>Test Element! Delete me!</h2>
        <div id="product-overview">
          <div className="po-image">Product Picture</div>
          <div className="po-details"></div>
        </div>
        <div id="related-products">Related Products</div>
          <div className="related"> Related</div>
          <div className="your-outfit">Outfit</div>
        <div id="questions-answers">Questions &amp; Answers</div>
        <div id="ratings-reviews">
          Ratings &amp; Reviews
          <div className="ratingOverview"> Rating overview</div>
          <div className="review">Review</div>
        </div>
      </div>
    );
  }
}




export default App;