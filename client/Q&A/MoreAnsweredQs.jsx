import React from 'react';
import axios from 'axios';

// import QuestionsList from './QuestionsList.jsx';
import Question from './Question.jsx';
import MoreAnsweredButton from './MoreAnsweredQButton.jsx';

class MoreAnsweredQs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toRender: [],
      allQuestions: [],
      count: 2,
      showButton: true
    }

    this.getMoreQs = this.getMoreQs.bind(this);
    this.increasePage = this.increasePage.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow = () => {
    this.setState((prevState) => {
      return {
        showButton: !prevState.showButton
      }
    });
  }

  increasePage = () => {
    if (this.state.allQuestions.length !== 0) {
      console.log('Hi')
    }
    this.setState({
      count: this.state.count += 1
    })
  }

  getMoreQs = (id, page = 2, e) => {
    e.preventDefault();
    axios.get('/qa/questions', {
      params: { id, page },
      responseType: 'json',
    })
    .then((response) => {
      console.log('Response in MoreAnsweredQs: ', response);
      if (response.data.results.length === 0) {
        this.handleShow();
        this.setState({ allQuestions: []})
      }
      response.data.results.map(question =>
        this.setState({
          toRender: [...this.state.toRender, question]
        }));
    })
    .catch((err) => {
      console.error('Error! ', err);
    });
  }
  render() {
    return (
      <>
      <div className="questionCard">
        {this.state.toRender.length ?
          this.state.toRender.map(question =>
            <Question question={question}/>
          ) : null
        }
      </div>
          {/* <form> */}
            {this.state.showButton ? <MoreAnsweredButton id={this.props.prodId} count={this.state.count} getMoreQs={this.getMoreQs} increasePage={this.increasePage}/> :null}
          {/* </form> */}
      </>
    )
  }
}

export default MoreAnsweredQs;


{/* <button className='bottom-btn' type="submit"     value="More Answered Question" onClick={ (e) => {
              this.getMoreQs(this.props.prodId, this.state.count, e);
              this.increasePage();
            }}>More Answered Questions</button> */}