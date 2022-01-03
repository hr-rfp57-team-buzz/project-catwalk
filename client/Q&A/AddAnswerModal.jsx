import React from 'react';

let AddAnswerModal = (props) => (
  <div>
    <form className='answerModal answerAdd'>
      <h1>Submit Your Answer</h1>
      <h3> {props.prodName} : {props.qBody}</h3>
      <label>Your Answer:</label>
      <textarea maxlength='1000' rows="10" cols='100'>
      </textarea>
      <label>Nickname: </label>
      <input placeholder='Example: jack543!' type='text'/>
      <h5>For privacy reasons, do not use yout full name or email address</h5>
      <label>Your email:</label>
      <input type='text' maxlength='60'/>
    </form>
  </div>
);

export default AddAnswerModal;