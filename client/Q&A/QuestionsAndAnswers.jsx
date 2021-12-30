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
      allQuestions: [],
      questions: [],
      count: 1,
      productId: 400053
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.getAllQuestions = this.getAllQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions(this.state.productId);
    this.getAllQuestions(this.state.productId, this.state.count);
  }

  getAllQuestions = (id, page) => {
    axios.get('/qa/questions', {
      params: { id, page },
      responseType: 'json',
    })
    .then((response) => {
      if (response.data.results.length) {
        this.getAllQuestions(this.state.productId, this.state.count)
      }
      console.log('Response in getAllQuestions: ', response);
      response.data.results.map(question =>
        this.setState({
          allQuestions: [...this.state.allQuestions, question],
        }));
    })
    .then(() => {
      this.setState({ count: this.state.count += 1 })
    })
    .catch((err) => {
      console.error('Error! ', err);
    });
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
        <>
          {this.state.allQuestions.length ?
            <>
              <MoreAnsweredQs prodId={this.state.productId} />
              <AddQuestion />
            </>
            : <div className='no-questions'>
                <AddQuestion />
              </div>
          }
        </>
      </>
    );
  }
};

export default QuestionsAndAnswers;