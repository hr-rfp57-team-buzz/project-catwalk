import React from 'react';
import Overview from './Overview.jsx';
<<<<<<< HEAD
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
=======
import Related from './RelatedItems.jsx';
>>>>>>> 0cd7f17 (Added RelatedItems.jsx, and included it in App.jsx, designing basics in CSS/HTML next)

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
        <div className="related">
          <Related/>
        </div>
        <div className="your-outfit">Outfit</div>
        <div id="questions-answers">Questions &amp; Answers</div>
        <QuestionsAndAnswers />
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