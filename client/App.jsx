import React from 'react';
import Overview from './Overview/Overview.jsx';
import { OverviewProvider } from './Overview/OverviewContext.jsx';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';
import RatingReviews from './RatingReviews/RatingReviews.jsx';

import Related from './RelatedItems.jsx';

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
        <OverviewProvider>
          <Overview />
        </OverviewProvider>
        <div id="related-products">Related Products</div>
        <div className="related">
          <Related />
        </div>
        <div className="your-outfit">Outfit</div>
        <div id="questions-answers">Questions &amp; Answers</div>
        <QuestionsAndAnswers />
        <RatingReviews />
      </div>
    );
  }
}




export default App;