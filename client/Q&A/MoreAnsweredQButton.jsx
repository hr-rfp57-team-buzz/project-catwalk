import React from 'react';

let MoreAnsweredButton = (props) => {
  return (
    <button className ='bottom-btn' onClick={(e) => { props.getMoreQs(props.id, props.count, e); props.increasePage();}}>More Answered Questions</button>
  )
}
export default MoreAnsweredButton;