import React from 'react';
import Overview from './Overview.jsx';
import RatingReviews from './RatingReviews.jsx';

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
        <Overview />
        <div id="related-products">Related Products</div>
          <div className="related"> Related</div>
          <div className="your-outfit">Outfit</div>
        <div id="questions-answers">Questions &amp; Answers</div>
        <RatingReviews />
      </div>
    );
  }
}




export default App;