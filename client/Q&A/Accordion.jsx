import React from 'react';
import Answer from './Answer.jsx';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      answers: props.answers,
      loadedAnswers: []
    };
    this.setActive = this.setActive.bind(this);
    this.loadAnswers = this.loadAnswers.bind(this);
    // this.sort = this.sort.bind(this);
  }

  sort = () => {
    let arrayCopy = this.state.answers.slice();
    arrayCopy.sort((a, b) => (a[1].helpfulness > b[1].helpfulness) ? -1 : 1);
    arrayCopy.sort((a) => (a[1].name === 'Seller') ? -1 : 1);
    this.setState({
      loadedAnswers: arrayCopy
    })
  }

  setActive() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  loadAnswers() {
    console.log('loadAnswers is working! ', this.state.answers.slice(2).length);
    console.log(this.state.answers.slice(2));
    let newAnswers = this.state.answers.slice(2);
    let loadedAnswersCopy = this.state.loadedAnswers.slice();
    newAnswers.map((answer, i) => {
      if (this.state.isActive === false) {
        loadedAnswersCopy.push(answer);
        this.setState({
          loadedAnswers: [...loadedAnswersCopy, answer]
        })
      } else if (this.state.isActive === true) {
        this.setState({
          loadedAnswers: []
        })
      }
    })
  }

  render() {
    return (
      <div className='accordion-item'>
        <div className='accorion-title' onClick={() => {this.setActive(); this.loadAnswers(); this.sort();}}>
          <div>
            {this.state.isActive ? 'Collapse Answers' : 'Load More Answers'}
          </div>
        </div>
        {this.state.isActive && <div className="accordion-content"> {
          <>
            {this.state.loadedAnswers.map(answer => {
              return <Answer key={answer[0]} answer={answer} />
              console.log('Inside render: ', answer);
            })}
          </>
          }</div>}
      </div>
    )
  }
}

export default Accordion;