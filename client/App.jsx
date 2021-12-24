import React from 'react';
import Overview from './Overview.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
import RatingReviews from './RatingReviews.jsx';
=======
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
>>>>>>> cc8abc0 (Added Questions and Answers widget along with individual module components)
=======
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
>>>>>>> b8e1a7b (Added hardcoded data to format question card)

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
<<<<<<< HEAD
        <RatingReviews />
=======
        <QuestionsAndAnswers />
        <div id="ratings-reviews">
          Ratings &amp; Reviews
          <div className="ratingOverview"> Rating overview</div>
          <div className="review">Review</div>
        </div>
>>>>>>> cc8abc0 (Added Questions and Answers widget along with individual module components)
      </div>
    );
  }
}




export default App;