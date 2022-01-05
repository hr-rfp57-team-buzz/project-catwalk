import React from 'react';
import QuestionsList from './QuestionsList.jsx';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      filtered: []
    }
  }
  render() {
    return (
      <>
        <div className="search-wrapper">
          <form>
            <input onChange={(e) => {this.props.handleInput(e); this.props.searchOnInput();}} className="search-bar" type="text" placeholder="Have A Question? Search For Answers..."/>
            <button type='submit' onClick={(e) => { this.props.handleSubmit(e) }} className="search-button"><i className="fas fa-search"></i></button>
          </form>
        </div>
          {this.state.filtered.length ? <QuestionsList questions={this.state.filtered} /> : null}
      </>
    )
  }
}

export default SearchBar;