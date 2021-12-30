import React from 'react';
import axios from 'axios';

import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import MoreAnsweredQs from './MoreAnsweredQs.jsx';
import AddQuestion from './AddQuestion.jsx';
import Question from './Question.jsx';


class QuestionsAndAnswers extends React.Component {
  // const [question, setQuestion] = useState([]);
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      productId: 40360
    };
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions(this.state.productId);
  }


  getQuestions = (id) => {
    let page = 1;
    axios.get('/qa/questions', {
      params: { id, page },
      responseType: 'json',
    })
    .then((response) => {
      console.log('Response in Q&A: ', response);
      this.setState({
        questions: response.data.results
      })
    })
    .catch((err) => {
      console.error('Error! ', err);
    });
  }
  // useEffect(() => {
  //   getQuestions(productId);
  // }, []);

  render() {
    return (
      <>
        <SearchBar />
        <div className="questions-list">
          <QuestionsList questions={this.state.questions}/>
        </div>
        <MoreAnsweredQs prodId={this.state.productId} />
        <AddQuestion />
      </>
    );
  }
};

export default QuestionsAndAnswers;